import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'

const CountryPicker =({data,changeCountry})=>{
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="indonesia" onChange={(e)=>changeCountry(e.target.value)}>
                <option value="indonesia">(Default) indonesia</option>
                {data.map((country,i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;