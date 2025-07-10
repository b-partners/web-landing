import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { LinkButton } from '@/common/components/buttons';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { bookYourDemoUrl } from '@pages/Advertising-Campaign/components';

import { GenInput } from '../components/GenInput';
import { FAQStyle } from './styles';

const faqFallback = [
  { question: "À quoi ça sert d'analyser son toit ?", answer: 'réponse premier exemple' },
  { question: 'Est-ce un bon investissement ?', answer: 'réponse deuxième exemple' },
  { question: "Quelles différences avec d'autres outils ?", answer: 'réponse troisième exemple' },
  { question: 'Comment cela fonctionne ?', answer: 'réponse quatrième exemple' },
  { question: 'Le projet est-il sécurisé ?', answer: 'réponse cinquième exemple' },
  { question: 'Est-ce que c’est gratuit ?', answer: 'réponse sixième exemple' },
];

export const FAQ = () => {
  const location = useLocation();
  const isEdit = location.pathname === '/templateGenerator';
  const { getValues } = useFormContext();

  return (
    <Box component="section" id="template-FAQ" sx={FAQStyle}>
      <Box id="faq-container">
        {isEdit ? (
          <GenInput name="faq.title1" className="faq-title" placeholder="FAQ" />
        ) : (
          <Typography variant="h2" className="faq-title">
            {getValues('faq.title1') || 'FAQ'}
          </Typography>
        )}

        {faqFallback.map((fallback, index) => {
          const data = getValues(`faq.q${index + 1}`) || {};
          const question = data.question || fallback.question;
          const answer = data.answer || fallback.answer;

          return (
            <Accordion key={index} className="accordion" expanded={isEdit ? true : undefined}>
              <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
                {isEdit ? (
                  <GenInput name={`faq.q${index + 1}.question`} placeholder="Question ..." fullWidth />
                ) : (
                  <Typography className="accordion-text">{question}</Typography>
                )}
              </AccordionSummary>
              <AccordionDetails>
                {isEdit ? (
                  <GenInput name={`faq.q${index + 1}.answer`} placeholder="Réponse ..." multiline fullWidth />
                ) : (
                  <Typography className="accordion-text">{answer}</Typography>
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      <Box id="change-container">
        {isEdit ? (
          <GenInput
            name="faq.title2"
            multiline
            fullWidth
            className="input-change-text"
            placeholder="Vous êtes un particulier ? Vous souhaitez trouver un couvreur ?"
          />
        ) : (
          <Typography className="change-text" variant="h4">
            {getValues('faq.title2') || 'Vous êtes un particulier ? Vous souhaitez trouver un couvreur ?'}
          </Typography>
        )}

        <LinkButton to={bookYourDemoUrl}>Échangeons ensemble</LinkButton>
      </Box>
    </Box>
  );
};
