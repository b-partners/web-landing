import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';

export const ShareIcons = () => (
  <div className="share">
    <a href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noreferrer" aria-label="Partager sur Facebook">
      <Facebook fontSize="small" />
    </a>
    <a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" aria-label="Partager sur X">
      <Twitter fontSize="small" />
    </a>
    <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" aria-label="Partager sur LinkedIn">
      <LinkedIn fontSize="small" />
    </a>
  </div>
);
