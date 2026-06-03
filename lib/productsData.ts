export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  chemicalComposition: { label: string; value: number }[];
  applications: string[];
  specs: { [key: string]: string };
  qualityParams: string[];
  packaging: string[];
  industries: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "china-clay",
    name: "China Clay",
    shortDesc: "High-whiteness premium hydrated aluminum silicate mineral.",
    description: "Our China Clay (Kaolin) is a highly refined hydrated aluminum silicate characterized by its fine particle size, excellent whiteness, and chemical inertness. It is mined and processed through state-of-the-art classification units to ensure consistency and purity, meeting the stringent demands of global ceramic and polymer manufacturers.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 46.50 },
      { label: "Al2O3 (Aluminum Oxide)", value: 38.20 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.35 },
      { label: "TiO2 (Titanium Dioxide)", value: 0.40 },
      { label: "LOI (Loss on Ignition)", value: 13.80 },
    ],
    applications: [
      "Tableware and fine porcelain bodies",
      "Vitrified tile manufacturing",
      "Paints, pigments, and protective coatings",
      "Paper coating and filler applications",
      "Polymers and rubber compounding",
    ],
    specs: {
      "Whiteness (ISO)": "88% - 91%",
      "Particle Size (-2 Micron)": "78% - 82%",
      "Specific Gravity": "2.62",
      "Moisture Content": "1.0% Max",
      "pH Level": "6.0 - 7.5",
    },
    qualityParams: [
      "Strict control on Fe2O3 content to guarantee firing whiteness",
      "Consistent particle size distribution via hydrocyclone classification",
      "Controlled viscosity profiles for casting slip formulations",
    ],
    packaging: [
      "25 Kg laminated HDPE bags",
      "50 Kg double-walled sacks",
      "1.0 - 1.25 Metric Ton jumbo bags with lifting loops",
      "Custom palletized container loads with shrink-wrap sealing",
    ],
    industries: ["Ceramics", "Vitrified Tiles", "Paints & Coatings", "Paper & Pulp", "Plastics & Rubber"],
  },

  {
    id: "kaolin-clay",
    name: "Kaolin Clay",
    shortDesc: "Ultra-fine particle size clay for coating and filler applications.",
    description: "Our Kaolin Clay is water-washed and thermally classified to produce high-brightness, low-residue mineral solutions. It features supreme dispersion properties, low oil absorption, and chemical inertness. It is the premier filler and extender choice for top-grade paint, rubber, ink, and paper industries.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 46.80 },
      { label: "Al2O3 (Aluminum Oxide)", value: 37.90 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.40 },
      { label: "TiO2 (Titanium Dioxide)", value: 0.35 },
      { label: "LOI (Loss on Ignition)", value: 13.90 },
    ],
    applications: [
      "Premium latex paint fillers and extenders",
      "Architectural coatings and sealants",
      "Rubber reinforcement and mechanical stability",
      "Ink pigment dispersion helpers",
    ],
    specs: {
      "Brightness (ISO)": "89.5% Min",
      "Residue on 325 Mesh": "0.02% Max",
      "Oil Absorption": "42 - 48 g/100g",
      "Free Moisture": "1.0% Max",
      "Average Particle Size (d50)": "0.6 - 0.8 Micron",
    },
    qualityParams: [
      "Strict spectrophotometric whiteness controls",
      "Laser diffraction particle size scanning per batch",
      "Conductivity monitoring to guarantee chemical purity",
    ],
    packaging: [
      "25 Kg paper bags (multi-walled, valve style)",
      "1.0 MT jumbo bags on heat-treated pallets",
    ],
    industries: ["Paints & Coatings", "Plastics & Rubber", "Paper & Pulp", "Inks & Adhesives"],
  },
  {
    id: "calcined-clay",
    name: "Calcined Clay",
    shortDesc: "High-temperature calcined kaolin with superior opacity and hardness.",
    description: "Processed by heat-treating hydrous clay in computer-controlled rotary kilns, our Calcined Clay (calcined kaolin) is engineered for maximum whiteness and opacity. Calcination alters the mineral structure, increasing hardness, improving electrical insulation, and creating a porous network that enhances optical scattering in paints and cables.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 52.40 },
      { label: "Al2O3 (Aluminum Oxide)", value: 44.50 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.45 },
      { label: "TiO2 (Titanium Dioxide)", value: 0.50 },
      { label: "LOI (Loss on Ignition)", value: 0.50 },
    ],
    applications: [
      "High-voltage electrical cable insulation",
      "Titanium Dioxide (TiO2) extension in architectural paint",
      "Thermal papers and specialty films",
      "Polishing compounds and engineering plastics",
    ],
    specs: {
      "Whiteness (ISO)": "92.5% - 94.0%",
      "Refractive Index": "1.62",
      "Oil Absorption": "55 - 65 g/100g",
      "LOI (Thermal Loss)": "0.5% Max",
      "pH (10% aqueous slurry)": "5.5 - 6.5",
    },
    qualityParams: [
      "Rigorous kiln temperature tracking (up to 1050°C)",
      "Continuous monitoring of TiO2 extender properties",
      "Absolute control on low LOI parameters",
    ],
    packaging: [
      "25 Kg paper bags",
      "0.8 - 1.0 MT palletized jumbo bags with shrink wrap",
    ],
    industries: ["Paints & Coatings", "Electrical Cables", "Paper & Pulp", "Plastics & Polymers"],
  },
  {
    id: "washed-clay",
    name: "Washed Clay",
    shortDesc: "Hydraulically washed, grit-free clay for high-performance casting.",
    description: "Our Washed Clay undergoes advanced hydraulic washing and classification. This extensive process removes grit, free silica, and impurities, yielding a highly purified, mineralogically stable casting clay. It is ideal for sanitaryware pressure casting and high-voltage porcelain insulation.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 47.10 },
      { label: "Al2O3 (Aluminum Oxide)", value: 36.80 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.50 },
      { label: "TiO2 (Titanium Dioxide)", value: 0.60 },
      { label: "LOI (Loss on Ignition)", value: 13.50 },
    ],
    applications: [
      "Sanitaryware high-pressure casting lines",
      "High-tension electrical bushings and insulators",
      "Artware glaze bases",
      "Extruded ceramic filters",
    ],
    specs: {
      "Whiteness (Fired at 1200°C)": "85.0% Min",
      "Grit Content (+45 Micron)": "0.05% Max",
      "Viscosity (at 100s-1)": "120 - 150 mPa.s",
      "Deflocculant Demand": "0.28% - 0.32%",
      "Specific Surface Area (BET)": "12 - 15 m²/g",
    },
    qualityParams: [
      "Rigorous sieving and grid filtration oversight",
      "Daily deflocculation optimization studies",
      "Rheological slip analysis in the physical testing laboratory",
    ],
    packaging: [
      "25 Kg bags",
      "1.0 MT jumbo bags with dust-free inner liners",
    ],
    industries: ["Sanitaryware", "Electrical Insulators", "Ceramics"],
  },
  {
    id: "ceramic-grade-clay",
    name: "Ceramic Grade Clay",
    shortDesc: "Standardized structural clay body formulations.",
    description: "Sarathi Ceramic Grade Clay is a custom-blended, quality-assured mineral product designed for porcelain, tableware, and glaze applications. It balances high firing whiteness with thermal contraction compatibility, preventing glaze micro-cracking and body deformation.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 48.20 },
      { label: "Al2O3 (Aluminum Oxide)", value: 35.50 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.65 },
      { label: "TiO2 (Titanium Dioxide)", value: 0.80 },
      { label: "LOI (Loss on Ignition)", value: 12.80 },
    ],
    applications: [
      "Fine bone china and tableware",
      "Frit formulations and glazes",
      "Decorative art ceramics",
      "Ceramic tile bodies",
    ],
    specs: {
      "Fired Whiteness (1220°C)": "84.5% - 87.0%",
      "Sieve Residue (45 Micron)": "0.2% Max",
      "Firing Shrinkage": "7.5% - 9.0%",
      "Dry Strength (MOR)": "2.2 - 2.8 MPa",
      "Water Absorption (Fired)": "0.1% Max",
    },
    qualityParams: [
      "Kiln testing of color values under reducing and oxidizing atmospheres",
      "Dry bending test audits",
      "Glaze fusion tests in test kilns",
    ],
    packaging: [
      "50 Kg bags",
      "Jumbo bags on double pallets",
    ],
    industries: ["Ceramics", "Tableware & Bone China", "Frits & Glazes"],
  },
  {
    id: "tile-grade-clay",
    name: "Tile Grade Clay",
    shortDesc: "Vitrification helper clay for high-strength porcelain tiles.",
    description: "Specially developed for vitrified, porcelain, and glazed tile bodies, our Tile Grade Clay provides excellent vitrification kinetics at lower temperatures. It helps tile manufacturers achieve maximum compaction, high mechanical strength, and minimal dimensional variance after firing.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 62.40 },
      { label: "Al2O3 (Aluminum Oxide)", value: 22.80 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.85 },
      { label: "TiO2 (Titanium Dioxide)", value: 1.10 },
      { label: "LOI (Loss on Ignition)", value: 7.50 },
    ],
    applications: [
      "Double charge vitrified tiles",
      "Glazed porcelain tile bodies",
      "Heavy-duty industrial floor tiles",
      "Terracotta and brick structures",
    ],
    specs: {
      "Vitrification Temperature": "1180°C - 1220°C",
      "Fired Whiteness (L value)": "82.0 - 85.0",
      "Bending Strength (MOR)": "38.0 MPa Min (Fired)",
      "Residue on 75 Micron": "1.0% Max",
      "Fired Shrinkage": "6.0% - 7.5%",
    },
    qualityParams: [
      "Strict control on alkaline fluxes (K2O, Na2O)",
      "High temperature bending strength verification",
      "Compaction ratio assessment",
    ],
    packaging: [
      "Bulk container loaders",
      "1.2 MT jumbo bags with cross-corner loops",
    ],
    industries: ["Vitrified Tiles", "Ceramic Tiles", "Construction Materials"],
  },
  {
    id: "custom-mineral-solutions",
    name: "Custom Mineral Solutions",
    shortDesc: "Bespoke engineered mineral blends for individual factory setups.",
    description: "At Sarathi, we co-engineer mineral blends matching our clients' specific kiln profiles, casting processes, and chemistry targets. Our in-house research laboratory crafts customized formulations of clay, silica, and feldspar to optimize process efficiency and cut manufacturing failure rates.",
    chemicalComposition: [
      { label: "SiO2 (Silicon Dioxide)", value: 50.00 },
      { label: "Al2O3 (Aluminum Oxide)", value: 34.00 },
      { label: "Fe2O3 (Iron Oxide)", value: 0.50 },
      { label: "TiO2 (Titanium Dioxide)", value: 0.70 },
      { label: "LOI (Loss on Ignition)", value: 11.50 },
    ],
    applications: [
      "Custom fast-firing porcelain tile lines",
      "Pressure casting sanitaryware lines with unique parameters",
      "Specialty refractory shapes",
      "Advanced glass filler formulations",
    ],
    specs: {
      "Custom Chemistry Limits": "Guaranteed within ±0.5% tolerance",
      "Particle Distribution Control": "Engineered PSD curves",
      "Moisture profile": "Bespoke (1.0% dry up to 10% moist noodles)",
    },
    qualityParams: [
      "Pre-production pilot runs in our pilot plant",
      "Direct laboratory cross-matching with customer clay slips",
      "Dedicated batch tracking protocols from extraction to shipping",
    ],
    packaging: [
      "Bespoke bags, branding, and sizing options",
      "Jumbo bags or dry bulk container shipments",
    ],
    industries: ["Ceramics", "Sanitaryware", "Vitrified Tiles", "Glass & Refractories", "Specialty Industrial Groupings"],
  },
];
