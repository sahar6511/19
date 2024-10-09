import React, { useState } from "react";
import '../../styles/main.scss';
import SearchPannel from "../SearchPanel/SearchPanel";
import Button from "../Button/Button";
import { useGetRoomsQuery } from "../redux/services/roomsApi";
import HeartIcon from '../Icons/HeartIcon';

const ShowRooms = () => {
  const { data: rooms, error, isLoding } = useGetRoomsQuery();
  const[like,setLike] = useState(false);
  // const handleLikeDislikeClick=(event)=>{
   
  //   setLike(!like);
  // }
  return (
    <div className="show-rooms">
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ? (

        <div>
          {rooms.map((room) => (
            <div key={room.id} id={room.id} className="show-rooms--container"> 
              <div className="show-rooms--container__img"><img src={room.img} /></div>
              <div className="show-rooms--container__info">
                <ul>
                  <li><h2>{room.title}</h2></li>
                  <li> <span> وضعیت: </span>{room.status}</li>
                  <li> <span> ظرفیت: </span>{room.capacity}</li>
                  <li><span>قیمت هر شب : </span>{room.price}ریال </li>
                  <li><span> امکانات: </span>{room.facilities}</li>
                </ul>
    {/* <button onClick={(event)=>handleLikeDislikeClick(event)} className={like ? "like" : "dislike"}>hello</button>
                
                  <HeartIcon onClick={handleLikeDislikeClick} like={like}></HeartIcon> */}
              <Button>رزرو اتاق</Button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );

  //   </div>
  // );
};

export default ShowRooms;
