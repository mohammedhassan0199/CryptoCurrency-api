import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import OurModel from './OurModel'

function Exchanges() {
    const[loading,setLoading]=useState(true)
    const[exchanges,setExchanges]=useState([])
  useEffect(()=>{
      const getExchangeData=async()=>{
        const {data}= await axios.get(`${Baseurl}/exchanges`)
        console.log(data)
        setExchanges(data)
        setLoading(false)
      }
      getExchangeData()
  },[])

  return (
   <>
   
   {
    loading ? <Loader /> :  <>
    <Header/>
    <OurModel />
  </>
   }
    {
      exchanges.map((items,index)=>(
        <div key={index} className='flex justify-center items-center mt-16 px-[5%] sm:text-sm'>

        <div className='flex items-center w-1/4 justify-center'>
            <img src={items.image} alt="" className='w-20 sm:w-10'/>
        </div>
  
        <div className='w-1/4 flex justify-center'>
            {items.name}
        </div>
  
        <div className='flex items-center w-1/4 justify-center'>
            {items.trade_volume_24h_btc.toFixed(0)}
        </div>
  
        <div className='w-1/4 flex justify-center'>
          {items.trust_score_rank}
        </div>
  
      </div>
      ))
    }
   </>
  )
}

export default Exchanges