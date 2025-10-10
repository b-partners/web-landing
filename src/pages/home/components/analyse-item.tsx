import { FC, useEffect, useRef } from 'react';

import { FlexBox } from '@/common/components';
import { SxProps, Typography } from '@mui/material';
import { useTemplateFormContext } from '@pages/template/utils/use-template-form-context';

import { AnalyseType } from '../utils/constant';

const ANALYSE_ITEM_SX = (bgcolor: string, color: string): SxProps => ({
  p: 5,
  flex: 1,
  flexDirection: 'column',
  minHeight: '300px',
  height: '33.33%',
  minWidth: '300px',
  bgcolor: bgcolor,
  '& .analyse-item-description': { textAlign: 'center', maxWidth: '700px', color, fontSize: '1.3rem', mt: 3 },
  '& .analyse-item-description ul': { textAlign: 'start' },
  '& .analyse-item-title': {
    fontWeight: 'bold',
    maxWidth: '640px',
    textAlign: 'center',
    color,
    fontSize: { xs: '1.6rem', sm: '1.8rem', xl: '2rem', xxl: '2.5rem' },
  },
});

export const AnalyseItem: FC<{ analyse: AnalyseType; index: number }> = ({ analyse, index }) => {
  const { getValues } = useTemplateFormContext();

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = getValues(`analyse.information.${index}.description`) || `${analyse.description}`;
    }
  }, [analyse.description, index, getValues]);

  return (
    <FlexBox sx={ANALYSE_ITEM_SX(analyse.bgcolor, analyse.color)}>
      <Typography variant="h3" className="analyse-item-title">
        {getValues(`analyse.information.${index}.title`) || `${analyse.title}`}
      </Typography>
      <Typography className="analyse-item-description" ref={ref}></Typography>
    </FlexBox>
  );
};
