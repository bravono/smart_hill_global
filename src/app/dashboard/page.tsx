'use client';

import { ProjectStatus } from '@/components/dashboard/ProjectStatus';

const mockProjects = [
  { id: '1', name: 'Alpha Tower Structural', status: 'completed' as const, progress: 100 },
  { id: '2', name: 'Nexus Bridge Design', status: 'in-progress' as const, progress: 65 },
  { id: '3', name: 'Zion Heights Masterplan', status: 'in-progress' as const, progress: 45 },
  { id: '4', name: 'Skyline Plaza HVAC', status: 'delayed' as const, progress: 20 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Completion Rate', value: '78%', delta: '+5%' },
          { label: 'Active Projects', value: '4', delta: 'Steady' },
          { label: 'Pending Approvals', value: '12', delta: '+2' },
          { label: 'Support Tickets', value: '0', delta: '-3' },
        ].map((stat) => (
          <div key={stat.label} className="p-6 rounded-2xl bg-white border border-brand-blue/5 shadow-sm">
            <p className="text-sm font-medium text-brand-blue/60">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <p className="text-3xl font-bold text-brand-blue">{stat.value}</p>
              <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-md">
                {stat.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <ProjectStatus projects={mockProjects} />
        </div>
        
        <div className="space-y-6">
          <div className="p-8 rounded-2xl bg-brand-blue text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Upgrade Status</h3>
            <p className="text-white/70 text-sm mb-6">
              Access real-time 3D architectural visualization tools for your projects.
            </p>
            <button className="w-full py-3 bg-brand-accent text-brand-blue font-bold rounded-xl hover:scale-[1.02] transition-transform">
              Explore Tools
            </button>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-brand-blue/5 shadow-sm">
            <h3 className="text-xl font-bold text-brand-blue mb-4">Firm Activity</h3>
            <div className="space-y-4">
              {[
                'Contract updated for Alpha Tower',
                'New blueprint uploaded for Nexus',
                'Meeting scheduled for tomorrow',
              ].map((activity, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                  <p className="text-brand-blue/80">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
