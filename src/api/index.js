import axios from 'axios';

const url = 'https://api.covid19api.com';

export const fetchData = async (country)=>{
    if (!country){
        country="indonesia"
    }
    try{
        const {data} = await axios.get(`${url}/total/country/${country}`);       
        const modifiedData = data.map((value)=>({
            confirmed: value.Confirmed,
            deaths: value.Deaths,
            recovered: value.Recovered,
            date: value.Date
        })).pop()  
        
        return modifiedData;

    }catch(error){
        console.log(error);
        
    }
}

export const fetchDailyData= async (country)=>{
    if (!country){
        country="indonesia"
    }
    try{
        const { data } = await axios.get(`${url}/total/country/${country}`);
        const modifiedData = data.map((dailydata)=>({
            confirmed: dailydata.Confirmed,
            deaths: dailydata.Deaths,
            date: dailydata.Date,
        }))
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchCountrylist= async()=>{
    try{
        const {data} = await axios.get(`${url}/countries`);
        return data.map((country)=>country.Slug).sort();
    }catch(error){
        console.log(error);
    }
}
