import React from 'react';
import '../../styles/main.scss';

import { Link } from 'react-router-dom';
import WifiIcon from '../Icons/WifiIcon';
import BathIcon from '../Icons/BathIcon';
import BedIcon from '../Icons/BedIcon';

const RoomBox = (props) => {
  const {id,title,src,bed,bath,wifi,price} = props;
  return (
    <div className='room-box'>
      <div className='room-box--img'>
        <img src={src} alt={src}/>
        <div>{price}تومان </div>
      </div>
      <div className='room-box--title'>
        <h4>{title}</h4>
        <span>*****</span>
      </div>
    
        <ul className='room-box--icon'>
        <li><span>{wifi}</span><WifiIcon/></li>   
        <li><span>{bed}</span><BedIcon/></li>
        <li><span>{bath}</span><BathIcon/></li>
        </ul>

      
      <div className='room-box--info'>
      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
      </div>
      <div className='p-30'>
        <Link to ="/onlinereservation" className='btn'>جزییات بیشتر</Link>
      </div>
    </div>
  )
}

export default RoomBox