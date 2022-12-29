import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  swiper: {
    maxWidth: '100%',
    height: 'fit-content',
    marginBottom: '1rem',
    '& .swiper-wrapper': {
      height: 'fit-content',
    },
    '& .swiper-button-next, .swiper-button-prev': {
      color: '#FFD6A5',
      [theme.breakpoints.down('sm')]: {
        '--swiper-navigation-size': '1.5em',
      },
    },
    '& .swiper-pagination-bullet-active': {
      backgroundColor: '#FFD6A5',
    },
  },

  banner: {
    maxHeight: '35vw',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    backgroundColor: 'transperant',
    color: '#fff',
    fontSize: '1em',
    '& .swiper-slide': {
      height: 'fit-content !important',
    },
    '& img': {
      maxWidth: '100%',
      objectFit: 'cover',
    },
  },
}));

export default useStyles;
