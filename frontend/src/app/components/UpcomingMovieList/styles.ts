import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '5rem 0 2rem 0 !important',
    padding: '0 !important',
    alignSelf: 'center',
    minWidth: '90%',
    [theme.breakpoints.down('md')]: {},
    '& .swiper-button-next, .swiper-button-prev': {
      color: '#FFD6A5',
    },
    '& .swiper-wrapper': {
      alignItems: 'center',
    },
  },

  movie: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    maxHeight: '-webkit-fill-available',
  },
}));

export default useStyles;
