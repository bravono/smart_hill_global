'use client';

import { LucideIcon, CheckCircle2, Clock, AlertCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  name: string;
  status: 'completed' | 'in-progress' | 'delayed';
  progress: number;
}

const statusConfig = {
  completed: { icon: CheckCircle2, color: 'text-brand-accent', label: 'Completed' },
  'in-progress': { icon: Clock, color: 'text-brand-accent/70', label: 'In Progress' },
  delayed: { icon: AlertCircle, color: 'text-red-400', label: 'Delayed' },
};

export function ProjectStatus({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand-blue">Active Projects</h2>
        <span className="text-sm font-medium px-3 py-1 bg-brand-accent/20 text-brand-blue rounded-full">
          {projects.length} Total
        </span>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project) => {
          const StatusIcon = statusConfig[project.status].icon;
          return (
            <div 
              key={project.id}
              className="p-6 rounded-2xl bg-white border border-brand-blue/5 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-xl bg-brand-blue/5", statusConfig[project.status].color)}>
                    <StatusIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue text-lg">{project.name}</h3>
                    <p className="text-sm text-brand-blue/60">{statusConfig[project.status].label}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="hidden md:block w-48 h-2 bg-brand-blue/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-accent transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="font-mono font-bold text-brand-blue">{project.progress}%</span>
                  <ChevronRight className="text-brand-blue/20 group-hover:text-brand-accent transition-colors" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
