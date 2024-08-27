import React from 'react';

import LOM_1 from '../assets/img/LOM/LOM_1.jpg';
import LOM_2 from '../assets/img/LOM/LOM_2.jpg';
import LOM_3 from '../assets/img/LOM/LOM_3.jpg';
import LOM_4 from '../assets/img/LOM/LOM_4.jpg';
import LOM_5 from '../assets/img/LOM/LOM_5.jpg';
import LOM_6 from '../assets/img/LOM/LOM_6.jpg';
import LOM_7 from '../assets/img/LOM/LOM_7.jpg';
import LOM_8 from '../assets/img/LOM/LOM_8.png';
import LOM_9 from '../assets/img/LOM/LOM_9.jpg';
import TLOM_1 from '../assets/img/LOM/Table-LOM/lom1.jpg';
import TLOM_2 from '../assets/img/LOM/Table-LOM/lom2.jpg';
import TLOM_3 from '../assets/img/LOM/Table-LOM/lom3.jpg';
import TLOM_4 from '../assets/img/LOM/Table-LOM/lom4.jpg';
import TLOM_5 from '../assets/img/LOM/Table-LOM/lom5.jpg';

export function UseCaseItem2() {
  return (
    <div className="usecase__item">
      <div className="usecase__item-section1">
        <article className="article">
          <h3>Etape 1 : Détection automatique des passages piétons</h3>
        </article>
        <aside>
          <div className="box-img-row">
            <div className="usecase-box-img">
              <img src={LOM_1} alt={LOM_1} />
            </div>
            <div className="usecase-box-img">
              <img src={LOM_2} alt={LOM_2} />
            </div>
            <div className="usecase-box-img">
              <img src={LOM_3} alt={LOM_3} />
            </div>
          </div>
        </aside>
      </div>
      <div className="usecase__item-section1">
        <article className="article">
          <h3>Etape 2 : Détection automatique de la signalisation au sol</h3>
        </article>
        <aside>
          <div className="box-img-row">
            <div className="usecase-box-img">
              <img src={LOM_4} alt={LOM_4} />
            </div>
            <div className="usecase-box-img" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={LOM_5} alt={LOM_5} style={{ maxHeight: '250px' }} />
            </div>
            <div className="usecase-box-img">
              <img src={LOM_6} alt={LOM_6} />
            </div>
          </div>
        </aside>
      </div>
      <div className="usecase__item-section1">
        <article className="article">
          <h3>Etape 3 : Post-traitement Détection d'anomalie et Géométrisation</h3>
        </article>
        <aside>
          <div className="box-img-row">
            <div className="usecase-box-img">
              <img src={LOM_7} alt={LOM_7} />
            </div>
            <div className="usecase-box-img" style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={LOM_8} alt={LOM_8} style={{ maxHeight: '250px' }} />
            </div>
            <div className="usecase-box-img">
              <img src={LOM_9} alt={LOM_9} />
            </div>
          </div>
        </aside>
      </div>
      <div className="usecase__item-section1">
        <article className="article" id="lom_result">
          <h3 style={{ marginRight: '.5rem' }}>
            <u>Résultats:</u>
          </h3>
          <p>Neutralisation des places de parking et évaluation de l'état des passages piétons</p>
        </article>
        <aside>
          <div className="box-img-col">
            <ol className="zan_order-list">
              <li>Calcul du risque d'obstacle à la visibilité (loi LOM).</li>
              <li>Définition d'une note de risque par passage piéton.</li>
              <li>Note de dégradation du passage piéton.</li>
              <li>Comparaison temporelle, évolution.</li>
            </ol>
            <div className="usecase-table">
              <div className="offer__table-row bd-container">
                <div className="offer__table-first__column usecase-table-column">
                  <div className="table-body-cell">
                    <b className="logo-color">Geométrisation & contextualisation objet</b>
                  </div>
                  <div className="table-body-cell">
                    <img src={TLOM_1} alt={TLOM_1} />
                  </div>
                  <div className="table-body-cell">
                    <img src={TLOM_3} alt={TLOM_3} />
                  </div>
                  <div className="table-body-cell">
                    <img src={TLOM_5} alt={TLOM_5} />
                  </div>
                </div>
                <div className="offer__table-first__column usecase-table-column">
                  <div className="table-body-cell">
                    <b className="logo-color">Risque visibilité (LOM)</b>
                  </div>
                  <div className="table-body-cell">
                    <img src={TLOM_2} alt={TLOM_2} />
                  </div>
                  <div className="table-body-cell">
                    <img src={TLOM_4} alt={TLOM_4} />
                  </div>
                  <div className="table-body-cell">
                    <p>AUCUNE RISQUE</p>
                  </div>
                </div>
                <div className="offer__table-first__column usecase-table-column">
                  <div className="table-body-cell">
                    <b className="logo-color">
                      Note de risque parking (LOM)
                      <br />1 = Risque maximal, 0 = Risque nul
                    </b>
                  </div>
                  <div className="table-body-cell">
                    <p>0.99</p>
                  </div>
                  <div className="table-body-cell">
                    <p>0.99</p>
                  </div>
                  <div className="table-body-cell">
                    <p>0</p>
                  </div>
                </div>
                <div className="offer__table-first__column usecase-table-column">
                  <div className="table-body-cell">
                    <b className="logo-color">
                      Note de risque dégradation <br /> 1 = Parfait état, 0 = réhabilitation urgente
                    </b>
                  </div>
                  <div className="table-body-cell">
                    <p>0.41</p>
                  </div>
                  <div className="table-body-cell">
                    <p>0.39</p>
                  </div>
                  <div className="table-body-cell">
                    <p>0.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
