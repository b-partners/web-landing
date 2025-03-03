import { useState } from 'react';

import { ExpandMore, Troubleshoot } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

import { FrequentAskingQuestionStyle as style } from './styles';

const faqItemList = [
  {
    question: "A quoi sert l'outil BPartners?",
    response:
      "Bpartners vous permet d'analyser des toitures en un seul clic grâce à des images aériennes ultra HD. Détectez les problèmes (usure, moisissure, etc.), obtenez des mesures précises et générez des rapports d'analyse complets. Rejoignez les + de 2000 professionnels qui ont déjà adopté Bpartners!",
  },
  {
    question: 'Pouvons-nous analyser les toitures pour toute la France ?',
    response: "Nous couvrons la majorité du territoire français. Votre zone n'est pas encore disponible? Contactez-nous, nous l'ajoutons rapidement.",
  },
  {
    question: "À quelles fonctionnalités l'essai de gratuit de 14 jours donne t-il accès ?",
    response:
      "L'essai gratuit de 14 jours vous donne accès à toutes les fonctionnalités de BPartners. Vous pouvez ainsi tester l'outil dans son intégralité avant de vous engager.",
  },
];

const detectedObject = [
  ['Les Usures', 'Les moisissures', "Le taux d'humidité", "L'indice de pente"],
  ['Le type de revêtement', 'Prendre les mesures', 'Fissures et Cassures', 'Délimitation des obstacles'],
];

export const FrequentAskingQuestion = () => {
  const [opened, setOpened] = useState(0);

  const handleClick = (index: number) => () => {
    if (index === opened) {
      setOpened(0);
    } else {
      setOpened(index);
    }
  };

  return (
    <Box sx={style}>
      <Typography>Questions fréquentes</Typography>
      <Stack>
        {faqItemList.map(({ question, response }, index) => (
          <Accordion key={question} expanded={opened === index + 1}>
            <AccordionSummary onClick={handleClick(index + 1)} expandIcon={<ExpandMore />}>
              <Typography component="span">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>{response}</AccordionDetails>
          </Accordion>
        ))}
        <Accordion className="anomaly-detected" expanded={opened === 4}>
          <AccordionSummary onClick={handleClick(4)} expandIcon={<ExpandMore />}>
            <Typography component="span">Quels objets / anomalies pouvons nous détecter grâce à l'outil ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Sur une toiture l'outil peut détecter et analyser :</Typography>
            <Stack flexDirection="row">
              <List>
                {detectedObject[0].map((text) => (
                  <ListItem key={text}>
                    <ListItemIcon>
                      <Troubleshoot />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <List>
                {detectedObject[1].map((text) => (
                  <ListItem key={text}>
                    <ListItemIcon>
                      <Troubleshoot />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};
