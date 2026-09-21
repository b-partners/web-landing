import { useUpdateMeta } from '@/common/utils/use-update-meta';
import { Box, Stack } from '@mui/material';

import { sitePlanUrls } from './site-plan-urls';
import { navigationPlanStyle } from './style';

export const NavigationPlan = () => {
  useUpdateMeta('Plan du site | BIRDIA', 'Retrouvez toutes les pages du site BIRDIA : solution, offres, ressources et informations légales.');

  return (
    <Box sx={navigationPlanStyle}>
      <Stack component="ul">
        {sitePlanUrls.map((url) => (
          <li key={url}>
            <a href={url} target="_blank">
              {url}
            </a>
          </li>
        ))}
      </Stack>
    </Box>
  );
};
