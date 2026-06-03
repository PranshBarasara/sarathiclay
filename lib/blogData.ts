export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "optimizing-porcelain-bodies",
    title: "Optimizing Vitrified Tile Formulations with Clay Blends",
    category: "Ceramic Science",
    date: "May 20, 2026",
    readTime: "6 Min Read",
    excerpt: "How adjusting the balance between alkali fluxes and high-plasticity ball clays affects vitrification rates and green Modulus of Rupture (MOR) strength in modern tile factories.",
    content: `
Vitrified and porcelain tiles represent some of the most mechanically demanding ceramic products. The physical performance of the green body depends entirely on the mineral composition of the clay compounding.

### The Role of Plastifying Agents
High-plasticity ball clays are introduced to act as binders. These sedimentary clays possess fine particles (< 2 Micron) that trap water molecules, creating plasticity and lubrication during hydraulic pressing. Without sufficient plasticity, the tile body suffers from edge cracking and low green MOR, causing fractures during transit to the kiln.

### Vitrification Kinetics
During firing (1180°C - 1220°C), alkali fluxes (K2O and Na2O present in feldspars) melt, forming a liquid glass phase that fills the voids between quartz grains. The clay minerals undergo thermal breakdown, forming needle-like mullite crystals that reinforce the glassy matrix. 

By adjusting the ratio of China Clay (which provides structural alumina) and Ball Clay (providing plasticity and flux binders), manufacturers can lower firing temperatures while achieving water absorption rates below 0.1%.
    `
  },
  {
    slug: "kaolin-titanium-extender",
    title: "Kaolin as a Extender in Architectural Coatings",
    category: "Coatings Technology",
    date: "April 15, 2026",
    readTime: "5 Min Read",
    excerpt: "An analysis of how calcined kaolin alters optical light scattering, allowing paint manufacturers to replace expensive Titanium Dioxide (TiO2) without losing opacity.",
    content: `
Titanium Dioxide (TiO2) is the primary white pigment used in paints due to its high refractive index (2.7). However, pigment cost fluctuations force paint chemists to optimize pigment spacing using mineral extenders.

### The Calcination Effect
Calcining hydrous kaolin at 1000°C changes its structure, removing chemically bound hydroxyl groups (dehydroxylation). This reaction creates a porous, amorphous structure with high brightness (93%+ ISO) and a refractive index of 1.62.

### Optical Spacing Mechanism
When calcined kaolin particles are dispersed alongside TiO2, they act as mechanical spacers. By keeping TiO2 particles separated, they prevent crowding (which reduces light scattering efficiency). The air voids within the calcined kaolin structure introduce extra light-scattering boundaries, maintaining paint opacity and scrub resistance while cutting chemical formulation costs.
    `
  },
  {
    slug: "sanitaryware-casting-viscosity",
    title: "Controlling Viscosity in Sanitaryware Casting Slips",
    category: "Process Control",
    date: "March 28, 2026",
    readTime: "8 Min Read",
    excerpt: "Managing rheology, deflocculant consumption, and thixotropy parameters inside sanitaryware battery casting lines using hydrocyclone-washed clays.",
    // using template literal
    content: `
Modern sanitaryware casting (especially high-pressure slip casting) demands tight rheological control. The casting slurry (slip) must flow freely to fill intricate molds, yet build uniform wall thicknesses rapidly.

### Deflocculation Mechanics
Casting slips are deflocculated using sodium silicate or polycarbonates. Deflocculants introduce negative charges onto clay particle edges, causing mutual repulsion and reducing slip viscosity at high solids loading (typically 70-75% solids).

### Rheology & Consistency
- **Thixotropy**: The slip must exhibit thixotropic behavior—gel-like stability when static, flowing freely when pumped or vibrated.
- **Washed Clay Influence**: Grit or free quartz particles alter slip casting rates and introduce structural stress points. Using hydraulically washed clays with sifting limits (+45 Micron < 0.05%) ensures uniform casting rates and prevents firing cracks.
    `
  }
];
