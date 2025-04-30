import ComparisonImg from '../assets/img/Comparison/Annotator.jpg';

export const Comparison = () => {
  return (
    <section id="comparison" className="bd-container">
      <h2 className="offer_collectivity__title" style={{fontSize: "2rem", fontWeight: "bold", backgroundColor: ""}} >Générez une comparaison</h2>
      <p className="comparison__paragraph">
        Faites la comparaison des différents modèles avec un <b>temps de calcul de 5min par km2</b> et d'un <b>impact écologique de 0.17 kg CO2/km2.</b>
      </p>
      <div className="comparison_img">
        <img src={ComparisonImg} alt={ComparisonImg} />
      </div>
    </section>
  );
};
