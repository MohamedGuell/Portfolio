export function NAVBAR() {
  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-xl sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto px-6 py-4">
        <a href="https://mohamedguell.github.io/Portfolio/" className="flex items-center space-x-3 group">
          <span className="self-center text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Mohamed Guelladress
          </span>
        </a>

        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <span className="text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
            Technicien Support IT &amp; Électronique
          </span>

          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#Sproj" className="hover:text-amber-400 transition-colors font-medium">Projets</a>
            <a href="#comp" className="hover:text-amber-400 transition-colors font-medium">Compétences</a>
            <a href="#parcours" className="hover:text-amber-400 transition-colors font-medium">Parcours</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
