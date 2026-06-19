import {
  Building2,
  Map,
  PaintBucket,
  Briefcase,
  Eye,
  Ruler,
} from "lucide-react";

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "construction", label: "Construction" },
  { id: "real-estate", label: "Real Estate" },
  { id: "interior-design", label: "Interior Design" },
  { id: "consulting", label: "Project Consulting" },
  { id: "visualization", label: "Architectural Viz" },
];

export const projects = [
  {
    id: 1,
    slug: "apex-skyline-towers",
    title: "Apex Skyline Towers",
    category: "construction",
    image:
      "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1423739160914-5527f51c05d4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    ],
    shortDesc: "Commercial Hub",
    description:
      "A state-of-the-art commercial skyscraper redefining the city skyline with sustainable architecture and advanced structural engineering.",
    year: "2025",
    location: "Downtown Metropolis",
    stats: [
      { label: "Floor Area", value: "120,000 sqm" },
      { label: "Floors", value: "65" },
      { label: "Completion", value: "95%" },
    ],
    icon: Building2,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    process: [
      {
        title: "Concept & Blueprinting",
        description: "Initial architectural sketches and structural engineering planning for the 65-story towers.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
      },
      {
        title: "Excavation & Foundation",
        description: "Deep foundation drilling and structural piling to support the massive load of the skyscrapers.",
        image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Superstructure Assembly",
        description: "Pouring concrete columns and erecting steel floor framing at a rapid pace of one floor every four days.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Interior Fit-out & Handover",
        description: "Installing double-glazed facade panels, climate control systems, and luxury corporate interiors.",
        image: "https://images.unsplash.com/photo-1423739160914-5527f51c05d4?q=80&w=2070&auto=format&fit=crop"
      }
    ],
  },
  {
    id: 2,
    slug: "horizon-estate-villas",
    title: "Horizon Estate Villas",
    category: "real-estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDesc: "Luxury Residential",
    description:
      "A collection of ultra-luxury villas nestled in a serene landscape, offering unparalleled privacy and modern amenities.",
    year: "2024",
    location: "Prestige Heights",
    stats: [
      { label: "Total Units", value: "24 Villas" },
      { label: "Plot Size", value: "2,500 sqm avg" },
      { label: "Status", value: "Sold Out" },
    ],
    icon: Map,
  },
  {
    id: 3,
    slug: "the-minimalist-loft",
    title: "The Minimalist Loft",
    category: "interior-design",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616137422495-1e902b7ecbb7?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2064&auto=format&fit=crop",
    ],
    shortDesc: "Custom Furnishing",
    description:
      "An interior design masterpiece focusing on clean lines, functional spaces, and bespoke furniture pieces for high-end urban living.",
    year: "2026",
    location: "Zenith Square",
    stats: [
      { label: "Concept", value: "Minimalism" },
      { label: "Materials", value: "Natural Oak" },
      { label: "Design Time", value: "6 Months" },
    ],
    icon: PaintBucket,
    process: [
      {
        title: "Client Consultation & Moodboard",
        description: "Understanding client lifestyle needs and curation of materials, wood samples, and light palette options.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      },
      {
        title: "Bespoke Carpentry & Design",
        description: "Detailing specifications for the custom natural oak cabinetry and minimalist spatial layouts.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop"
      },
      {
        title: "Installation & Styling",
        description: "Precise mounting of units, styling with premium linen textiles, and curating warm lighting elements.",
        image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2064&auto=format&fit=crop"
      }
    ],
  },
  {
    id: 4,
    slug: "eco-tech-innovation-park",
    title: "Eco-Tech Innovation Park",
    category: "consulting",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDesc: "Feasibility Study",
    description:
      "Comprehensive consulting for a green-focused technology park, including environmental impact assessments and resource optimization models.",
    year: "2023",
    location: "Green Valley",
    stats: [
      { label: "Energy Efficiency", value: "Net Zero" },
      { label: "Water Saving", value: "40%" },
      { label: "ROI Forecast", value: "18% p.a." },
    ],
    icon: Briefcase,
  },
  {
    id: 5,
    slug: "neon-metropolis-model",
    title: "Neon Metropolis Model",
    category: "visualization",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687940-c52af0b439f7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3f?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDesc: "3D Rendering XR",
    description:
      "High-fidelity architectural visualization using extended reality (XR) to allow investors to walk through the future city before ground-breaking.",
    year: "2026",
    location: "Virtual Environment",
    stats: [
      { label: "Resolution", value: "8K UHD" },
      { label: "FPS", value: "120 (VR)" },
      { label: "Detail Level", value: "Ultra" },
    ],
    icon: Eye,
  },
  {
    id: 6,
    slug: "noun-project",
    title: "NOUN Project",
    category: "construction",
    image: "https://live.staticflickr.com/65535/55310495228_2e167a6b2e_b.jpg",
    gallery: [
      "https://live.staticflickr.com/65535/55310495228_2e167a6b2e_b.jpg",
      "https://live.staticflickr.com/65535/55310336611_fc1d6dc711_b.jpg",
      "https://live.staticflickr.com/65535/55309434932_5022ec97f9_b.jpg",
      "https://live.staticflickr.com/65535/55309434762_4cac6bd1d6_b.jpg",
    ],
    shortDesc: "Office Building",
    description:
      "A modern commercial building designed for the National Open University, featuring advanced architectural techniques.",
    year: "2025",
    location: "Abuja, Nigeria",
    stats: [
      { label: "Client", value: "NOUN" },
      { label: "Type", value: "Institutional" },
      { label: "Duration", value: "24 Months" },
    ],
    icon: Building2,
    videoUrl: "",
  },
  {
    id: 7,
    slug: "oasis-executive-suites",
    title: "Oasis Executive Suites",
    category: "interior-design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744095-2918eeb8e636?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDesc: "Space Planning",
    description:
      "Designed for maximum productivity and comfort, these executive suites utilize ergonomic layouts and premium materials.",
    year: "2024",
    location: "Business District",
    stats: [
      { label: "Total Suites", value: "112" },
      { label: "Style", value: "Contemporary" },
      { label: "Project Value", value: "High" },
    ],
    icon: Ruler,
  },
  {
    id: 8,
    slug: "harbor-view-mall-valuation",
    title: "Harbor View Mall Valuation",
    category: "real-estate",
    image:
      "https://images.unsplash.com/photo-1574360773950-c8dc8c6ba7b7?q=80&w=2074&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDesc: "Market Analysis",
    description:
      "A comprehensive real estate valuation and market analysis for a prime harbor-front shopping mall, assessing growth potential and investment risk.",
    year: "2025",
    location: "Coastal Wharf",
    stats: [
      { label: "Asset Value", value: "$450M+" },
      { label: "Yield", value: "7.5%" },
      { label: "Lease Rate", value: "98%" },
    ],
    icon: Map,
  },
  {
    id: 9,
    slug: "alpine-resort-development",
    title: "Alpine Resort Development",
    category: "consulting",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff43c5101c93?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    ],
    shortDesc: "Risk Management",
    description:
      "Developing a strategic risk management framework for a luxury alpine resort, focusing on seasonal logistics and terrain-specific engineering.",
    year: "2023",
    location: "Mount Crest",
    stats: [
      { label: "Elevation", value: "2,400m" },
      { label: "Scale", value: "400 Hectares" },
      { label: "Staffing", value: "500+" },
    ],
    icon: Briefcase,
  },
  {
    id: 10,
    slug: "smart-city-infrastructure",
    title: "Smart City Infrastructure",
    category: "visualization",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2013&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2062&auto=format&fit=crop",
    ],
    shortDesc: "BIM Integration",
    description:
      "Pioneering Building Information Modeling (BIM) for a city-wide smart infrastructure project, connecting sensors and data points in a unified visual twin.",
    year: "2026",
    location: "Metropolis East",
    stats: [
      { label: "Sensors", value: "50,000+" },
      { label: "Data Rate", value: "12 TB/day" },
      { label: "Efficiency UP", value: "35%" },
    ],
    icon: Eye,
  },
];
