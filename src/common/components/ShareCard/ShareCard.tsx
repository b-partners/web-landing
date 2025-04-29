import { LazyLoadImage } from 'react-lazy-load-image-component';

import './ShareCard.css';
import { Typography } from '@mui/material';
import { PALETTE_COLORS } from '@/config/theme';

export const ShareCard = ({ cardText = 'card text', imgSrc }: { cardText?: string; imgSrc?: string; }) => {
  return (
    <div className="share__element">
      <div className="share-img-container">
        <LazyLoadImage src={imgSrc} height="50" width="auto" placeholderSrc={imgSrc} effect="blur" />
      </div>
      <Typography sx={{ color: PALETTE_COLORS.white }}>{cardText}</Typography>
    </div>
  );
}
