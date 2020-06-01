import React, {useEffect, useState} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData, fetchDailyData, fetchCountrylist} from './api';
import image from './static/img.png';

function App() {
  const [covidData, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [countryData, setCountryData] = useState([]);


  useEffect(()=>{
    fetch();
    fetchDaily();
    fetchCountry();
    changeCountry();
  },[])

  const fetch = async ()=>{
    const data = await fetchData();
    setData(data);
  }
  const fetchDaily = async ()=>{
    const data = await fetchDailyData();
    setDailyData(data);
  }
  const fetchCountry = async ()=>{
    const data = await fetchCountrylist();
    setCountryData(data);
  }

  const changeCountry = async (country)=>{
    const data = await fetchData(country);
    const daily = await fetchDailyData(country);
    setData(data);
    setDailyData(daily);
    // setCountry(country);
  }
 

  return (    
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID FIGHT"/>
      
      <Cards data={covidData}/> 
      <CountryPicker data={countryData} changeCountry={changeCountry}/>     
      <Chart dailydata={dailyData}/>
    </div>
  );
}

export default App;
