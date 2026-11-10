import React, { useState, useEffect, useRef } from "react";

// Animation de défilement fluide progressive garantie (requestAnimationFrame avec courbe cubic)
function smoothScrollTo(targetY: number, duration: number = 750) {
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return;

  let startTime: number | null = null;

  // Courbe d'accélération et de décélération douce (easeInOutCubic)
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function NAVBAR() {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScrollEvent = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Toujours afficher le header au sommet de la page (< 60px)
      if (currentScrollY < 60) {
        setIsVisible(true);
        prevScrollY.current = currentScrollY;
        return;
      }

      const diff = currentScrollY - prevScrollY.current;

      // Seuil de sensibilité pour la réactivité (8px)
      if (Math.abs(diff) > 8) {
        if (diff > 0) {
          // L'utilisateur descend sur le site -> on masque le header pour aérer la vue
          setIsVisible(false);
        } else {
          // L'utilisateur commence à remonter sur le site -> le header réapparaît immédiatement !
          setIsVisible(true);
        }
        prevScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (targetId === "top" || targetId === "page") {
      smoothScrollTo(0, 750);
      return;
    }

    let elem = document.getElementById(targetId);
    if (!elem && (targetId === "comp" || targetId === "competences")) {
      elem = document.getElementById("competences") || document.getElementById("comp");
    }
    if (!elem && (targetId === "Sproj" || targetId === "projets")) {
      elem = document.getElementById("Sproj") || document.getElementById("projets");
    }

    if (elem) {
      const navOffset = 80;
      const elementTop = elem.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop);
      smoothScrollTo(Math.max(0, elementTop - navOffset), 750);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-slate-900/85 backdrop-blur-md border-b border-slate-800 shadow-xl transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto px-6 py-4">
        <a 
          href="#top" 
          onClick={(e) => handleScroll(e, "top")}
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
