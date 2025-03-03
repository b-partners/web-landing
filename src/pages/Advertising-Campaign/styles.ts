import { BP_COLOR } from '@/config';
import { SxProps } from '@mui/material';

export const HeroStyle: SxProps = {
  '& .logo-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  '& .logo-container > img': {
    objectFit: 'contain',
    height: '20vh',
  },
  '& .description-container': {
    width: '100%',
    padding: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .description-content': {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '2vw',
    flexWrap: 'wrap',
    width: {
      xs: '95%',
      md: '80%',
      lg: '70%',
    },
    height: '100%',
    padding: 2,
    bgcolor: (theme) => (theme as any).palette.primary.light,
  },
  '& .MuiTypography-root': {
    color: '#fff',
  },
};
export const DistinctionStyle: SxProps = {
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: 5,
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 5,
    textAlign: 'center',
  },
  '& > .MuiBox-root': {
    position: 'relative',
    height: 400,
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
  },
  '& > .MuiBox-root > .react-multi-carousel-list  ': {
    position: 'relative',
    height: 400,
    width: '100%',
  },
  '&  > .MuiBox-root > .react-multi-carousel-list .react-multi-carousel-item': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '&  > .MuiBox-root > .react-multi-carousel-list p': {
    textAlign: 'center',
  },
};

export const FeaturesStyle: SxProps = {
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: 5,
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 5,
    textAlign: 'center',
  },
  '& .card-grid': {
    display: 'grid',
    gap: 10,
    placeItems: 'center',
    placeContent: 'center',
    gridTemplateColumns: {
      sx: '100%',
      lg: '30% 30% 30%',
    },
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
  },
  '& .MuiCard-root': {
    width: '100%',
  },
  '& .MuiCardContent-root': {
    minHeight: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  '& .MuiCardContent-root > .MuiTypography-root:not(:first-of-type) ': {
    mt: 2,
  },
};

export const DetectionTypeStyle: SxProps = {
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .content': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: `2px solid #9c255a`,
    marginBlock: 5,
    borderRadius: 5,
    paddingBlock: 5,
    width: {
      xs: 'calc(90% - 2px)',
      md: 'calc(80% - 2px)',
      lg: 'calc(70% - 2px)',
    },
  },
  '& .content > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 5,
    textAlign: 'center',
  },
  '& .MuiAlert-root': {
    width: '70%',
    m: 1,
    bgcolor: '#004aad',
  },
  '& .MuiAlert-message': {
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};

export const RatingStyle: SxProps = {
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: 5,
    textAlign: 'center',
  },
  '& .rating-items-list': {
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  '& .MuiCard-root': {
    m: 2,
    width: {
      xs: '90%',
      md: '70%',
      lg: '45%',
    },
  },
  '& .MuiCardContent-root': {
    minHeight: 160,
  },
  '& .MuiCardContent-root > .MuiTypography-root:not(:first-of-type)': {
    marginTop: 4,
  },
};

export const PricingStyle: SxProps = {
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBlock: 10,
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBlock: 5,
    textAlign: 'center',
    color: '#004aad',
    mb: 10,
    width: {
      xs: '90%',
      md: '70%',
      lg: '50%',
    },
  },
  '& .pricing-item-list': {
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
  },
  '& .pricing-item-list > .MuiStack-root': {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '60% 30%',
    placeContent: 'center',
    alignItems: 'center',
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root': {
    padding: 5,
    bgcolor: (theme) => (theme as any).palette.primary.light,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root > .MuiSvgIcon-root': {
    fontSize: 30,
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root > .MuiButton-root': {
    border: '2px solid white',
    position: 'absolute',
    width: '120%',
    transition: 'all 100ms',
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root > .MuiButton-root:hover': {
    bgcolor: (theme) => (theme as any).palette.primary.light,
    scale: 1.1,
  },
  '& .pricing-item-list > .MuiStack-root:first-child > .MuiBox-root': {
    borderRadius: '1rem 1rem 0 0',
  },
  '& .pricing-item-list > .MuiStack-root:last-child > .MuiBox-root': {
    borderRadius: '0 0 1rem 1rem',
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root > .MuiTypography-root': {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textWrap: 'nowrap',
  },
};

export const FrequentAskingQuestionStyle: SxProps = {
  width: '100%',
  minHeight: '40vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBlock: 10,
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBlock: 5,
    textAlign: 'center',
    width: {
      xs: '90%',
      md: '70%',
      lg: '50%',
    },
  },
  '& .MuiAccordion-root': {
    my: 0.5,
  },
  '& .MuiAccordionSummary-root': {
    bgcolor: BP_COLOR[5],
  },
  '& .MuiAccordionSummary-root .MuiTypography-root': {
    color: 'white',
    fontWeight: 'bold',
  },
  '& .MuiAccordionSummary-root .MuiSvgIcon-root': {
    color: 'white',
    fontWeight: 'bold',
  },
  '& > .MuiStack-root': {
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
  },
};

export const ContactStyle: SxProps = {
  width: '100%',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBlock: 10,
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBlock: 5,
    textAlign: 'center',
    width: {
      xs: '90%',
      md: '70%',
      lg: '50%',
    },
  },
  '& .MuiAccordion-root': {
    my: 0.5,
  },
  '& .MuiAccordionSummary-root': {
    bgcolor: BP_COLOR[5],
  },
  '& .MuiAccordionSummary-root .MuiTypography-root': {
    color: 'white',
    fontWeight: 'bold',
  },
  '& .MuiAccordionSummary-root .MuiSvgIcon-root': {
    color: 'white',
    fontWeight: 'bold',
  },
  '& > .MuiStack-root.to-contact': {
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
    padding: 2,
    display: 'grid',
    gridTemplateColumns: {
      xs: 'auto',
      md: 'auto auto auto',
    },
    placeItems: {
      xs: 'self-start',
      md: 'center',
    },
  },
  '& > .MuiStack-root.to-follow': {
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& > .MuiStack-root > .MuiStack-root > img': {
    objectFit: 'contain',
    height: 50,
  },
  '& .MuiButton-root': {
    fontSize: 15,
  },
  '& .MuiDivider-root': {
    bgcolor: 'gray',
    my: 1,
    width: {
      xs: '90%',
      md: '80%',
      lg: '70%',
    },
  },
};
