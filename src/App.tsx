import React, { useState, useEffect } from 'react';
import { TowerControl as GameController, Github, Linkedin, Mail, Terminal, Trophy, Gamepad2, Code2, Heart, Zap, Brain, ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const stats = [
    {
      name: "Unity Mastery",
      level: 80,
      color: "bg-red-500",
      icon: <Gamepad2 className="w-4 h-4" />,
    },
    {
      name: "C# Expertise",
      level: 75,
      color: "bg-blue-500",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      name: "3D Modeling",
      level: 65,
      color: "bg-green-500",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      name: "Game Design",
      level: 85,
      color: "bg-purple-500",
      icon: <Heart className="w-4 h-4" />,
    },
    {
      name: "Problem Solving",
      level: 90,
      color: "bg-yellow-500",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Neon Nights Racing",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
      description: "A cyberpunk-themed racing game with procedurally generated tracks."
    },
    {
      id: 2,
      title: "Pixel Dungeon Master",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
      description: "A roguelike dungeon crawler with retro pixel art aesthetics."
    },
    {
      id: 3,
      title: "Space Colony Sim",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800",
      description: "Build and manage your own space colony in this sci-fi simulation."
    }
  ];

  const AnimatedText = ({ text, delay = 0 }) => {
    return (
      <span className="hero-subtitle" style={{ animationDelay: `${delay}ms` }}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 100 + delay}ms` }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden perspective">
        <div className="parallax-bg">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
            alt="Gaming Setup"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="glitch-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <GameController className={`w-16 h-16 mx-auto mb-6 text-purple-500 transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`} />
          <h1 className="hero-title font-['Press_Start_2P'] text-4xl md:text-6xl mb-4 text-purple-400">
            PLAYER 1<br/>READY
          </h1>
          <div className="space-y-2 mb-8">
            <AnimatedText text="Game Developer" delay={0} />
            <AnimatedText text="Quest Taker" delay={500} />
            <AnimatedText text="Bug Slayer" delay={1000} />
          </div>
          <button className="pixel-btn">
            START MISSION →
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="section-title">ABOUT THE PLAYER</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300">
              Welcome to my quest log! I'm a passionate game developer with +5 years of experience in crafting
              immersive digital experiences. Like a true RPG character, I've spent years leveling up my skills
              in Unity, Unreal Engine, and various programming languages.
            </p>
            <div className="flex space-x-4">
              <Terminal className="w-8 h-8 text-green-400" />
              <Code2 className="w-8 h-8 text-blue-400" />
              <Gamepad2 className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="game-card">
            <h3 className="font-['Press_Start_2P'] text-xl mb-4 text-purple-400">STATS</h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="stat-label">
                    <div className="flex items-center gap-2">
                      {stat.icon}
                      <span>{stat.name}</span>
                    </div>
                    <span className="text-yellow-400">Lv.{stat.level}</span>
                  </div>
                  <div className="stat-bar">
                    <div 
                      className={`stat-bar-fill ${stat.color}`}
                      style={{ '--fill-percent': `${stat.level}%` } as React.CSSProperties}
                    >
                      <div className="stat-bar-segments">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="stat-segment" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">COMPLETED QUESTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="game-card group">
                <div className="relative overflow-hidden rounded mb-4">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="font-['Press_Start_2P'] text-lg mb-2 text-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  <span className="text-yellow-400 text-sm font-['Press_Start_2P']">Achievement Unlocked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title">CONTACT THE PLAYER</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-400 font-['Press_Start_2P'] text-sm">
            © 2024 ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;