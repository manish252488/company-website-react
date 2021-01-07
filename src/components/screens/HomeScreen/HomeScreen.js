import { Container, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import withReducer from '../../../store/withReducer';
import TopNavBar from '../../common/TopNavBar';
import reducer from './reducer/HomeScreen.reducer';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4)
    },
    paper: {
        height: 300,
        width: 300,
        cursor: "pointer",
        transition: '0.1s',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        overflow: 'hidden',
    },
    paperRoot: {
        padding: theme.spacing(2),
    },
    innerGrid: {
        justifyContent: 'flex-start',
    },
    header: {
        padding: theme.spacing(1),
        textTransform: 'capitalize',
        background: '#ddd'
    }
}))
const HomeScreen = (props) => {
    const classes = useStyles();
    const gridData = useSelector(state => state.gridData || [
        {
            title: 'profile',
            content: {
                image: "url('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')"
            }
        }])
    return <React.Fragment>
        <TopNavBar />
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container className={classes.innerGrid}>
                        {gridData.map((val, index) =>
                        (<Grid item className={classes.paperRoot}>
                            <Paper className={classes.paper} style={{
                                background: val.content.image
                            }}>
                                <Typography className={classes.header}>{val.title}</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>

                                        </ListItemAvatar>
                                        <ListItemText primary="some text" secondary="some text2" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </React.Fragment>
}
export default withReducer('HomeSceen', reducer)(HomeScreen);