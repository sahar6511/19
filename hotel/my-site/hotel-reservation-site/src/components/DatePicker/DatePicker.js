
import { DtPicker } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import React, { useState, useEffect } from "react";
import '../../styles/main.scss';
import Input from "../Input/Input";
import moment from "jalali-moment";
import { Link,useLocation } from "react-router-dom";


const DatePicker = () => {

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [days, setDays] = useState(0);
  const location = useLocation();
 
  const handleClickSearch=()=>{
  }


  // useEffect(() => {

  //   // if(startDate && endDate && endDate.day > startDate.day){
  //   //   setDays(endDate.day - startDate.day)
  //   // }
  //   // setStartDate({
  //   //   year: date.toLocaleDateString("fa-IR", { year: "numeric" }),
  //   //   month: date.toLocaleDateString("fa-IR", { month: "numeric" }),
  //   //   day: date.toLocaleDateString("fa-IR", { day: "numeric" }),
  //   // });

  // }, [startDate][endDate]);







   // const m =moment('1365/01/24', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
   const date = '1366/01/11';
   const mydate ='1366/01/10';
  const  m = moment.from(date, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
  const mm = moment.from(mydate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
  const d1 = Date.parse(m);
  const d2 = Date.parse(mm);
  
  // console.log(m);
  // console.log(mm);
  // var date1 = new Date(date);
  // var date2 = new Date(mydate);
  // console.log(date1);
  // console.log(date2);

  // const total =
  //           Date.parse(e) - Date.parse(new Date());
  //       const seconds = Math.floor((total / 1000) % 60);
  //       const minutes = Math.floor(
  //           (total / 1000 / 60) % 60
  //       );

  const date1 = new Date(d1 - d2);
  // console.log(date1)



//   if (d1 > d2) {
//    console.log("Error!");
   
//  }
  

  


  return (
    <div className="dtpicker">
    



      <div className="dtpicker-right"> 

     
      <DtPicker
        onChange={setStartDate}
        local="fa"
        clearBtn="true"
        isRequired="true"
        todayBtn="true"
        headerClass="custom-headr"
        inputClass='custom-input'
        initValue={startDate}
        placeholder="تاریخ ورود"
      />
      </div>
      <div className="dtpicker-center"> 

      <DtPicker
        onChange={setEndDate}
        local="fa"
        clearBtn="true"
        isRequired="true"
        todayBtn="true"
        headerClass="custom-headr"
        inputClass='custom-input'
        initValue={endDate}
        placeholder="تاریخ خروج"
      />
      </div>
      <div className="dtpicker-left">

      
      <Input type="text" disabled="disabled" value={`${days} شب`} />
      </div>
      <Link to="/onlinereservation" className="btn"  onClick={handleClickSearch}>جستجوی اتاق</Link>
    </div>
  );
};
export default DatePicker;
