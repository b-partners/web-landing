import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { z } from 'zod';

import { templateGenDownloadBase64Txt } from '../utils/template-gen-json-download';

const schema = z.object({
  title: z.custom((v) => `${v}`.length > 0, { message: 'Ce champs est requis.' }),
  description: z.custom((v) => `${v}`.length > 0, { message: 'Ce champs est requis.' }),
  filename: z.custom((v) => `${v}`.length > 0, { message: 'Ce champs est requis.' }),
});

const defaultValues = {
  title: 'BIRDIA, l’IA qui analyse vos toitures sur images HD',
  description: "Mesures précises, détection d'anomalies (usures, moisissures...), et gestion de dossiers. Gagnez du temps, optimisez vos interventions !",
  fileName: '',
};

export const GenButtonDownload = () => {
  const stateValues = useWatch();
  const [open, setOpen] = useState(false);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: zodResolver(schema), defaultValues });

  const handleOpenDialog = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const updatedState = { ...stateValues, metaTitle: getValues('title'), metaDescription: getValues('description') };
    templateGenDownloadBase64Txt(updatedState, getValues('fileName').replace(/^\//, ''));
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
          <TextField autoFocus label="Nom de la page" margin="dense" fullWidth placeholder="paris" {...register('fileName')} />
          <TextField autoFocus label="Titre" margin="dense" fullWidth placeholder="BIRDIA, l’IA qui analyse ..." {...register('title')} />
          <TextField
            autoFocus
            label="Description"
            margin="dense"
            fullWidth
            placeholder="Mesures précises, détection d'anomalies ..."
            {...register('description')}
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#F37335' }}>
            Annuler
          </Button>
          <Button onClick={handleConfirm} disabled={Object.keys(errors).length > 0} variant="contained">
            Télécharger
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
