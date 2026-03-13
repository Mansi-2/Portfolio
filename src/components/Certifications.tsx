import React from 'react';
import { Award, ShieldCheck, Zap, Star, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Data analytics essentials",
    description: "Gained a foundational understanding of the data analytics lifecycle including data collection, preparation, analysis, and visualization.",
    icon: <Award className="text-purple-400" />,
    issuer: "Cisco",
    link: "https://www.credly.com/badges/8b250bfe-6244-4113-8d3e-d3c6e891cf62/linked_in_profile",
    summary: "Built core data analytics skills and practical exposure to industry tools for extracting insights from data."
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Certifications & <span className="text-gradient">Achievements</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Industry-recognized credentials that validate my technical expertise and commitment to continuous learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {certifications.slice(0, 3).map((cert, index) => (
            <div key={index} className="glass-card p-8 group hover:bg-white/10 transition-all duration-500 flex flex-col justify-between">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">{cert.issuer}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">{cert.summary}</div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>
              </div>
              
              {cert.link !== '#' && (
                <div className="pt-6 border-t border-white/5">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-white transition-colors uppercase tracking-widest"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {/* <a 
            href="https://drive.google.com/drive/folders/1-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3-3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glow-button flex items-center gap-2 group"
          >
            View All Certifications
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
