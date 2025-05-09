import { createTheme } from '@mui/material';

import { PALETTE_COLORS } from './theme';

const important = (value: any) => `${value} !important`;

export const BP_COLOR = {
  2: '#ff521b50',
  MuiSideBar: {
    styleOverrides: {
      root: {
        closeWidth: 100,
      },
    },
  },
  5: '#ff521b',
  10: '#ff521b',
  20: '#ff521b',
  30: '#ff521b',
  40: '#ff521b',
  50: '#ff521b',
  solid_grey: 'rgb(0, 0, 0, 0.05)',
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2200,
    } as any,
  },
  palette: {
    background: {
      default: '#fafafb',
    },
    primary: {
      light: PALETTE_COLORS.neon_orange,
      main: PALETTE_COLORS.neon_orange,
      dark: PALETTE_COLORS.neon_orange,
      contrastText: PALETTE_COLORS.white,
    },
    secondary: {
      light: PALETTE_COLORS.pine,
      main: PALETTE_COLORS.pine,
      dark: PALETTE_COLORS.pine,
      contrastText: PALETTE_COLORS.pine,
    },
  },
  typography: {
    allVariants: { color: PALETTE_COLORS.black },
    fontFamily: ['"Kumbh Sans"', 'sans-serif'].join(','),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none',
        },
        elevation2: {
          boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.06) !important',
        },
        elevation3: {
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1) !important',
        },
        root: {
          border: '1px solid #ebebeb',
          backgroundClip: 'padding-box',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: BP_COLOR[2],
        },
        barColorSecondary: {
          backgroundColor: BP_COLOR[5],
          color: BP_COLOR[5],
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 50,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.MuiTableCell-head': {
            backgroundColor: BP_COLOR[10],
            color: 'white',
            '.MuiCheckbox-root': {
              color: '#fff',
            },
            '.Mui-active': {
              color: '#fff',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          borderRadius: '100px',
          fontWeight: 'bold',
          paddingBlock: '0.7rem',
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            backgroundColor: BP_COLOR[5],
            boxShadow: `1px 1px 5px #00000020`,
            '&:hover, &:active': {
              backgroundColor: `${PALETTE_COLORS.neon_orange}dd`,
              cursor: 'pointer',
            },
            '&:disabled': {
              backgroundColor: BP_COLOR.solid_grey,
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            fontWeight: 500,
          },
        },
      ],
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .Mui-checked': {
            color: important(BP_COLOR[10]),
            '& +.MuiSwitch-track': {
              backgroundColor: important(BP_COLOR[40]),
              opacity: 1,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& 	.MuiTabs-indicator': {
            backgroundColor: BP_COLOR[5],
          },
          '& .Mui-selected': {
            color: important(BP_COLOR[10]),
          },
          borderBottom: `1px solid ${BP_COLOR.solid_grey}`,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: important(BP_COLOR[5]),
          },
        },
      },
    },
  },
});
