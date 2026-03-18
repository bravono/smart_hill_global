'use client';

import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut, 
  PieChart,
  Grid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Grid, label: 'Projects', active: false },
  { icon: PieChart, label: 'Analytics', active: false },
  { icon: FileText, label: 'Documents', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-blue text-white p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-tighter">
            MISSION <span className="text-brand-accent">CONTROL</span>
          </h1>
        </div>
        
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href="#"
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                item.active 
                  ? "bg-brand-accent text-brand-blue font-bold" 
                  : "hover:bg-white/10 text-white/70"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="pt-6 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-500/20 text-red-400 transition-all">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue">Dashboard</h2>
            <p className="text-brand-blue/60 mt-1">Welcome back to Mission Control</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center font-bold text-brand-blue">
              JD
            </div>
          </div>
        </header>
        
        {children}
      </main>
    </div>
  );
}
