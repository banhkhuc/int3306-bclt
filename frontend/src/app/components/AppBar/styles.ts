import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    color: 'white !important',
    maxHeight: '4rem',
    minHeight: '3rem',
    zIndexL: 11,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse !important',
    },
  },

  toolBar: {
    display: 'flex',
    color: 'white',
    paddingLeft: '1rem !important',
    justifyContent: 'center',
    alignItems: 'stretch !important',
  },

  logo: {
    objectFit: 'cover',
    maxHeight: '-webkit-fill-available',
    maxWidth: '-webkit-fill-available',
    marginLeft: 20,
    paddingTop: 4,
    paddingBottom: 4,
  },

  logoButton: {
    left: 0,
    height: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '3rem',
    },
    padding: '0 !important',
    zIndex: 'inherit',
  },

  button: {
    maxWidth: '18vw',
    minWidth: 'min(14rem, 18vw) !important',
    minHeight: '100%',
    fontSize: '1em !important',
    margin: '0 2rem !important',
    transition: '0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  buttonLink: {
    textDecoration: 'none',
    color: 'inherit !important',
    height: 'auto',
  },

  listButton: {
    maxWidth: '13rem',
    minWidth: '13rem !important',
    fontSize: '1em !important',
    transition: '0.35s !important',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  buttonText: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  loginButton: {
    fontSize: '1em !important',
    right: '1em',
    height: '4rem',
  },

  menuButton: {
    height: '3rem',
    width: 'fit-content',
    transition: '0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  menuItem: {
    overflow: 'hidden',
    backgroundColor: '#1D1C1A',
    '& .MuiTreeItem-label': {
      lineHeight: '2.5 !important',
    },
  },

  accountButton: {
    right: '2.25em',
    height: '4rem',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  optButton: {
    right: 0,
    height: '4rem',
  },

  optItems: {
    transition: '0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  movieMenu: {
    top: '5rem',
    backgroundColor: theme.palette.secondary.main,
    position: 'static',
    color: 'white',
    '&button': {
      height: '2rem !important',
    },
  },

  icon: {
    fontSize: '3rem !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem !important',
    },
  },
}));

export default useStyles;
