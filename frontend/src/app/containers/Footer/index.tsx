import {
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import useStyles from './styles';
import {
  YouTube,
  Facebook,
  Twitter
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import paths from 'paths';

export default function Footer() {

  const year = new Date().getFullYear();

  const classes = useStyles();

  return (
    <div>
      <Divider variant='middle' />
      <footer className={classes.footer}>
        <Grid container columnSpacing={1}>
          <Grid xs={4} md={2}>
            <img src={require('app/assets/images/logo1.webp')} className={classes.logo} />
          </Grid>
          <Grid container xs={8} md={10}>
            <Grid container xs={2} md={3} sx={{ pl: { xs: '0.5em', md: '4em' } }}>
              <Grid xs={12}
                sx={{
                  borderLeft: 'solid #FF884B',
                  pl: '0.5rem',
                  pr: 0,
                  mx: '-1rem'
                }}
                fontSize='1.2em'
                fontWeight={900}
                height='fit-content'>
                Giới thiệu:
              </Grid>
              <Grid container rowGap={1}>
                <Grid xs={12}>
                  <Link to='/information' className={classes.introduce}>
                    Thông tin
                  </Link>
                </Grid>
                <Grid xs={12}>
                  <Link to='/policy' className={classes.introduce}>
                    Chính sách
                  </Link>
                </Grid>
                <Grid xs={12}>
                  <Link to='/support' className={classes.introduce}>
                    Hỗ trợ
                  </Link>
                </Grid>
                <Grid xs={12}>
                  <Link to='/address' className={classes.introduce}>
                    Địa chỉ
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={2} md={3} sx={{ pl: { xs: '0.5em', md: '4em' } }}>
              <Grid xs={12}
                sx={{
                  borderLeft: 'solid #FF884B',
                  pl: '0.5rem',
                  pr: 0,
                  mx: '-1rem'
                }}
                fontSize='1.2em'
                fontWeight={900}
                height='fit-content'>
                Danh sách trang
              </Grid>
              <Grid container rowGap={1}>
                <Grid xs={12}>
                  <Link to='/' className={classes.introduce}>
                    Trang chủ
                  </Link>
                </Grid>
                <Grid xs={12}>
                  <Link to={paths.BookTicketPage} className={classes.introduce}>
                    Trang đặt vé
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid container xs={8} md={6} justifyContent='flex-end'>
              {`Copyright © Introverts ${year}`}
              <Grid xs={12} alignSelf='flex-end'>
                <Grid container xs={6} sm={6} md={4} lg={2}
                  sx={{ float: 'right' }}
                  direction='row'>
                  <Grid xs={12}
                    sx={{
                      borderLeft: 'solid #FF884B',
                      pl: '0.5rem',
                      ml: '0.5rem',
                    }}
                    fontWeight={900}>
                    Liên hệ:
                  </Grid>
                  <Grid xs={4}>
                    <Link to='/facebook'>
                      <Facebook className={classes.facebookIcon} />
                    </Link>
                  </Grid>
                  <Grid xs={4}>
                    <Link to='/twitter'>
                      <Twitter className={classes.twitterIcon} />
                    </Link>
                  </Grid>
                  <Grid xs={4}>
                    <Link to='/youtube'>
                      <YouTube className={classes.youtubeIcon} />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </footer>
    </div >
  )
}
