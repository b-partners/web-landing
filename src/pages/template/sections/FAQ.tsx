import { useLocation } from 'react-router-dom';

import { LinkButton } from '@/common/components/buttons';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { bookYourDemoUrl } from '@pages/Advertising-Campaign/components';

import { GenInput } from '../components/GenInput';
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
  const location = useLocation();

  return (
    <Box component="section" id="template-FAQ" sx={FAQStyle}>
      <Box id="faq-container">
        {location.pathname === '/template' ? (
          <Typography variant="h2" className="faq-title">
            FAQ
          </Typography>
        ) : (
          <GenInput name="faq.title1" className="faq-title" placeholder="FAQ" />
        )}
        {faqTitles.map(({ id, question, reponse }) => (
          <Accordion key={id} className="accordion">
            <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
              {location.pathname === '/template' ? (
                <Typography className="accordion-text">{question}</Typography>
              ) : (
                <GenInput name={`faq.${id}.question`} placeholder="Question ..." />
              )}
            </AccordionSummary>
            <AccordionDetails>
              {location.pathname === '/template' ? (
                <Typography className="accordion-text">{reponse}</Typography>
              ) : (
                <GenInput name={`faq.${id}.answer`} placeholder="Réponse ..." />
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box id="change-container">
        {location.pathname === '/template' ? (
          <Typography className="change-text" variant="h4">
            Vous êtes un particulier , vous souhaitez trouver un couvreur ?
          </Typography>
        ) : (
          <GenInput
            name="faq.title2"
            multiline
            fullWidth
            className="input-change-text"
            placeholder="Vous êtes un particulier , vous souhaitez trouver un couvreur ?"
          />
        )}
        <LinkButton to={bookYourDemoUrl}>Echangeons ensemble</LinkButton>
      </Box>
    </Box>
  );
};
