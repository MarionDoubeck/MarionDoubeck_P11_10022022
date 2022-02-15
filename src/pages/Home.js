import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Background from '../media/background.png';
import Card from '../components/Card';
import Footer from '../components/Footer';
import LoadingPage from './LoadingPage';

const Home = () => {
  const [isLoading, setLoader] = useState(true)
  const [logementsList, setLogementsList] = useState([])
  useEffect(() => {
    getData()
    setLoader(false)
  },[])
  const getData = () => {
    axios
    .get('logements.json')
    .then((res) => setLogementsList(res.data))
    .catch(err => console.log(err))
  }
  if(!isLoading){
    return (
      <div className="home">
        <Header />
        <div className="home-content">
          <div className="intro">
            <img id="background" src={Background} alt="Kasa" />
            <p>Chez vous, partout et ailleurs</p>
          </div>
          
          <div className="gallery">
            {logementsList.map((logement) => (
              <Card logement={logement} key={logement.id}/>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }else{
    return(
      <div><LoadingPage /></div>
    )
  }  
};

export default Home;