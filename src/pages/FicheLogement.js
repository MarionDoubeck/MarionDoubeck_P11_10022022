import React, {useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Carousel from '../components/ficheLogement/logementCarousel';
import Tags from '../components/ficheLogement/logementTags';
import Stars from '../components/ficheLogement/logementStars';
import Host from '../components/ficheLogement/logementHost';
import Description from '../components/ficheLogement/logementDescription';
import Equipments from '../components/ficheLogement/logementEquipments';
import Footer from '../components/Footer';
import LoadingPage from './LoadingPage';

const FicheLogement = () => {
  const [isLoading, setLoader] = useState(true)
  let navigate = useNavigate() 
  const{ logementId } = useParams()
  const [logement, setLogement] = useState({})

  useEffect(() => {
    const getData = async () => {
      await axios
      .get('../logements.json')
      .then((res) => {
        const lgmt = res.data.find((truc) => truc.id === logementId)
        if (lgmt === undefined) {
          navigate('../notFound', {replace: true})
        }else{
          setLogement(lgmt)
        }
      })
      .catch(err => console.log(err))
    }
    getData()
    setLoader(false)
  },[])

  if (!isLoading){
    if (logement.id !== undefined ){
      return (
        <div className="logement">
          <Header />
          <div className="logement-content">
            <div className="logementCarousel"><Carousel logement={logement} picNb={0}/></div>
            <div className="logementInfo">
              <div className="logementTitleLocation">
                <p className="logementTitle">{logement.title}</p>
                <p className="logementLocation">{logement.location}</p>
              </div>
              <div className="logementTags"><Tags logement={logement}/></div>
              <div className="logementHost"><Host logement={logement}/></div>
              <div className="logementStars"><Stars logement={logement}/></div>
            </div>
            <div className="logementDescriptionEquipments">
              <div className="logementDescription"><Description logement={logement}/></div>
              <div className="logementEquipments"><Equipments logement={logement}/></div>
            </div>  
          </div>
          <Footer />
        </div>
      )
    }else {
      return(
        <div></div>
      )
    };
  }else{
    return(
      <div>
        <LoadingPage />
      </div>
    )
  }
}

export default FicheLogement;

