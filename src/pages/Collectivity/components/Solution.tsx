import { PALETTE_COLORS } from '@/config/theme';

export const Solution = () => {
  return (
    <section className="solution_collectivity bd-container" id="description" style={{ marginTop: '100px' }}>
      <h2 className="solution_collectivity__titlel" style={{ fontWeight: 'bold', color: PALETTE_COLORS.neon_orange, fontSize: '2rem' }}>
        Nos solutions: Nos cas d'usages
      </h2>
      <p className="headline__paragraph">
        Que ce soit sur des images satellites ou orthophotographie, BIRDIA permet une détection automatisée pour gagner en productivité et un post traitement
        pour gagner en précision. Valorisez les images aériennes de votre territoire pour vous conformer à la réglementation (Loi ZAN, Loi LOM, Climet
        Resilence, ...). Nos modèles sont souverains et permettent de réaliser des détections massives avec un impact carbone réduit.
      </p>
    </section>
  );
};
