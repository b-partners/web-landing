import { ThemeOptions, createTheme } from '@mui/material';

const important = (value: any) => `${value} !important`;

export const BP_COLOR = {
  2: '#ab005650',
  MuiSideBar: {
    styleOverrides: {
      root: {
        closeWidth: 100,
      },
    },
  },
  5: '#ab0056',
  10: '#7A003D',
  20: '#660033',
  30: '#582d37',
  40: '#F1E4E7',
  solid_grey: 'rgb(0, 0, 0, 0.05)',
};

export const BP_THEME: ThemeOptions = {
  palette: {
    background: {
      default: '#fafafb',
    },
    primary: {
      light: '#ab0056',
      main: '#ab0056',
      dark: '#7A003D',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6ec6ff',
      main: '#2196f3',
      dark: '#0069c0',
      contrastText: '#fff',
    },
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
              backgroundColor: `${BP_COLOR['10']}dd`,
              cursor: 'pointer',
            },
            '&:disabled': {
              backgroundColor: BP_COLOR.solid_grey,
            },
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
};

export const theme = createTheme(BP_THEME);
export const heroFontSize = {
  xs: '30px',
  md: '35px',
  lg: '38px',
  xl: '46px',
};
