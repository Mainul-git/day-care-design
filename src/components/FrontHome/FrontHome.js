import React, { useState } from 'react';
import FrontChild from '../FrontChild/FrontChild';
import FakeData from"../FakeData/FakeData";
import './FrontHome.css'

const FrontHome = () => {
    const[daycare,setDaycare]=useState(FakeData)
    return (
        <div className="row contain-home">
            {
              FakeData.map(data=><FrontChild data={data}></FrontChild>)
            }
        </div>
    );
};

export default FrontHome;