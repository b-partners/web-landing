import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCached } from '@/common/query';
import {
  Autocomplete,
  AutocompleteProps,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  MenuItem,
  SelectProps,
  Stack,
  TextField,
} from '@mui/material';

import { templateMenuStyle } from './components';
import { autocompleteJsonDataIndex } from './json-data';
import { TMode, useCheckApiKey, useTemplateGenStore } from './utils';

export const TemplateMenu = () => {
  useCheckApiKey();
  const { setJsonToEdit, mode, setMode, jsonToEdit } = useTemplateGenStore();
  const navigate = useNavigate();
  const [errorState, setErrorState] = useState(false);

  const handleChangeMode: SelectProps['onChange'] = (event) => setMode(event.target.value as TMode);
  const handleChangeJsonToEdit: AutocompleteProps<any, any, any, any>['onChange'] = (_event, value) => {
    setErrorState(false);
    setJsonToEdit(value);
  };
  const handleContinue = () => {
    const error = mode === 'edit' && !jsonToEdit;
    if (error) setErrorState(true);
    else navigate(`/templateGenerator?apikey=${getCached.apikey()}`);
  };

  return (
    <Box sx={templateMenuStyle}>
      <Card component="form">
        <CardHeader title="Menu" />
        <CardContent>
          <Stack gap={2}>
            <TextField select fullWidth label="Actions" value={mode} SelectProps={{ onChange: handleChangeMode }}>
              <MenuItem value="create">Création</MenuItem>
              <MenuItem value="edit">Modification</MenuItem>
            </TextField>
            {mode !== 'create' && (
              <Autocomplete
                disablePortal
                options={autocompleteJsonDataIndex}
                onChange={handleChangeJsonToEdit}
                fullWidth
                renderInput={(params) => (
                  <TextField error={errorState} helperText={errorState && 'Veuillez précisé la page à modifier'} {...params} label="À modifier" />
                )}
              />
            )}
          </Stack>
        </CardContent>
        <CardActions>
          <Button onClick={handleContinue} variant="contained">
            Continuer
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
