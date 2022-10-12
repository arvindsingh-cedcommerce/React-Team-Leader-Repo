import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, Chip, IconButton, Tab, Tabs, Typography } from '@mui/material';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import './leftBar.css'
import PropTypes from 'prop-types';
import { Heading } from '@shopify/polaris';
import { connect } from 'react-redux';
import Link from '@mui/material/Link';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', transform: 'scale(0.8)',fontSize:'3rem',color:'orange',mt:-3,mr:1 }}
  >
    •
  </Box>
);

function ContentPage(props) {
  const [user, setUser] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [loader, setLoader] = React.useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (props.data !== undefined) {
      setUser(props.data);
    }
  }, [props.data])

  const card = (
    <React.Fragment>
      <CardContent>
        <img id='img1' src={user.avatar_url} alt='' />
        <Typography variant="h4" component="div">{user.name}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">{user.login}</Typography>
        <Typography variant="body2">{user.bio}</Typography>
      </CardContent>
      <CardActions>
        <div className='btns'><div><Button>Follow</Button></div>
          <div> <Button>Sponser</Button></div>
        </div>
      </CardActions>
    </React.Fragment>
  );

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ minWidth: 275 }}>
            {props.data !== undefined ?
              <Card variant="outlined">{card}</Card>
              : null}
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label={<div className='icons'><p><LocalLibraryOutlinedIcon /><p>Overview</p></p></div>} {...a11yProps(0)} />
                  <Tab label={<div className='icons'><p><BackupTableOutlinedIcon /><p>Repositories</p></p></div>} {...a11yProps(1)} />
                  <Tab label={<div className='icons'><p><AssessmentOutlinedIcon /><p>Projects</p></p></div>} {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Box sx={{ border: '1px solid gray', height: '100%', padding: '20px' }}>
                  <Heading id='hd1'>Hi, I'm {user.login}</Heading>
                  <hr style={{ margin: '20px 0' }} />
                  <Box sx={{ height: 130, padding: '10px', marginBottom: '1rem', backgroundColor: '#f1e8ff' }}>
                    <Heading id='hd2'>{user.name}</Heading>
                    <p style={{ margin: '8px', fontSize: '1.3rem', color: 'gray' }}>{user.bio}</p>
                  </Box>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not ochanged. It was popularised in the 1960s with the release of Letra.
                  </span>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                {props.repo.length && props.repo.map((repo, index) => (
                  <>
                    <Box className='repo-links' sx={{ height: '7rem', padding: '3px' }}>
                      <div style={{ display: 'flex' }}><Typography variant='h5' sx={{ color: 'rgb(6, 108, 192)', fontWeight: 'bold',cursor:'pointer' }}>{repo.name}</Typography>
                        <Chip label={repo.visibility} size='small' variant="outlined" sx={{ marginLeft: '10px' }} /></div>
                        <Typography sx={{color:'gray',fontSize:'14px'}}>{repo.description}</Typography>
                        <div style={{display:'flex',marginTop:'5px'}}>
                          <Typography>{bull}</Typography>
                        <Typography>{repo.language}</Typography></div>
                    </Box>
                    <hr />
                  </>
                ))}
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Box sx={{border:'1px solid gray',pt:20,pb:5}}>
                  <Typography variant='h4' sx={{p:3}}>Sorry no projects have been created yet!</Typography>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(ContentPage);