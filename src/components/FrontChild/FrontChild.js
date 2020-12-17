import React from 'react';
import { Link } from 'react-router-dom';
import './FrontChild.css'

const FrontChild = ({data}) => {
    return (
      <div className="col-md-12 ">
        
          <div class="card mb-5 container" style={{maxWidth: "540x"}}><Link to={`/booking/${data.id}`}className="ml-3 pl-3 d-flex  justify-content-center" style={{textDecoration:"none", textAlign: "center",font:"initial"}}>
  <div class="row card-container g-0">
    <div class="col-md-5 image-front">
      <img src={data.img}alt="..."/>
    </div>
    <div class="col-md-7 all-container ">
      <div class=" ml-3 mt-2 row pr-5 pb-5 d-flex">
          <div className=" col-md-7 pl-3  d-flex  flex-column">
        <h2 class="card-title  text-dark">{data.name}</h2>
   <p className="pt-5 pl-5 ml-4"><i class="fas fa-phone icon"></i> <b className="text-dark">Phone:</b><span className="text-secondary"> {data.phone}</span>
   <br/><span className="ml-4"><i class="fas fa-map-marker-alt icon"></i><b className="text-dark">Address:</b><span className="text-secondary address">{data.address}</span></span>
   <br/><span><b className="text-dark"> vote: </b><img  className="mt-2" src={data.vote}/></span></p>
        
       

        </div>
        <div className="col-md-5 mx-auto my-auto">
            <button className="btn btn-primary justify-content-center">View Details</button>
        </div>
      </div>
    </div>
  </div>
  </Link>
</div>
        </div>
    );
};

export default FrontChild;