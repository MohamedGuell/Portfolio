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
  "cplusplus"
];

export function COMPETANCE() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
        {/* À propos */}
        <div className="flex flex-col gap-4 text-slate-200">
          <div className="inline-block w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-400 border border-amber-400/30">
            Profil &amp; Philosophie
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            À propos de moi
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Technicien Support IT et Électronique de 25 ans, j’allie un socle technique solide en matériel (diagnostic de circuits, soudure, métrologie) à une expérience opérationnelle en support client applicatif chez <strong className="text-white">Meta</strong> sur Meta Ads Manager.
          </p>
          <p className="text-base text-slate-300 leading-relaxed">
            Passionné par les technologies et les systèmes communicants, j’aborde chaque incident avec méthode, curiosité et un sens aigu de la relation utilisateur. Prêt et motivé pour de nouveaux défis techniques au Canada.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-slate-800">
            <div>
              <span className="block text-2xl font-black text-amber-400">N1 / N2</span>
              <span className="text-xs text-slate-400 font-medium">Support &amp; Troubleshooting</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-amber-400">Hardware &amp; Web</span>
              <span className="text-xs text-slate-400 font-medium">Double compétence rare</span>
            </div>
          </div>
        </div>

        {/* Nuage de compétences */}
        <div id="comp" className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Écosystème &amp; Outils
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Langages, environnements de diagnostic, développement et systèmes
          </p>
          <div className="w-full max-w-[22rem] flex items-center justify-center p-6 bg-slate-950/60 rounded-2xl border border-slate-800 shadow-inner">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}
