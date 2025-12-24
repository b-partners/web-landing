import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { IRoofer } from './types';

interface IDirectoryListItem {
  roofers: Record<string, IRoofer>;
  zoneId: string;
  title: string;
}

export const DirectoryListItem: FC<IDirectoryListItem> = ({ roofers, zoneId, title }) => {
  return (
    <>
      <Box mt={10} display="flex" justifyContent="center" className="title" p={3}>
        <Typography>{title}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {Object.keys(roofers).map((id) => (
          <Box p={2} width="20%" flexGrow={1} key={id}>
            <Link to={`/annuaire/${id}/zone/${zoneId}`}>{roofers[id].name}</Link>
          </Box>
        ))}
      </Box>
    </>
  );
};
