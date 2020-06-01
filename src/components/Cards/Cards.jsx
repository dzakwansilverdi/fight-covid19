import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup';

import styles from './Cards.module.css'

const Cards =({data})=>{

    if(typeof data === 'undefined'){
        return ("No Data")
    }else if(!data.confirmed){
        return ("Loading")
    }else{
        return(
            <div className={styles.container}>
                <Grid container spacing={2} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={styles.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>infected</Typography>
                            <Typography variant="h5" color="primary">
                                <CountUp start={0} end={data.confirmed} duration={2} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(data.date).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={styles.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5" color="inherit">   
                                <CountUp start={0} end={data.recovered} duration={2} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(data.date).toDateString()}</Typography>
                            <Typography variant="body2">Number of recovery from COVID-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={styles.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5" color="error" > 
                                <CountUp start={0} end={data.deaths} duration={2} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(data.date).toDateString()}</Typography>
                            <Typography variant="body2">Number of Death caused by COVID-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
        }    

   
}

export default Cards;