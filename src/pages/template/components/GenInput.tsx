import { ChangeEventHandler, FC, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Close, Delete, Remove, X } from '@mui/icons-material';
import { Alert, Box, Button, CircularProgress, DialogActions, DialogContent, DialogTitle, Input, InputProps, Typography } from '@mui/material';
import { useDialog } from '@store/dialog';

import { useUploadImage } from '../utils/image-queries';
import { uploadFileDialogStyle } from './styles';

export const GenInput: FC<InputProps> = (props) => {
  const { setValue, getValues } = useFormContext();
  const [state, setState] = useState(getValues(props.name));
  if (props.type === 'file') return <GetInputFile {...props} />;

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState(event.target.value);
  };

  const onBlur = () => {
    setValue(props.name, state);
  };

  return <Input onChange={onChange} onBlur={onBlur} value={state} {...props} />;
};

const GetInputFile: FC<InputProps> = (props) => {
  const { setValue } = useFormContext();
  const { open } = useDialog();
  const inputRef = useRef<HTMLInputElement>(null);
  const setFileId = (url: string) => setValue(props.name, url);

  const handleCancel = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files[0];
    open(<UploadFileDialog onCancel={handleCancel} setFileId={setFileId} file={file} />, { onClose: undefined });
  };

  return <Input onChange={onChange} inputRef={inputRef} {...props} />;
};

interface UploadFileDialogProps {
  file: File;
  setFileId: (url: string) => void;
  onCancel: () => void;
}

const UploadFileDialog: FC<UploadFileDialogProps> = ({ file, setFileId, onCancel }) => {
  const { close } = useDialog();

  const handleSuccess = (data: string) => {
    setFileId(data);
    close();
  };

  const handleClose = () => {
    onCancel();
    close();
  };

  const { isPending, mutate, error } = useUploadImage(handleSuccess);

  const handleClick = () => {
    mutate(file);
  };

  return (
    <Box sx={uploadFileDialogStyle}>
      <DialogTitle>{file.name}</DialogTitle>
      <DialogContent>
        <Typography>Voulez vous vraiment utiliser cette image et l'enregistrer ?</Typography>
        {error && (
          <Alert icon={<Close />} color="error">
            {error.message}
          </Alert>
        )}
        <Box className="image-container">
          <img src={URL.createObjectURL(file)} alt="" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isPending} variant="contained">
          Annuler
        </Button>
        <Button variant="contained" onClick={handleClick} disabled={isPending} startIcon={isPending && <CircularProgress size={20} />}>
          Enregistrer
        </Button>
      </DialogActions>
    </Box>
  );
};
