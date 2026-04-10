/**
 * Fetch and parse data from a public Google Sheet (CSV format)
 * 
 * To use:
 * 1. Create a public Google Sheet
 * 2. Go to File > Share > Change to "Anyone with the link can view"
 * 3. Copy the sheet ID from the URL
 * 4. Use this URL: https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={SHEET_GID}
 *    - SHEET_ID: The ID in your sheets URL
 *    - SHEET_GID: The tab ID (0 for first tab, visible in URL with #gid=)
 */

interface Project {
  type: string;
  title: string;
  description: string;
  url?: string;
  bgColor: string;
  accentColor: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote ("" = literal ")
        current += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      // End of field (only if not inside quotes)
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  // Add last field
  values.push(current.trim());

  return values;
}

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];

  // Parse header
  const headers = parseCSVLine(lines[0])
    .map(h => h.toLowerCase());

  // Parse rows
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = parseCSVLine(line);
      const row: Record<string, string> = {};
      headers.forEach((header, idx) => {
        row[header] = values[idx] || '';
      });
      return row;
    });
}

export async function fetchProjects(): Promise<Project[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_PROJECTS_SHEET_URL;

  if (!sheetUrl) {
    console.error('NEXT_PUBLIC_PROJECTS_SHEET_URL is not set');
    return [];
  }

  try {
    const response = await fetch(sheetUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch projects');

    const csv = await response.text();
    const rows = parseCSV(csv);
    // console.log('Fetched projects:', rows);

    return rows
      .filter(row => row.title && row.title.trim())
      .map(row => ({
        type: row.type || '',
        title: row.title || '',
        description: row.description || '',
        url: row.url || '',
        bgColor: row.bgcolor || '#0a0a0f',
        accentColor: row.accentcolor || 'rgba(110,231,183,0.3)',
      }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function fetchServices(): Promise<Service[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_SERVICES_SHEET_URL;

  if (!sheetUrl) {
    console.error('NEXT_PUBLIC_SERVICES_SHEET_URL is not set');
    return [];
  }

  try {
    const response = await fetch(sheetUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch services');

    const csv = await response.text();
    const rows = parseCSV(csv);

    return rows
      .filter(row => row.title && row.title.trim())
      .map(row => ({
        icon: row.icon || '⚙️',
        title: row.title || '',
        description: row.description || '',
        tags: row.tags ? row.tags.split('|').map(t => t.trim()) : [],
      }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}
