import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: '1rem !important',
    padding: '0 !important',
    alignSelf: 'center',
    maxWidth: '79% !important',
    '& .swiper-button-next, .swiper-button-prev': {
      color: '#FFD6A5',
    },
    fontSize: '1em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.5em',
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
