import { LinkButton } from '@/common/components/buttons';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
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
        <Typography variant="h2" className="faq-title">
          FAQ
        </Typography>
        {faqTitles.map(({ id, question, reponse }) => (
          <Accordion key={id} className="accordion">
            <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
              <Typography className="accordion-text">{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-text">{reponse}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box id="change-container">
        <Typography className="change-text" variant="h4">
          Vous êtes un particulier , vous souhaitez trouver un couvreur ?
        </Typography>
        <LinkButton to={bookYourDemoUrl}>Echangeons ensemble</LinkButton>
      </Box>
    </Box>
  );
};
