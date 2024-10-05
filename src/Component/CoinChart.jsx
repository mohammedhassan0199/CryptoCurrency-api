// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Baseurl } from './baseUrl'
// import { useParams } from 'react-router'

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );


// function CoinChart() {
//  const[chartData,setChartData] =useState([])
//  const[days,setDys]=useState(1)
// const{id}=useParams
//   const CoinDataChart = async()=>{
//     try{
//       const{data} =await axios.get(`${Baseurl}/coins/${id}/market_chart?vs_currency=${currency}inr&days=${days}`)
//     setChartData(data.prices)
//     console.log(data.prices)
//     }
//   catch(error){
//     console.log(error)
//   }
//   }
//   useEffect(()=>{
//     CoinDataChart()
//   },[currency ,id ,days])
//   const myData={
//     labels:chartData.map((value)=>{
//      const date = new Date(value[0])
//      let days
//      const time = date.getHours()>12
//      ? `${date.getUTCHours()-12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()}AM`
//      return days ===1 ? time : date.toLocaleDateString()
//      console.log(value)
//     }),
//     datasets:{
//       labels:`Price in Past Days ${days} in ${currency}`,
//       data:  chartData.map((value)=>value[1]),
//       borderColor : "orange",
//       borderWidth: '3'
//     }
    
//   }
//   return (
//    <>
//    <Line data={myData} options={{
//     elements:{
//       point:{
//         radius:1,
//       }
//     }
//    }} style={{width:'6rem'}}/>
//    </>
//   )
// }

// export default CoinChart