import { useWatch } from 'react-hook-form';

import { Button } from '@mui/material';

import { templateGenDownloadJson } from '../utils/template-gen-json-download';

export const GenButtonDownload = () => {
  const stateValues = useWatch();

  const onClick = () => templateGenDownloadJson(stateValues, 'mock');

  return (
    <Button className="button-json" onClick={onClick} variant="contained">
      Télécharger le JSON
    </Button>
  );
};
