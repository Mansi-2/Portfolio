import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, BarChart3,CloudSun,Brain, Info, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
{
  id: 'behavioriq',
  title: "BehaviorIQ Productivity Intelligence Dashboard",
  description: "Behavioral analytics system designed to uncover hidden productivity patterns from user activity datasets using machine learning and visualization.",
  problem: "Organizations struggle to understand behavioral productivity trends due to scattered event logs and lack of interpretable analytics systems.",
  stack: ["Python", "Machine Learning", "Pandas", "Data Visualization"],
  metrics: "Session Pattern Detection & Productivity Insight Generation",
  github: "https://github.com/Mansi-2/BehaviorIQ",
  demo: "#",
  icon: <BarChart3 size={32} />
},
{
  id: 'fraudradar',
  title: "FraudRadar Financial Fraud Detection",
  description: "Intelligent fraud detection dashboard that identifies suspicious financial transactions using classification models and explainability techniques.",
  problem: "Financial institutions require early fraud detection systems that are not only accurate but also interpretable for risk analysts.",
  stack: ["Python", "Scikit-learn", "Streamlit", "SHAP"],
  metrics: "Explainable Fraud Prediction & Risk Pattern Identification",
  github: "https://github.com/Mansi-2/FraudRadar",
  demo: "#",
  icon: <ShieldCheck size={32} />
},
{
  id: 'microclimate',
  title: "Micro-Climate Analyzer",
  description: "Environmental data analysis system for detecting local climate variations and anomalies using statistical trend analysis and visualization.",
  problem: "Monitoring localized environmental changes is difficult due to fragmented weather datasets and lack of automated insight generation.",
  stack: ["Python", "Data Processing", "Statistical Analysis", "Visualization"],
  metrics: "Climate Trend Detection & Anomaly Insight Reports",
  github: "https://github.com/Mansi-2/Micro-Climate-Analyzer",
  demo: "#",
  icon: <CloudSun size={32} />
},
{
  id: 'mlsuite',
  title: "ML Exploratory Analysis Suite",
  description: "Structured machine learning experimentation framework for performing dataset analysis, preprocessing, modeling, and performance comparison.",
  problem: "Students and analysts often lack standardized workflows to explore datasets and benchmark machine learning models effectively.",
  stack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
  metrics: "Multi-Dataset Model Benchmarking & Insight Generation",
  github: "https://github.com/Mansi-2/ML_Tutorials",
  demo: "#",
  icon: <Brain size={32} />
},
  
{
  id: 'randomness',
  title: "Illusion of Randomness Analysis",
  description: "Behavioral data science project analyzing human bias in generating random binary sequences using statistical runs analysis and visualization techniques.",
  problem: "Understanding whether humans can generate truly random sequences and how confidence and statistical knowledge influence perceived randomness.",
  stack: ["R", "Statistical Analysis", "Data Visualization", "Behavioral Analytics"],
  metrics: "Randomness Deviation Insights & Runs Distribution Patterns",
  github: "https://github.com/Mansi-2/Illusion-of-Randomness",
  demo: "#",
  icon: <Brain size={32} />
}
];

const ProjectsDetail: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-accent hover:underline mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[var(--text-primary)]">All <span className="text-gradient">Projects</span></h1>
        <p className="text-[var(--text-secondary)] text-xl mb-16 max-w-3xl">
          A deep dive into my technical projects, exploring the problems solved and the impact created through AI and data science.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`glass-card p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 ${selectedProject?.id === project.id ? 'border-accent bg-accent/10' : 'hover:border-accent/30'}`}
            >
              <div className={`p-4 rounded-2xl ${selectedProject?.id === project.id ? 'bg-accent text-slate-950' : 'bg-accent/10 text-accent'}`}>
                {project.icon}
              </div>
              <span className="text-sm font-bold text-center text-[var(--text-primary)]">{project.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-xs font-mono text-accent uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 h-fit">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="glow-button flex items-center gap-2">
                    <Github size={18} />
                    GitHub
                  </a>
                  <a href={selectedProject.demo} className="px-6 py-3 rounded-full border border-[var(--border-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]/80 transition-all flex items-center gap-2 font-medium text-[var(--text-primary)]">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)]">
                      <Info size={20} className="text-accent" />
                      About the Project
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">Problem Statement</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                </div>
                <div className="glass-card p-6 h-fit bg-[var(--bg-secondary)]/50">
                  <h3 className="text-lg font-bold mb-4 border-b border-[var(--border-primary)] pb-2 text-[var(--text-primary)]">Key Metrics</h3>
                  <div className="text-3xl font-bold text-accent mb-2">{selectedProject.metrics}</div>
                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-widest font-mono">Performance Impact</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-20 glass-card border-dashed border-[var(--border-primary)]">
              <p className="text-[var(--text-secondary)] text-lg">Select a project icon above to view details</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsDetail;
