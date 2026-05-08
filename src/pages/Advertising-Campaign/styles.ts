import { BP_COLOR } from '@/config';
import { PALETTE_COLORS } from '@/config/theme';
import { SxProps } from '@mui/material';

export const HeroStyle: SxProps = {
  paddingBottom: '50px',
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
      lg: '90%',
    },
    height: '100%',
    padding: 2,
    bgcolor: PALETTE_COLORS.pine,
  },
  '& .MuiTypography-root': {
    color: '#fff',
  },
};
export const DistinctionStyle: SxProps = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  bgcolor: PALETTE_COLORS.white,
  mt: 5,
  padding: 5,
  '& > .MuiTypography-root': {
    fontSize: 30,
    fontWeight: 'bold',
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
    gap: 5,
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
    border: `2px solid var(--pine)`,
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
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
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
    justifyContent: 'space-between',
    alignItems: 'stretch',
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
    gridTemplateColumns: {
      xs: '90%',
      md: '60% 30%',
    },
    placeContent: 'center',
    alignItems: 'center',
  },
  '& .pricing-item-list > .MuiStack-root > .MuiDivider-root': {
    my: 2,
  },
  '& .pricing-item-list > .MuiStack-root > .MuiTypography-root': {
    px: 2,
    pt: 1,
    textAlign: {
      xs: 'center',
      md: 'start',
    },
  },
  '& .pricing-item-list > .MuiStack-root > .MuiStack-root > .MuiSvgIcon-root': {
    color: (theme) => (theme as any).palette.success.light,
    display: {
      xs: 'block',
      md: 'none',
    },
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root': {
    padding: 5,
    bgcolor: (theme) => (theme as any).palette.secondary.light,
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
    border: {
      xs: 'none',
      md: '2px solid white',
    },
    position: 'absolute',
    width: {
      xs: '90%',
      md: '120%',
    },
    transition: 'all 100ms',
  },
  '& .pricing-item-list > .MuiStack-root > .MuiBox-root > .MuiButton-root:hover': {
    bgcolor: (theme) => (theme as any).palette.secondary.light,
    scale: 1.1,
  },
  '& .pricing-item-list > .MuiStack-root:first-child > .MuiBox-root': {
    borderRadius: '1rem 1rem 0 0',
  },
  '& .pricing-item-list > .MuiStack-root:last-child > .MuiBox-root': {
    borderRadius: '0 0 1rem 1rem',
    bgcolor: {
      xs: 'transparent',
      md: PALETTE_COLORS.pine,
    },
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
  '& .anomaly-detected .MuiAccordionDetails-root .MuiStack-root': {
    flexWrap: 'wrap',
    mx: {
      xs: 0,
      md: 10,
    },
    gap: {
      xs: 0,
      md: 10,
    },
  },
  '& .anomaly-detected .MuiAccordionDetails-root .MuiStack-root > .MuiList-root': {
    m: 0,
    p: 0,
  },
};

export const ContactStyle: SxProps = {
  width: '100%',
  display: 'flex',
  paddingBlock: '50px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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

const PRICING_COLORS = {
  bg: '#F5EFE2',
  bgCard: '#FFFFFF',
  orange: '#E96B33',
  orangeDark: '#C95822',
  orangeSoft: '#FBE6D8',
  text: '#1F1F1F',
  textMuted: '#6B6B6B',
  border: '#D9C9A8',
  borderDotted: '#C9A87A',
  highlight: '#FFF6EA',
};

export const PricingContainerStyle: SxProps = {
  bgcolor: PRICING_COLORS.bg,
  py: 8,
  px: 3,
  '& .pricing-wrapper': {
    maxWidth: 1280,
    mx: 'auto',
  },
  '& .pricing-hero': {
    textAlign: 'center',
    mb: 7,
  },
  '& .pricing-eyebrow': {
    color: PRICING_COLORS.orange,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    mb: 2,
  },
  '& .pricing-title': {
    fontSize: { xs: '32px', md: '48px', lg: '56px' },
    fontWeight: 800,
    lineHeight: 1.1,
    mb: 2,
    letterSpacing: '-0.02em',
    '& .accent': {
      color: PRICING_COLORS.orange,
    },
  },
  '& .pricing-description': {
    fontSize: 18,
    color: PRICING_COLORS.textMuted,
    maxWidth: 720,
    mx: 'auto',
    mb: 4,
  },
  '& .billing-toggle': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    bgcolor: PRICING_COLORS.bgCard,
    border: `1px solid ${PRICING_COLORS.border}`,
    borderRadius: '999px',
    p: 1,
    boxShadow: '0 8px 28px rgba(43, 25, 8, 0.08)',
    '& .toggle-btn': {
      border: 'none',
      px: 3,
      py: 1.25,
      borderRadius: '999px',
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'none',
      transition: 'all 0.2s',
      background: 'transparent',
      color: PRICING_COLORS.textMuted,
      '&.active': {
        background: PRICING_COLORS.orange,
        color: 'white',
        boxShadow: `0 2px 8px rgba(233, 107, 51, 0.32)`,
      },
    },
    '& .toggle-badge': {
      background: PRICING_COLORS.orangeSoft,
      color: PRICING_COLORS.orangeDark,
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 8px',
      borderRadius: '999px',
      marginLeft: 1,
    },
  },
  '& .segment-tabs': {
    display: 'flex',
    justifyContent: 'center',
    gap: 1,
    mb: 4,
    flexWrap: 'wrap',
    '& .tab-btn': {
      p: 1.25,
      border: `1px solid ${PRICING_COLORS.border}`,
      bgcolor: PRICING_COLORS.bgCard,
      borderRadius: '999px',
      fontSize: 14,
      fontWeight: 600,
      color: PRICING_COLORS.textMuted,
      textTransform: 'none',
      transition: 'all 0.2s',
      '&.active': {
        bgcolor: PRICING_COLORS.orange,
        color: 'white',
        borderColor: PRICING_COLORS.orange,
      },
    },
  },
  '& .pricing-cards-grid': {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: 'repeat(4, 1fr)' },
    gap: 3,
    mb: 4,
  },
  '& .pricing-card': {
    bgcolor: PRICING_COLORS.bgCard,
    border: `1px solid ${PRICING_COLORS.border}`,
    borderRadius: '18px',
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 8px 28px rgba(43, 25, 8, 0.08)',
    '&.featured': {
      border: `2px solid ${PRICING_COLORS.orange}`,
      bgcolor: PRICING_COLORS.highlight,
      transform: 'scale(1.02)',
      '&::before': {
        content: '"Le plus populaire"',
        position: 'absolute',
        top: -12,
        left: '50%',
        transform: 'translateX(-50%)',
        bgcolor: PRICING_COLORS.orange,
        color: 'white',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        px: 2,
        py: 0.6,
        borderRadius: '999px',
        whiteSpace: 'nowrap',
      },
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 40px rgba(43, 25, 8, 0.14)',
      '&.featured': {
        transform: 'scale(1.02) translateY(-4px)',
      },
    },
  },
  '& .card-icon': {
    width: 44,
    height: 44,
    borderRadius: '12px',
    bgcolor: PRICING_COLORS.orangeSoft,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 2,
    fontSize: 22,
  },
  '& .card-title': {
    fontSize: 20,
    fontWeight: 700,
    mb: 1,
  },
  '& .card-subtitle': {
    color: PRICING_COLORS.textMuted,
    fontSize: 13,
    mb: 2.75,
    minHeight: 38,
  },
  '& .card-price-row': {
    display: 'flex',
    alignItems: 'baseline',
    gap: 1,
    mb: 0.25,
  },
  '& .card-price': {
    fontSize: 38,
    fontWeight: 800,
    color: PRICING_COLORS.orange,
    letterSpacing: '-0.02em',
  },
  '& .card-price-suffix': {
    color: PRICING_COLORS.textMuted,
    fontSize: 14,
    fontWeight: 500,
  },
  '& .card-price-ht': {
    color: PRICING_COLORS.textMuted,
    fontSize: 12,
    mb: 1.5,
  },
  '& .card-price-yearly': {
    color: PRICING_COLORS.textMuted,
    fontSize: 13,
    mb: 2.75,
    minHeight: 18,
  },
  '& .card-cta': {
    width: '100%',
    py: 1.6,
    borderRadius: '999px',
    fontSize: 14,
    fontWeight: 700,
    mb: 2.75,
    textTransform: 'none',
    transition: 'all 0.2s',
    '&.outlined': {
      bgcolor: 'transparent',
      color: PRICING_COLORS.orange,
      border: `2px solid ${PRICING_COLORS.orange}`,
      '&:hover': {
        bgcolor: PRICING_COLORS.orange,
        color: 'white',
      },
    },
    '&.contained': {
      bgcolor: PRICING_COLORS.orange,
      color: 'white',
      '&:hover': {
        bgcolor: PRICING_COLORS.orangeDark,
      },
    },
  },
  '& .card-features': {
    listStyle: 'none',
    mt: 'auto',
    pt: 0.5,
    borderTop: `1px dashed ${PRICING_COLORS.borderDotted}`,
  },
  '& .feature-item': {
    display: 'flex',
    gap: 1.25,
    fontSize: 13,
    lineHeight: 1.5,
    py: 1.4,
    borderBottom: `1px dashed ${PRICING_COLORS.borderDotted}`,
    '&:last-child': {
      borderBottom: 'none',
    },
    '&.muted': {
      color: PRICING_COLORS.textMuted,
    },
  },
  '& .feature-check': {
    flexShrink: 0,
    width: 18,
    height: 18,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 700,
    mt: 0.125,
    '&.included': {
      bgcolor: PRICING_COLORS.orangeSoft,
      color: PRICING_COLORS.orangeDark,
    },
    '&.excluded': {
      bgcolor: '#EAEAEA',
      color: '#B0B0B0',
    },
  },
  '& .custom-card': {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'auto 1fr auto' },
    gap: 3,
    mb: 8,
    bgcolor: PRICING_COLORS.bgCard,
    border: `1px solid ${PRICING_COLORS.border}`,
    borderRadius: '18px',
    p: 3.5,
    alignItems: 'center',
  },
  '& .custom-title': {
    fontSize: 20,
    fontWeight: 700,
    mb: 0.5,
  },
  '& .custom-description': {
    color: PRICING_COLORS.textMuted,
    fontSize: 14,
  },
  '& .custom-cta': {
    bgcolor: 'transparent',
    color: PRICING_COLORS.orange,
    border: `2px solid ${PRICING_COLORS.orange}`,
    borderRadius: '999px',
    px: 3,
    py: 1.5,
    fontWeight: 700,
    textTransform: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      bgcolor: PRICING_COLORS.orange,
      color: 'white',
    },
  },
  '& .compare-section': {
    mb: 8,
  },
  '& .compare-title': {
    fontSize: 32,
    fontWeight: 800,
    mb: 1.5,
    textAlign: 'center',
  },
  '& .compare-description': {
    color: PRICING_COLORS.textMuted,
    textAlign: 'center',
    mb: 5,
  },
  '& .compare-table-wrapper': {
    overflowX: 'auto',
  },
  '& .compare-table': {
    minWidth: 600,
    bgcolor: PRICING_COLORS.bgCard,
    borderRadius: '18px',
  },
  '& .compare-table thead': {
    bgcolor: '#FAF4E5',
  },
  '& .compare-table th': {
    fontWeight: 700,
    fontSize: 13,
    '&.featured-col': {
      bgcolor: PRICING_COLORS.orange,
      color: 'white',
    },
  },
  '& .compare-table td': {
    borderBottom: `1px dashed ${PRICING_COLORS.borderDotted}`,
    fontSize: 14,
    '&.label-cell': {
      textAlign: 'left',
      fontWeight: 500,
      color: PRICING_COLORS.text,
    },
    '&.featured-col': {
      bgcolor: PRICING_COLORS.highlight,
    },
    '&.yes': {
      color: PRICING_COLORS.orange,
      fontWeight: 700,
    },
  },
  '& .faq-section': {
    mb: 8,
  },
  '& .faq-title': {
    fontSize: 32,
    fontWeight: 800,
    mb: 5,
    textAlign: 'center',
  },
  '& .faq-grid': {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 2.5,
  },
  '& .faq-item': {
    bgcolor: PRICING_COLORS.bgCard,
    p: 2.75,
    borderRadius: '12px',
    border: `1px solid ${PRICING_COLORS.border}`,
  },
  '& .faq-question': {
    fontSize: 15,
    fontWeight: 700,
    mb: 1,
  },
  '& .faq-answer': {
    fontSize: 14,
    color: PRICING_COLORS.textMuted,
  },
  '& .footer-cta': {
    p: 6,
    background: `linear-gradient(135deg, ${PRICING_COLORS.orange} 0%, ${PRICING_COLORS.orangeDark} 100%)`,
    borderRadius: '18px',
    textAlign: 'center',
    color: 'white',
  },
  '& .footer-cta-title': {
    fontSize: 28,
    fontWeight: 800,
    mb: 1.5,
  },
  '& .footer-cta-description': {
    fontSize: 16,
    opacity: 0.92,
    mb: 3.5,
  },
  '& .footer-cta-btn': {
    display: 'inline-block',
    bgcolor: 'white',
    color: PRICING_COLORS.orange,
    px: 4,
    py: 1.75,
    borderRadius: '999px',
    fontWeight: 700,
    textTransform: 'none',
    fontSize: 14,
    transition: 'all 0.2s',
    '&:hover': {
      bgcolor: PRICING_COLORS.bg,
      transform: 'translateY(-1px)',
    },
  },
};
