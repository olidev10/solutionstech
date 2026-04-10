# Google Sheets Integration Setup Guide

## Create Your Google Sheets

### 1. Projects Sheet

Create a new Google Sheet with these columns (in exactly this order):

| type | title | description | url | bgColor | accentColor |
|------|-------|-------------|-----|---------|-------------|
| Site vitrine · Cabinet d'avocats | Cabinet Lefebvre & Associés | Refonte complète avec SEO local... | https://cabinet-lefebvre.fr | #0a0a0f | rgba(110,231,183,0.3) |
| Application web · SaaS | GestPro Dashboard | Plateforme de gestion pour PME... | https://gestpro.app | #13131a | rgba(129,140,248,0.35) |

**Column descriptions:**
- `type` - Category/type of project (e.g., "Site vitrine", "E-commerce")
- `title` - Project name
- `description` - Project description
- `url` - Link to live project (optional, leave empty if not available)
- `bgColor` - Background color for the card mock-up (hex format, e.g., `#0a0a0f`)
- `accentColor` - Accent color for highlights (RGBA format, e.g., `rgba(110,231,183,0.3)`)

### 2. Services Sheet

Create another Google Sheet with these columns:

| icon | title | description | tags |
|------|-------|-------------|------|
| 🌐 | Création de site web | Sites vitrine, institutionnels... | Next.js\|React\|Tailwind\|Vercel |
| 🛒 | E-commerce | Boutiques en ligne complètes... | Shopify\|WooCommerce\|Stripe |

**Column descriptions:**
- `icon` - Emoji or single character
- `title` - Service name
- `description` - Service description
- `tags` - Technologies/tools, separated by `\|` (backslash pipe, not just pipe)

## Get Your Sheet URLs

1. **In Google Sheets**, go to **File → Share**
2. Click **Change** and select **"Anyone with the link can view"** (make it public)
3. Copy your sheet URL from the browser. It looks like:
   ```
   https://docs.google.com/spreadsheets/d/ABC123XYZ/edit#gid=0
   ```

4. Extract:
   - `SHEET_ID`: The part between `/d/` and `/edit` (e.g., `ABC123XYZ`)
   - `SHEET_GID`: The sheet tab ID after `#gid=` (e.g., `0` for first tab)

5. Create the CSV export URLs:
   ```
   https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={SHEET_GID}
   ```

## Update `.env.local`

Edit `.env.local` and replace these values:

```env
NEXT_PUBLIC_PROJECTS_SHEET_URL=https://docs.google.com/spreadsheets/d/YOUR_PROJECTS_SHEET_ID/export?format=csv&gid=0

NEXT_PUBLIC_SERVICES_SHEET_URL=https://docs.google.com/spreadsheets/d/YOUR_SERVICES_SHEET_ID/export?format=csv&gid=0
```

## Test Your Setup

1. Go to your CSV export URLs in a browser
2. You should see your data in CSV format
3. Run `pnpm dev` and check that projects/services load

## How It Works

- Data fetches **on every page request** (no caching), so changes appear immediately
- The component automatically parses the CSV and renders it
- If a URL is provided for a project, a "Voir le projet →" link appears on the card

## Troubleshooting

- **Data not updating?** Make sure the sheet is **publicly shared**
- **Blank page?** Check that your URLs are correct in `.env.local`
- **Parse errors?** Ensure columns are in the correct order and tabs are public

## Future: Optional Optimizations

- Add **Incremental Static Regeneration (ISR)** to cache for N seconds instead of fetching on every request
- Use **Google Sheets API** for more features (no CSV parsing needed)
- Add a **revalidation schedule** to update automatically on a cron job
