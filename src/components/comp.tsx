import IconCloud from '../@/components/magicui/icon-cloud';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "docker",
  "git",
  "github",
  "linux",
  "windows",
  "apple",
  "swift",
  "visualstudiocode",
  "figma",
  "cplusplus",
  "c",
  "python",
  "wireshark",
  "cisco",
  "arduino",
  "raspberrypi",
  "gnubash"
];

export function COMPETANCE() {
  return (
    <div id="competences" className="max-w-5xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]">
        {/* À propos de moi */}
        <div className="flex flex-col justify-between gap-5 text-slate-200">
          <div className="flex flex-col gap-3">
            <div className="inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-400 border border-amber-400/30">
              Profil &amp; Philosophie
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              À propos de moi
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Technicien Support IT et Électronique de 25 ans, j’allie un socle technique solide en matériel (diagnostic de circuits, soudure, métrologie) à une expérience opérationnelle en support client applicatif chez <strong className="text-white font-bold">Meta</strong> sur Meta Ads Manager.
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Passionné par les technologies et les systèmes communicants, j’aborde chaque incident avec méthode, curiosité et un sens aigu de la relation utilisateur. Prêt et motivé pour de nouveaux défis techniques au Canada.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
            <div>
              <span className="block text-xl md:text-2xl font-black text-amber-400">N1 / N2</span>
              <span className="text-[11px] text-slate-400 font-medium">Support &amp; Diagnostic</span>
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-black text-amber-400">Hardware</span>
              <span className="text-[11px] text-slate-400 font-medium">Électronique &amp; Réseaux</span>
            </div>
            <div>
              <span className="block text-xl md:text-2xl font-black text-amber-400">Applicatif</span>
              <span className="text-[11px] text-slate-400 font-medium">Meta Ads &amp; Web</span>
            </div>
          </div>
        </div>

        {/* Écosystème & Outils avec changement de couleur dynamique harmonieux */}
        <div
          id="comp"
          className="flex flex-col items-center justify-between text-center border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-sm transition-all duration-700"
        >
          <div className="mb-2">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-slate-200 border border-white/15 mb-2">
              Stack &amp; Environnements
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Écosystème &amp; Outils
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xs mx-auto">
              Systèmes d'exploitation, environnements de diagnostic, langages et outillage réseau
            </p>
          </div>

          <div className="w-full flex items-center justify-center py-2">
            <IconCloud iconSlugs={slugs} />
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 pt-3 border-t border-white/10 w-full text-[11px] text-slate-300">
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Windows / Linux / macOS</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Cisco &amp; Réseaux IP</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/10">Meta Ads Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}
