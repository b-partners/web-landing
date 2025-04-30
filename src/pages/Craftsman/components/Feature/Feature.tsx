import { PALETTE_COLORS } from '@/config/theme';

export const Feature = () => {
  return (
    <section id="share" style={{ padding: 50, backgroundColor: PALETTE_COLORS.pine }}>
      <h2 className="mobile__title" style={{ color: PALETTE_COLORS.cream }}>
        <b className="text__highlight">
          BIRDIA vous permet sur des images aériennes <br />
          haute définition et son intelligence artificielle
          <br />
          de générer en 1 clic l'analyse des toitures de vos prospects:
        </b>
        <br />
        prise de mesures, détection des revêtements, pentes, usures.
      </h2>
    </section>
  );
};
