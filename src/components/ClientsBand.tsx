"use client";

export default function ClientsBand() {
  const clients = [
    "StartupX",
    "Cabinet Moreau",
    "TechPME",
    "Hôtel Riviera",
    "AgroSud",
    "ImmoBuild",
    "DataConseil",
    "MedFirst",
    "LegalPro",
  ];

  return (
    <div className="clients-band">
      <div className="clients-label">Ils nous font confiance</div>
      <div className="clients-scroll">
        <div className="clients-inner">
          {clients.map((client, idx) => (
            <span key={idx} className="client-name">
              {client}
            </span>
          ))}
          {clients.map((client, idx) => (
            <span key={`repeat-${idx}`} className="client-name">
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
