import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import './SecondPageHome.css'

const SecondPageHome = () => {
       
const {userId}=useParams()
const matching= FakeData.find(data=>data.id==userId)
    return (
        <div style={{overflow:'hidden'}}>
            <div class="card  bg-white container  card-second">
  <img src={matching.img} class="card-img second-img" alt="..."/>
  <div class="card-img-overlay pl-5">
    <h1 class="card-title text-white ml-3 ">{matching.name}</h1>
    <h4 class="card-text text-white pt-3"> <i class="fas fa-phone icon-second"></i>{matching.phone}</h4>
    <p class="card-text text-white"><i class="fas fa-map-marker-alt icon-second"></i> {matching.address}</p>
  </div>
  <div className="card-body text-black">
      <div className="row">
          <div className="col-md-4 my-auto"><h2 className="ml-3"><u>Services</u></h2>
          <p>{matching.service}</p></div>
          <div className="col-md-4"><h2><u>Features</u></h2>
          <p>{matching.features}</p></div>
          <div className="col-md-4"><h2><u>More Information</u></h2>
          <p>{matching.otherInfo}</p></div>
      </div>
    
  </div>
</div>
        </div>
    );
};

export default SecondPageHome;