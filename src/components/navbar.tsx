import React from "react";

export function NAVBAR() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId) || (targetId === "comp" ? document.getElementById("competences") : null);
    if (elem) {
      const navOffset = 85; // Décalage pour laisser la navbar visible sans chevaucher le contenu
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-xl sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto px-6 py-4">
        <a 
          href="#page" 
          onClick={(e) => handleScroll(e, "page")}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <span className="self-center text-2xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Mohamed Guelladress
          </span>
        </a>

        <div className="flex items-center gap-6 mt-3 md:mt-0">
          <span className="text-sm md:text-base font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/30">
            Technicien Support IT &amp; Électronique
          </span>

          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a 
              href="#Sproj" 
              onClick={(e) => handleScroll(e, "Sproj")} 
              className="hover:text-amber-400 transition-colors font-medium cursor-pointer"
            >
              Projets
            </a>
            <a 
              href="#competences" 
              onClick={(e) => handleScroll(e, "competences")} 
              className="hover:text-amber-400 transition-colors font-medium cursor-pointer"
            >
              Compétences
            </a>
            <a 
              href="#parcours" 
              onClick={(e) => handleScroll(e, "parcours")} 
              className="hover:text-amber-400 transition-colors font-medium cursor-pointer"
            >
              Parcours
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, "contact")} 
              className="hover:text-amber-400 transition-colors font-medium cursor-pointer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
