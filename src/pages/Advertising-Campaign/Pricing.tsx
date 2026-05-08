import { useState } from 'react';

import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

import { faqItems, pricingCouvreurs } from './constant';
import { PricingContainerStyle } from './styles';

export const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [activeSegment, setActiveSegment] = useState('couvreurs');

  return (
    <Box sx={PricingContainerStyle}>
      <Box className="pricing-wrapper">
        {/* HERO */}
        <Box className="pricing-hero">
          <Typography className="pricing-eyebrow">Pricing 2026</Typography>
          <Typography className="pricing-title">
            Une offre <span className="accent">simple</span>,
            <br />
            pour chaque taille d'entreprise.
          </Typography>
          <Typography className="pricing-description">
            De l'artisan à la coopérative, choisissez l'offre qui correspond à votre activité. Sans engagement, à l'usage ou avec abonnement annuel.
          </Typography>

          {/* Billing Toggle */}
          <Box className="billing-toggle">
            <Button className={`toggle-btn ${billing === 'monthly' ? 'active' : ''}`} onClick={() => setBilling('monthly')}>
              Mensuel
            </Button>
            <Button className={`toggle-btn ${billing === 'yearly' ? 'active' : ''}`} onClick={() => setBilling('yearly')}>
              Annuel <span className="toggle-badge">-15 %</span>
            </Button>
          </Box>
        </Box>

        {/* Segment Tabs */}
        <Box className="segment-tabs">
          {[
            { id: 'couvreurs', label: 'Professionnels du toit' },
            { id: 'assureurs', label: 'Assureurs' },
            { id: 'collectivites', label: 'Collectivités' },
          ].map((tab) => (
            <Button key={tab.id} className={`tab-btn ${activeSegment === tab.id ? 'active' : ''}`} onClick={() => setActiveSegment(tab.id)}>
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Pricing Cards */}
        {activeSegment === 'couvreurs' && (
          <Box>
            <Box className="pricing-cards-grid">
              {pricingCouvreurs.map((card) => (
                <Box key={card.id} className={`pricing-card ${card.featured ? 'featured' : ''}`}>
                  <Box className="card-icon">{card.icon}</Box>
                  <Typography className="card-title">{card.title}</Typography>
                  <Typography className="card-subtitle">{card.subtitle}</Typography>

                  <Box className="card-price-row">
                    <Typography className="card-price">{card.price[billing]}</Typography>
                    <Typography className="card-price-suffix">{card.suffix}</Typography>
                  </Box>
                  <Typography className="card-price-ht">{card.priceHT}</Typography>
                  <Typography className="card-price-yearly" dangerouslySetInnerHTML={{ __html: card.yearlyText[billing] }} />

                  <Button className={`card-cta ${card.ctaVariant}`}>{card.cta}</Button>

                  <Box className="card-features">
                    {card.features.map((feature, idx) => (
                      <Box key={idx} className={`feature-item ${feature.included ? '' : 'muted'}`}>
                        <Box className={`feature-check ${feature.included ? 'included' : 'excluded'}`}>{feature.included ? '✓' : '×'}</Box>
                        <Box dangerouslySetInnerHTML={{ __html: feature.text }} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Custom / Sur-mesure Card */}
            <Box className="custom-card">
              <Box className="card-icon">⚙️</Box>
              <Box>
                <Typography className="custom-title">Sur-mesure — Foncières, OPH, Diagnostiqueurs</Typography>
                <Typography className="custom-description">
                  Volumes importants, multi-métiers, déploiement multi-entités, intégration personnalisée. Tarif adapté à votre activité, contractualisation par
                  bon de commande ou Contrat SaaS dédié.
                </Typography>
              </Box>
              <Button className="custom-cta">Contactez-nous</Button>
            </Box>

            {/* Comparison Table */}
            <Box className="compare-section">
              <Typography className="compare-title">Comparatif détaillé</Typography>
              <Typography className="compare-description">Toutes les fonctionnalités, mois par mois.</Typography>

              <Box className="compare-table-wrapper">
                <Table className="compare-table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="label-cell">—</TableCell>
                      <TableCell align="center">À l'usage</TableCell>
                      <TableCell align="center" className="featured-col">
                        Essentiel
                      </TableCell>
                      <TableCell align="center">Pro</TableCell>
                      <TableCell align="center">Expert</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { label: 'Prix HT / mois', values: ['—', '49 €', '99 €', '199 €'] },
                      { label: "Prix à l'analyse / supp. HT", values: ['10 €', '5 €', '4 €', '3 €'] },
                      { label: 'Analyses incluses / mois', values: ['0', '10', '25', '60'] },
                      { label: 'Analyse IA toiture', values: ['✓', '✓', '✓', '✓'], isYes: true },
                      { label: 'Widget site internet', values: ['—', '✓', '✓', '✓'], isYes: [false, true, true, true] },
                      { label: 'Communauté BIRDIA', values: ['—', '✓', '✓', '✓'], isYes: [false, true, true, true] },
                      { label: 'Support 7j/7', values: ['Email', '✓', 'Prio', 'Dédié 4h'] },
                      { label: 'Multi-utilisateurs', values: ['1', '1', '3', 'Illimité'] },
                    ].map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="label-cell">{row.label}</TableCell>
                        {row.values.map((value: any, colIdx: number) => (
                          <TableCell
                            key={colIdx}
                            align="center"
                            className={`${colIdx === 1 ? 'featured-col' : ''} ${
                              (typeof row.isYes === 'boolean' ? row.isYes : Array.isArray(row.isYes) && row.isYes[colIdx]) && value === '✓' ? 'yes' : ''
                            }`}
                          >
                            {value}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Box>
        )}

        {/* FAQ */}
        <Box className="faq-section">
          <Typography className="faq-title">Questions fréquentes</Typography>
          <Box className="faq-grid">
            {faqItems.map((item, idx) => (
              <Box key={idx} className="faq-item">
                <Typography className="faq-question">{item.question}</Typography>
                <Typography className="faq-answer">{item.answer}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Footer CTA */}
        <Box className="footer-cta">
          <Typography className="footer-cta-title">Prêt à booster votre activité ?</Typography>
          <Typography className="footer-cta-description">Rejoignez les centaines d'artisans, PME et collectivités qui utilisent BIRDIA.</Typography>
          <Button className="footer-cta-btn">Tester 14 jours sans engagement</Button>
        </Box>
      </Box>
    </Box>
  );
};
