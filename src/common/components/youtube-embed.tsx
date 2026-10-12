import { CSSProperties, useState } from 'react';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

type YouTubeEmbedProps = {
  /** Embed URL, e.g. https://www.youtube.com/embed/<id> (extra query params are kept). */
  src: string;
  title: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

const getVideoId = (src: string) => src.match(/(?:embed\/|youtu\.be\/|[?&]v=)([\w-]{11})/)?.[1];

const withAutoplay = (src: string) => {
  const url = new URL(src);
  url.searchParams.set('autoplay', '1');
  return url.toString();
};

/**
 * YouTube player that only loads when clicked: until then it shows the video thumbnail and a play button,
 * so the page doesn't download the ~1.5 MB YouTube player up front.
 */
export const YouTubeEmbed = ({ src, title, id, className, style }: YouTubeEmbedProps) => {
  const [active, setActive] = useState(false);
  const videoId = getVideoId(src);
  const boxStyle: CSSProperties = { position: 'relative', overflow: 'hidden', border: 'none', padding: 0, background: '#000', ...style };

  if (active || !videoId) {
    return (
      <iframe
        id={id}
        className={className}
        style={{ ...boxStyle, background: undefined }}
        title={title}
        src={active ? withAutoplay(src) : src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      id={id}
      className={className}
      style={{ ...boxStyle, cursor: 'pointer' }}
      onClick={() => setActive(true)}
      aria-label={`Lire la vidéo : ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        width={480}
        height={360}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 68,
          height: 48,
          borderRadius: 12,
          background: '#ff0000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PlayArrowRoundedIcon sx={{ color: 'white', fontSize: 40 }} />
      </span>
    </button>
  );
};
