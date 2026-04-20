"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import OrderModal from "@/components/OrderModal";
import Link from "next/link";

const serviceData = {
  "construction": {
    title: "Construction",
    description: "Expert engineering and masonry for structures that stand the test of time.",
    heroImage: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    subServices: [
      {
        id: "residential",
        name: "Residential Complexes",
        description: "We build modern, sustainable, and luxurious residential complexes that redefine community living. From mid-rise apartments to sprawling suburban estates, our residential construction focuses on quality materials, energy efficiency, and functional elegance.",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Sustainable Materials", "Community-Centric Design", "Turnkey Delivery"]
      },
      {
        id: "commercial",
        name: "Commercial Hubs",
        description: "Engineered for business excellence. Our commercial hubs are designed to maximize workflow efficiency while providing stunning architectural statements. Perfect for corporate headquarters, retail centers, and mixed-use developments.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        features: ["Smart Building Integration", "High Foot-Traffic Optimization", "LEED Certification Guidance"]
      },
      {
        id: "industrial",
        name: "Industrial Facilities",
        description: "Robust, large-scale industrial facility construction tailored for logistics, manufacturing, and warehousing. We prioritize structural integrity, heavy-duty utility integration, and optimized floor plans for operational scaling.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        features: ["Heavy-Duty Foundations", "Optimized Workflow Layouts", "Advanced HVAC Systems"]
      }
    ]
  },
  "real-estate": {
    title: "Real Estate",
    description: "Strategic property acquisition, sales, and comprehensive investment management.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    subServices: [
      {
        id: "market-analysis",
        name: "Market Analysis",
        description: "Data-driven insights into emerging property markets. We provide comprehensive reports on demographic shifts, zoning changes, and economic indicators to help you identify high-yield investment zones.",
        image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Predictive Trend Modeling", "Competitor Benchmarking", "Zoning Intelligence"]
      },
      {
        id: "valuation",
        name: "Property Valuation",
        description: "Accurate, unbiased property valuations using advanced comparative market analysis and income approach methodologies. Essential for acquisitions, refinancing, or portfolio restructuring.",
        image: "https://images.unsplash.com/photo-1574360773950-c8dc8c6ba7b7?q=80&w=2074&auto=format&fit=crop",
        features: ["Income Capitalization Approach", "Asset Repositioning Value", "Risk Assessment"]
      },
      {
        id: "advisory",
        name: "Investment Advisory",
        description: "End-to-end consulting for real estate portfolios. From identifying distressed assets with high turnaround potential to managing large-scale commercial property funds, our advisors align real estate with your financial goals.",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop",
        features: ["Portfolio Diversification", "Tax Optimization Strategies", "Asset Lifecycle Management"]
      }
    ]
  },
  "interior-design": {
    title: "Interior Design",
    description: "Bespoke interior solutions combining modern aesthetics with ergonomic functionality.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    subServices: [
      {
        id: "space-planning",
        name: "Space Planning",
        description: "Optimizing the flow and utility of any physical space. We analyze movement patterns, lighting, and spatial geometry to create layouts that enhance both productivity and comfort.",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Circulation Path Analysis", "Ergonomic Layouts", "Acoustic Planning"]
      },
      {
        id: "materials",
        name: "Material Selection",
        description: "Curating the perfect palette of textures, finishes, and textiles. We source premium, durable materials that embody your brand identity while adhering to sustainability and budget constraints.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
        features: ["Eco-friendly Sourcing", "Durability Testing", "Brand Palette Matching"]
      },
      {
        id: "furnishing",
        name: "Custom Furnishing",
        description: "Designing and sourcing bespoke furniture pieces that perfectly fit your space. Whether it's custom millwork for a commercial lobby or tailored upholstery for a residential project, we deliver exclusivity.",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Bespoke Millwork", "Artisan Collaborations", "FF&E Procurement"]
      }
    ]
  },
  "consulting": {
    title: "Project Consulting",
    description: "Professional guidance, risk mitigation, and oversight for complex infrastructure developments.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    subServices: [
      {
        id: "risk-management",
        name: "Risk Management",
        description: "Identifying, assessing, and mitigating risks before they impact your timeline or budget. Our proactive approach covers financial, operational, and environmental risks in large-scale projects.",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
        features: ["Contingency Planning", "Supply Chain Audits", "Safety Compliance"]
      },
      {
        id: "feasibility",
        name: "Feasibility Studies",
        description: "Comprehensive analyses to determine the viability of a proposed project. We evaluate technical constraints, financial ROI, market demand, and legal hurdles to give you a clear 'go / no-go' recommendation.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Cost-Benefit Analysis", "Site Evaluation", "Environmental Impact"]
      },
      {
        id: "compliance",
        name: "Regulatory Compliance",
        description: "Navigating the complex web of local, state, and federal building codes. We handle permitting, zoning approvals, and ensure your project meets all regulatory standards without costly delays.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
        features: ["Permit Expediting", "Zoning Board Representation", "Code Auditing"]
      }
    ]
  },
  "visualization": {
    title: "Architectural Visualization",
    description: "Immersive 3D renderings and XR experiences bringing visions to life before construction.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    subServices: [
      {
        id: "3d-rendering",
        name: "3D Rendering",
        description: "Photorealistic static renders that capture the essence of your architectural design. Perfect for pre-leasing, investor pitches, and marketing collateral before breaking ground.",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: ["Photorealistic Textures", "Day/Night Cycle Lighting", "Aerial Perspectives"]
      },
      {
        id: "xr-tours",
        name: "Virtual XR Tours",
        description: "Fully interactive Virtual and Extended Reality tours. Allow clients to walk through properties, change finishes in real-time, and experience the scale of a space immersively.",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop",
        features: ["Real-time Walkthroughs", "VR Headset Integration", "Interactive Material Swapping"]
      },
      {
        id: "bim",
        name: "BIM Integration",
        description: "Building Information Modeling (BIM) goes beyond 3D. We create intelligent models that incorporate physical and functional characteristics of places, aiding clash detection and lifecycle management.",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1964&auto=format&fit=crop",
        features: ["Clash Detection", "4D Scheduling Integration", "Lifecycle Asset Management"]
      }
    ]
  }
};

type CategoryKey = keyof typeof serviceData;

const serviceKeys: CategoryKey[] = ["construction", "real-estate", "interior-design", "consulting", "visualization"];

export default function CategoryPage() {
  const params = useParams();
  const categoryStr = params?.category as CategoryKey;
  const content = serviceData[categoryStr];
  
  const currentIndex = serviceKeys.indexOf(categoryStr);
  const prevCategory = currentIndex > 0 ? serviceKeys[currentIndex - 1] : null;
  const nextCategory = currentIndex >= 0 && currentIndex < serviceKeys.length - 1 ? serviceKeys[currentIndex + 1] : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState("");

  const handleOrderClick = (subName: string) => {
    setSelectedSubService(subName);
    setIsModalOpen(true);
  };

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-blue mb-4">Service not found</h1>
          <Link href="/" className="text-brand-accent hover:underline font-bold">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-blue/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-10" />
          <img 
            src={content.heroImage} 
            alt={content.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-brand-accent font-bold tracking-widest uppercase text-sm mb-6">
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-white">{content.title}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl">
              {content.description}
            </p>

            <div className="mt-10 flex items-center gap-4">
              {prevCategory && (
                <Link
                  href={`/services/${prevCategory}`}
                  className="px-6 py-3 rounded-full border border-white/20 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm group"
                >
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Prev Service
                </Link>
              )}
              {nextCategory && (
                <Link
                  href={`/services/${nextCategory}`}
                  className="px-6 py-3 rounded-full bg-brand-accent text-brand-blue font-bold flex items-center gap-2 hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20 hover:scale-105 group border border-transparent"
                >
                  Next Service
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subservices List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-32">
          {content.subServices.map((sub, index) => (
            <div 
              key={sub.id} 
              id={sub.id} /* This ID allows the anchor navigation to work */
              className="scroll-mt-32 flex flex-col md:flex-row gap-12 lg:gap-20 items-center group"
            >
              <div className={cn(
                "w-full md:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] order-1 shadow-2xl shadow-brand-blue/5",
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              )}>
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={sub.image} 
                  alt={sub.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className={cn(
                "w-full md:w-1/2 space-y-8 order-2",
                index % 2 !== 0 ? "md:order-1" : "md:order-2"
              )}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">{sub.name}</h2>
                  <p className="text-lg text-brand-blue/70 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-brand-blue/40">Key Offerings</h4>
                  <ul className="space-y-3">
                    {sub.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                        <span className="font-semibold text-brand-blue/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => handleOrderClick(sub.name)}
                    className="px-8 py-4 bg-brand-blue text-white font-bold rounded-2xl flex items-center gap-3 hover:translate-x-2 transition-all shadow-xl shadow-brand-blue/10 group/btn"
                  >
                    Order for this service
                    <ArrowRight size={20} className="text-brand-accent group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={content.title}
        initialSubService={selectedSubService}
        availableSubServices={content.subServices.map(s => s.name)}
      />
    </main>
  );
}
