import { Box, Input } from '@mui/material';

import { RoofDiagnosticsStyle } from './styles';

export const RoofDiagnostics = () => {
  return (
    <Box component="section" id="template-roof-diagnostics" sx={RoofDiagnosticsStyle}>
      <Box id="diagnostics-container">
        <Box className="content-text">
          <Input className="diagnostics-title" placeholder='Diagnostique toiture'></Input>
          <Input className="diagnostics-description" placeholder='Description 1'></Input>
          <Input className="diagnostics-description" placeholder='Description 2'></Input>
        </Box>
        <Box className="content-img">
          <Box className="image-container">
            <Input type="file"></Input>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
