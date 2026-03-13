import React from 'react';
import { BookOpen, Cpu, Network, Database, MessagesSquare } from 'lucide-react';

const CurrentlyLearning: React.FC = () => {
  const topics = [
    {
      title: "Deep Learning & Neural Network Optimization",
      description: "Exploring CNNs, RNNs, transformers, and techniques like regularization, tuning, and architecture design.",
      icon: <Cpu className="text-accent" />
    },
    {
      title: "System Design for AI Applications",
      description: "Designing scalable pipelines for real-time data processing, model inference, and cloud-based AI systems.",
      icon: <Network className="text-accent" />
    },
    {
      title: "Advanced NLP & LLM Applications",
      description: "Building intelligent systems using text classification, summarization pipelines, embeddings, and prompt engineering.",
      icon: <MessagesSquare className="text-accent" />
    },
    {
      title: "Data Engineering for AI",
      description: "Learning data pipeline creation, ETL workflows, database optimization, and handling large-scale datasets.",
      icon: <Database className="text-accent" />
    }
  ];

  return (
    <section id="currently-learning" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Growth Mindset</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Currently <span className="text-gradient">Learning</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Staying at the forefront of AI innovation through continuous learning and experimentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <div key={index} className="glass-card p-8 group hover:bg-white/10 transition-all duration-500">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shrink-0 mb-6 inline-block">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{topic.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
