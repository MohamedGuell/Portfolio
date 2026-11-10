import Tilt from 'react-parallax-tilt';
import madeiraImg from '../assets/madeira.jpg';
import chessImg from '../assets/chessImg.png';
import bepsImg from '../assets/beps.png';
import iterImg from '../assets/iter.svg';

interface ProjectItem {
  title: string;
  category: string;
  badgeColor: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Madeira — Carnet de Voyage & Guide Interactif",
    category: "Projet Phare • Web & Mapbox",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    description: "Plateforme immersive pour explorer l'île de Madère : cartographie dynamique Mapbox GL, repères géographiques des randonnées, filtres d'itinéraires et synchronisation temps réel avec Firebase.",
    tech: ["Mapbox GL", "Firebase", "JavaScript ES6", "CSS3 / Animations"],
    image: madeiraImg,
    demoUrl: "madeira/index.html",
    githubUrl: "https://github.com/MohamedGuell/madeira-trip"
  },
  {
    title: "Jeu d'échecs Interactif",
    category: "Game Dev & Algorithmique",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    description: "Application interactive d'échecs développée en JavaScript Vanilla. Gestion complète des règles officielles, déplacements des pièces, détection des échecs, historique et effets sonores personnalisés.",
    tech: ["JavaScript", "HTML5 Canvas", "Audio API", "Algorithmique"],
    image: chessImg,
    demoUrl: "chess/chess.html",
    githubUrl: "https://github.com/MohamedGuell/Portfolio"
  },
  {
    title: "Projet ITER — Robot Autonome de Tri",
    category: "Robotique & Électronique",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    description: "Conception et programmation d'un robot autonome capable de détecter des briques colorées et de les déposer dans la zone dédiée. Pilotage de puissance par double pont en H (L298) et capteurs IR.",
    tech: ["BTS SN", "Capteurs Infrarouge", "Pont en H L298", "Automatisme"],
    image: iterImg,
    githubUrl: "https://github.com/MohamedGuell/Portfolio"
  },
  {
    title: "Beps — Vitamines & Compléments",
    category: "Design & Intégration",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    description: "Vitrine web épurée et responsive pour une marque de bien-être et micronutrition. Travail approfondi sur la mise en page, l'ergonomie mobile et les micro-interactions visuelles.",
    tech: ["HTML5", "CSS3 Flexbox/Grid", "Responsive UI", "UI/UX"],
    image: bepsImg,
    demoUrl: "beps/beps.html",
    githubUrl: "https://github.com/MohamedGuell/Portfolio"
  }
];

export function Projets() {
  return (
    <section id="Sproj" className="py-20 px-4 max-w-7xl mx-auto scroll-mt-24">
      <div className="text-center mb-16">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-400 border border-amber-400/30">
          Portfolio &amp; Réalisations
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">
          Mes Projets
        </h2>
        <p className="text-slate-300 text-base max-w-2xl mx-auto mt-3">
          Une sélection de mes travaux alliant développement web interactif, cartographie, systèmes embarqués et technologies numériques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1500}
            className="h-full"
          >
            <div className="h-full flex flex-col bg-slate-900/90 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl hover:border-amber-400/50 transition-all duration-300 group">
              {/* Image banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-md border ${proj.badgeColor} backdrop-blur-md`}>
                  {proj.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tech chips */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 text-xs font-bold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-md"
                      >
                        Explorer en direct ↗
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 text-xs font-bold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors border border-slate-700"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
