import { useState } from 'react';
import { useWatch } from 'react-hook-form';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { templateGenDownloadBase64Txt } from '../utils/template-gen-json-download';

export const GenButtonDownload = () => {
  const stateValues = useWatch();
  const [open, setOpen] = useState(false);
  const [urlSuffix, setUrlSuffix] = useState('');

  const handleOpenDialog = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const updatedState = { ...stateValues };
    templateGenDownloadBase64Txt(updatedState, urlSuffix.replace(/^\//, ''));
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpenDialog} variant="contained" className="button-json">
        Télécharger le fichier
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Complétez la fin de l’URL, ce sera votre chemin d’accès via internet.</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
            placeholder="paris"
            value={urlSuffix}
            onChange={(e) => setUrlSuffix(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#F37335' }}>
            Annuler
          </Button>
          <Button onClick={handleConfirm} disabled={!urlSuffix.trim()} variant="contained">
            Télécharger
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
