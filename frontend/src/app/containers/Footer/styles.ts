import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    bottom: '0',
    position: 'initial',
    maxWidth: '100vw',
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    padding: '1rem',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },

  logo: {
    width: '-webkit-fill-available',
  },

  introduce: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  facebookIcon: {
    fontSize: '2.2rem !important',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem !important',
    },
    cursor: 'pointer',
    '&:hover': {
      color: '#3B5998',
    },
  },

  twitterIcon: {
    fontSize: '2.2rem !important',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem !important',
    },
    cursor: 'pointer',
    '&:hover': {
      color: '#1DA1F2',
    },
  },

  youtubeIcon: {
    fontSize: '2.2rem !important',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem !important',
    },
    cursor: 'pointer',
    '&:hover': {
      color: '#FF0000',
    },
  },
}));

export default useStyles;
