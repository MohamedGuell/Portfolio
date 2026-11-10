export function Parcours() {
  return (
    <div id="parcours" className="max-w-5xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-400 border border-amber-400/30">
            Parcours &amp; Évolution
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Mon Parcours
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mt-2">
            Un cheminement alliant expertise matérielle, électronique, réseaux et compétences applicatives &amp; web.
          </p>
        </div>

        {/* 2 Colonnes : Expériences & Formations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Colonne 1 : Expériences Professionnelles */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <span className="text-amber-400 text-lg">💼</span>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                Expériences Professionnelles
              </h3>
            </div>

            {/* Meta Ads */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-base">Support Client — Meta Ads</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  CDD • 02/2026 – 11/2026
                </span>
              </div>
              <div className="text-xs font-semibold text-amber-400 mt-0.5">Meta</div>
              <ul className="mt-3 flex flex-col gap-1.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Résolution méthodique de bugs techniques sur Meta Ads Manager.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Accompagnement, diagnostic et support technique de proximité auprès des annonceurs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Analyse et escalade des dysfonctionnements de la plateforme applicative.</span>
                </li>
              </ul>
            </div>

            {/* ELECTRO-TIM */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-base">Technicien Réparation / Maintenance</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Stage • 05/2021 – 07/2021
                </span>
              </div>
              <div className="text-xs font-semibold text-amber-400 mt-0.5">ELECTRO-TIM</div>
              <ul className="mt-3 flex flex-col gap-1.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Études et essais en laboratoire sur circuits et cartes électroniques.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Soudure de précision (CMS et traversant), câblage et étamage de cartes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Accueil des clients et diagnostic préliminaire des pannes matérielles.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne 2 : Formations Académiques & Diplômes */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <span className="text-amber-400 text-lg">🎓</span>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider text-sm">
                Formations &amp; Diplômes
              </h3>
            </div>

            {/* Simplon Web */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-sm md:text-base">Simplon — Dév. Web &amp; Web mobile</span>
                <span className="text-xs text-slate-400">16 Sept 2024 – 19 Sept 2025</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Conception et développement d'applications web modernes et sécurisées (front-end et back-end).
              </p>
            </div>

            {/* AFP Simplon iOS */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-sm md:text-base">AFP (Simplon) — Dév. mobile iOS</span>
                <span className="text-xs text-slate-400">20 Nov – 15 Déc 2023</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Initiation aux étapes de création d'applications mobiles au sein de l'écosystème Apple sur Swift.
              </p>
            </div>

            {/* MZT */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-sm md:text-base">My Zone De Talent (MZT)</span>
                <span className="text-xs text-slate-400">02 Oct – 06 Nov 2023</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                5 semaines d'immersion pour explorer les principales filières et opportunités du numérique.
              </p>
            </div>

            {/* Licence BAC +3 */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-amber-400/30 bg-amber-400/5 hover:border-amber-400/60 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-sm md:text-base">Niveau Licence BAC +3 — Électronique &amp; Réseaux</span>
                <span className="text-xs font-semibold text-amber-400">Sept 2022 – Sept 2023</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Approfondissement en systèmes communicants, réseaux informatiques (adressage IP, protocoles), microcontrôleurs, électronique analogique/numérique et instrumentation de test.
              </p>
            </div>

            {/* BTS SN */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-sm md:text-base">BTS SN — Électronique &amp; Communication</span>
                <span className="text-xs text-slate-400">Sept 2021 – Sept 2022</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-400">Projet ITER :</strong> Conception et réalisation d'un robot autonome de tri de briques colorées (capteurs IR de suivi de ligne, automate de déplacement, pont en H L298).
              </p>
            </div>

            {/* BAC STI2D */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-baseline flex-wrap gap-1">
                <span className="font-bold text-white text-sm md:text-base">BAC STI2D (Sciences &amp; Technologies de l'Industrie)</span>
                <span className="text-xs text-slate-400">Sept 2019 – Sept 2021</span>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Formation technologique polyvalente en énergie, matière, information et développement durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
