import { Box } from '@mui/material';

import { AinAuvergneRAlpesDirectory } from './Ain (Auvergne-R-Alpes)';
import { AisneHautsDeFrance } from './Aisne (Hauts-de-France)';
import { AllierAuvergneRAlpes } from './Allier (Auvergne-R-Alpes)';
import { AlpesMaritimes } from './Alpes Maritimes';
import { AlpesHautProvence } from './Alpes-Haut-Provence';
import { ArdecheAuvergneRAlpes } from './Ardeche (Auvergne-R-Alpes)';
import { AveyronOccitanie } from './Aveyron ( Occitanie )';
import { BouchesDuRhone } from './Bouches-du-Rhone';
import { HautesAlpes } from './Hautes-Alptes';
import { DirectoryListItem } from './directory-list-item';
import { directoryListStyles } from './styles';

export const DirectoryList = () => {
  return (
    <Box sx={directoryListStyles}>
      <DirectoryListItem title="Ain (Auvergne-R-Alpes)" zoneId="d1670139-a272-447b-9c18-061c3fef2442" roofers={AinAuvergneRAlpesDirectory} />
      <DirectoryListItem title="Aisne (Hauts-de-France)" zoneId="f4fadd67-45e6-4931-a654-714462f700a5" roofers={AisneHautsDeFrance} />
      <DirectoryListItem title="Allier (Auvergne R Alpes)" zoneId="f84496a9-ab89-4d9b-b09b-b3c94d476ea1" roofers={AllierAuvergneRAlpes} />
      <DirectoryListItem title="Ardeche (Auvergne-R-Alpes)" zoneId="b20b0e86-1bf8-4c27-9d87-5338ac5ab5c7" roofers={ArdecheAuvergneRAlpes} />
      <DirectoryListItem title="Alpes-Haut-Provence" zoneId="2c7f3b92-4341-460f-bedf-68eb0066e1f3" roofers={AlpesHautProvence} />
      <DirectoryListItem title="Hautes-Alpes" zoneId="b7221afa-1e34-4e36-bdc6-ac585917e2ba" roofers={HautesAlpes} />
      <DirectoryListItem title="Alpes Maritimes" zoneId="947e6020-e9e8-4ebe-abde-801c744ff2f8" roofers={AlpesMaritimes} />
      <DirectoryListItem title="Aveyron (Occitanie)" zoneId="4103ebbb-84e5-426a-adcd-1ec8d0027fc3" roofers={AveyronOccitanie} />
      <DirectoryListItem title="Bouches-du-Rhone" zoneId="c5fac599-e4fe-4c77-8c49-aa2f4c81c081" roofers={BouchesDuRhone} />
    </Box>
  );
};
