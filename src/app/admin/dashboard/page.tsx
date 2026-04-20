'use client';

import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Total Users', value: '1,284', delta: '+12%', icon: Users },
    { label: 'System Revenue', value: '$452.1k', delta: '+8.4%', icon: TrendingUp },
    { label: 'Active Projects', value: '42', delta: 'Steady', icon: CheckCircle2 },
    { label: 'Pending Verifications', value: '18', delta: '+3', icon: AlertCircle },
  ];

  const recentActions = [
    { user: 'Sarah Connor', action: 'New Project: Sky Tower', time: '2 mins ago', status: 'pending' },
    { user: 'James Bond', action: 'Identity Verified', time: '15 mins ago', status: 'completed' },
    { user: 'Bruce Wayne', action: 'Contract Signed: Bat-Cave', time: '1 hour ago', status: 'completed' },
    { user: 'Tony Stark', action: 'Support Ticket #492', time: '3 hours ago', status: 'waiting' },
  ];

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 rounded-3xl bg-white border border-brand-blue/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-brand-blue/5 text-brand-blue">
                <stat.icon size={20} />
              </div>
              <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-lg">
                {stat.delta}
              </span>
            </div>
            <p className="text-sm font-medium text-brand-blue/50">{stat.label}</p>
            <p className="text-3xl font-black text-brand-blue mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-brand-blue/5 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-brand-blue/5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-brand-blue">Recent System Activity</h3>
            <button className="text-brand-accent text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View Audit Log <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="divide-y divide-brand-blue/5">
            {recentActions.map((action, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs">
                    {action.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-blue">{action.user}</p>
                    <p className="text-xs text-brand-blue/50">{action.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 justify-end mb-1">
                    <Clock size={12} className="text-brand-blue/30" />
                    <span className="text-[10px] font-bold text-brand-blue/30 uppercase tracking-widest">{action.time}</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-tighter px-2 py-0.5 rounded-full ${
                    action.status === 'completed' ? 'bg-green-100 text-green-700' : 
                    action.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-brand-blue/10 text-brand-blue/60'
                  }`}>
                    {action.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-brand-blue text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-bold mb-4 relative z-10">Security Shield</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">SSL Certificate</span>
                <span className="text-brand-accent font-bold">Active</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Database Backup</span>
                <span className="text-brand-accent font-bold">2h ago</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full mt-4">
                <div className="h-full bg-brand-accent w-[94%] rounded-full shadow-[0_0_10px_rgba(var(--brand-accent-rgb),0.5)]" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 pt-2">System Integrity: 94%</p>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-white border border-brand-blue/5 shadow-sm">
            <h3 className="text-xl font-bold text-brand-blue mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Broadcast', color: 'bg-brand-blue' },
                { label: 'Export Data', color: 'bg-brand-accent' },
                { label: 'Reset Cache', color: 'bg-slate-100' },
                { label: 'Support MD', color: 'bg-slate-100' },
              ].map((btn) => (
                <button 
                  key={btn.label}
                  className={`py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-transform active:scale-95 ${
                    btn.color.includes('bg-slate-100') ? 'bg-slate-100 text-brand-blue' : 
                    btn.color.includes('brand-accent') ? 'bg-brand-accent text-brand-blue' : 'bg-brand-blue text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
