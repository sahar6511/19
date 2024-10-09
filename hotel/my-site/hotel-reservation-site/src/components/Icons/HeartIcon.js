import React from 'react';
import { FaHeart } from "react-icons/fa6";
import '../../styles/main.scss'
const HeartIcon = (props) => {
  return (
    <div>
      
      <FaHeart onClick={props.handleLikeDislikeClick}  className={props.like ? "like" : "dislike"}>
       
      
      </FaHeart>
    </div>
  )
}

export default HeartIcon
