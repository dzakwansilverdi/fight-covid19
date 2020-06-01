import React from 'react';
import {Line} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart =({dailydata})=>{
    
    const LineChart = (
        <Line 
            data={{
                labels: dailydata.map(({date})=>date),
               
                datasets: [
                    {
                        data: dailydata.map(({confirmed})=>confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },
                    {
                        data: dailydata.map(({deaths})=>deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true,
                    }],

                
            }}

            options={{scales: { xAxes: [{ display: false, }],
                               // yAxes: [{ display: false, }]
                    },}}
        />
    )
    if(typeof dailydata === 'undefined'){
        return ("No Data")
    }else{
        return(
            <div className={styles.container}>
                {LineChart}
            </div>
    )}
}

export default Chart;