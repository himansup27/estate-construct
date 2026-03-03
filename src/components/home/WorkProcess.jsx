import React from 'react';
import SectionTitle from '../common/SectionTitle';
import CounterStat from '../common/CounterStat';
import { FileText, Users, Hammer, CheckCircle, ClipboardCheck, TrendingUp } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

const WorkProcess = () => {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Consultation & Planning',
      description: 'Initial meeting to understand your vision, requirements, and budget. We create detailed project plans and timelines.',
      duration: '1-2 weeks'
    },
    {
      icon: ClipboardCheck,
      number: '02',
      title: 'Design & Approval',
      description: 'Our architects create detailed designs and blueprints. We work with you to refine until perfect.',
      duration: '2-4 weeks'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Permits & Documentation',
      description: 'Handle all legal paperwork, building permits, and regulatory approvals required for construction.',
      duration: '2-3 weeks'
    },
    {
      icon: Users,
      number: '04',
      title: 'Team Mobilization',
      description: 'Assign dedicated project managers, engineers, and skilled workers to your project.',
      duration: '1 week'
    },
    {
      icon: Hammer,
      number: '05',
      title: 'Construction Phase',
      description: 'Systematic execution with regular quality checks, progress reports, and site inspections.',
      duration: 'Project dependent'
    },
    {
      icon: CheckCircle,
      number: '06',
      title: 'Quality Assurance & Handover',
      description: 'Final inspections, quality verification, and official handover with warranty documentation.',
      duration: '1-2 weeks'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '98%', label: 'On-Time Delivery' },
    { icon: Users, value: '500+', label: 'Skilled Workers' },
    { icon: CheckCircle, value: '100+', label: 'Projects Completed' }
  ];

  return (
    <section id="work-process" className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
        <SectionTitle 
          title="Our Work Process"
          subtitle="A systematic approach to deliver excellence at every step"
        />
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection animation="fade-up">
            <div key={index} className="relative">
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-accent-500/30 hidden md:block" />
              )}

              <div className="grid md:grid-cols-12 gap-6 mb-12">
                {/* Number & Icon */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-accent-500/20 backdrop-blur-md border-2 border-accent-500 flex items-center justify-center">
                      <step.icon className="text-accent-500" size={28} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-accent-500 transition-all group">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-accent-500 transition-colors text-grey-100">
                        {step.title}
                      </h3>
                      <span className="bg-accent-500/20 text-accent-500 px-3 py-1 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-grey-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats with Counter Animation */}
        <AnimatedSection animation="fade-up">
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <CounterStat
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WorkProcess;