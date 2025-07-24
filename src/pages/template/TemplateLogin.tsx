import { useForm } from 'react-hook-form';

import { useGetWhoamiQuery } from '@/common/query';
import { Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, TextField, Typography } from '@mui/material';

import { templateLoginStyle } from './components';

export const TemplateLogin = () => {
  const { register, handleSubmit: formHandleSubmit } = useForm();
  const { getWhoami, isWhoamiPending } = useGetWhoamiQuery();

  const handleSubmit = formHandleSubmit(({ apikey }) => getWhoami(apikey));

  return (
    <Box sx={templateLoginStyle}>
      <Card component="form" onSubmit={handleSubmit}>
        <CardHeader title="Connection" />
        <CardContent>
          <Box className="message">
            <Typography>Veuillez entrer votre clé API pour accéder à la page de génération de modèles.</Typography>
          </Box>
          <TextField placeholder="clé API: ed8fad0a-ed9c-4866-a4d0-0340f3a34ca4" fullWidth {...register('apikey')} />
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit" disabled={isWhoamiPending} startIcon={isWhoamiPending && <CircularProgress size={25} />}>
            Se connecter
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
