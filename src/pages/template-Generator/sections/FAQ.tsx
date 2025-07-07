import { LinkButton } from '@/common/components/buttons';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, Input } from '@mui/material';
import { bookYourDemoUrl } from '@pages/Advertising-Campaign/components';

import { FAQStyle } from './styles';

const faqTitles = [
  { id: 'q1', question: "A quoi ça sert d'analyser son toit ?", reponse: 'réponse premier exemple' },
  { id: 'q2', question: 'Est-ce un bon investissement ?', reponse: 'réponse deuxième exemple' },
  { id: 'q3', question: "Quelles différences avec d'autres outils ?", reponse: 'réponse troisième exemple' },
  { id: 'q4', question: 'Comment cela fonctionne ?', reponse: 'réponse quatrième exemple' },
  { id: 'q5', question: 'Le projet est-il sécurisé ?', reponse: 'réponse cinquième exemple' },
  { id: 'q6', question: 'Le projet est-il sécurisé ?', reponse: 'réponse sixième exemple' },
];

export const FAQ = () => {
  return (
    <Box component="section" id="template-FAQ" sx={FAQStyle}>
      <Box id="faq-container">
        <Input className="faq-title" placeholder='FAQ'></Input>
        {faqTitles.map(({ id, question, reponse }) => (
          <Accordion key={id} className="accordion" defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
              <Input placeholder='Question ...'></Input>
            </AccordionSummary>
            <AccordionDetails>
            <Input placeholder='Réponse ...'></Input>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box id="change-container">
      <Input className="change-text" placeholder='Vous êtes un particulier , vous souhaitez trouver un couvreur ?'></Input>
        <LinkButton to={bookYourDemoUrl}>Echangeons ensemble</LinkButton>
      </Box>
    </Box>
  );
};
