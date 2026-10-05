import { useUpdateMeta } from '@/common/utils/use-update-meta';

import './assets/css/blog.css';

const TUTORIALS = [{ title: 'Découvrez l’application mobile' }, { title: 'Découvrez le dashboard' }];

export const BlogTutoriels = () => {
  useUpdateMeta('Tutoriels | Blog BIRDIA', 'Les tutoriels BIRDIA : prise en main de l’application mobile et du dashboard.');

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="wrap">
          <h1>Nos tutoriels</h1>
        </div>
      </section>
      <section className="sec white">
        <div className="wrap">
          <div className="tut-grid">
            {TUTORIALS.map((tuto) => (
              <span className="tut-card bcard soon" key={tuto.title}>
                <h3>{tuto.title}</h3>
                <p>Bientôt disponible</p>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="sec green">
        <div className="wrap">
          <h2 className="t">Qui sommes-nous ?</h2>
          <p className="intro" style={{ textAlign: 'left', maxWidth: 760 }}>
            Nous sommes BPartners SAS, l'assistant intelligent qui accélère la croissance et les encaissements des artisans et indépendants français. Nous avons
            développé une solution de gestion d'entreprise unifiée pensée avec les artisans pour les artisans. Notre ambition est de permettre à tous les
            artisans : d'automatiser leur édition de devis/factures ; d'avoir un outil pour encaisser leurs clients sur mobile via QR code/Lien/sms de paiement
            ; de les soulager de la relance client ou la recherche de nouveaux clients.
          </p>
        </div>
      </section>
    </div>
  );
};
