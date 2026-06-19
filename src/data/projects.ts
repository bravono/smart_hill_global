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
    location: "Abuja",
    stats: [
      { label: "Client", value: "NOUN" },
      { label: "Type", value: "Institutional" },
      { label: "Duration", value: "24 Months" },
    ],
    icon: Building2,
    videoUrl: "",
  },

  {
    id: 2,
    slug: "meridian-apartments",
    title: "Meridian Apartments",
    category: "real-estate",
    image: "https://live.staticflickr.com/65535/55344619246_18cb0d3fbb_b.jpg",
    gallery: [
      "https://live.staticflickr.com/65535/55344619246_18cb0d3fbb_b.jpg",
      "https://live.staticflickr.com/65535/55343738827_0b33179ff8_b.jpg",
      "https://live.staticflickr.com/65535/55344835354_a4cc044205_b.jpg",
      "https://live.staticflickr.com/65535/55343526962_b8801839f0_b.jpg",
    ],
    shortDesc: "Market Analysis",
    description:
      "A comprehensive market analysis and development plan for a high-end residential apartment complex, focusing on sustainable design and community integration.",
    year: "2026",
    location: "Kado Kuchi",
    stats: [
      { label: "Finished Value", value: "₦400M" },
      { label: "Semi Finished", value: "₦350M" },
      { label: "Total Units", value: "12" },
      { label: "Location", value: "Kado Kuchi" },
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
        description:
          "Understanding client lifestyle needs and curation of materials, wood samples, and light palette options.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      },
      {
        title: "Bespoke Carpentry & Design",
        description:
          "Detailing specifications for the custom natural oak cabinetry and minimalist spatial layouts.",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop",
      },
      {
        title: "Installation & Styling",
        description:
          "Precise mounting of units, styling with premium linen textiles, and curating warm lighting elements.",
        image:
          "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2064&auto=format&fit=crop",
      },
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
];
