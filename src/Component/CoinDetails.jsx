import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from './baseUrl'
import { useParams } from 'react-router'
import Loader from './Loader'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'
import { IoPulseOutline } from 'react-icons/io5'
// import CoinChart from './CoinChart'




function CoinDetails() {
const[coin,setCoin]=useState([])
const[currency,setCurrency]=useState('usd')
const[loading,setLoading]=useState(true)
const currencySymbol = currency === 'inr' ? '₹' : '$'
  const{id}=useParams
  useEffect(()=>{
      const getCoins = async ()=>{
        try{
          const {data} =await axios.get(`${Baseurl}/coins/${id}`)
          console.log(data)
          setCoin(data)
          setLoading(false)
        }
        catch(error){
          console.log(error)
          setLoading(false)
        }
      }
      getCoins()
  },[])

  return (
   <>
   {
    loading ? <Loader /> : <>
    <div className='ml-[15%] lg:ml-[12%] md:ml-[8%] sm:ml-[2%] text-black text-base'>
      <button className='h-8 w-20 rounded-lg ml-3 mt-16  bg-[orange]' onClick={()=>setCurrency('inr')}>inr</button>
      <button className='h-8 w-20 rounded-lg ml-3 mt-16  bg-[orange]' onClick={()=>setCurrency('usd')}>usd</button>
    </div>
    
    <div className='flex justify-between '>

      <div className='flex justify-between coindata-center mt-20 flex-col'>
      <div  className=''>
    {coin.last_updated}
    </div>
    
    <div className='flex items-center my-10'>
      <img className='w-20 h-20' src={coin.image} alt="" />
    </div>

    <div className='mb-5'>
       {coin.name}
    </div>

    <div className='mb-5'>
     {currencySymbol} {coin}
    </div>

    <div className='mb-5'>
       {coin.price_change_percentage_24h>0 ?<BiSolidUpArrow color='green'/>  : <BiSolidDownArrow color='red'/> }

    </div>

    <div className='mb-5 flex items-center'>
      <IoPulseOutline color='orange'/>
      #{coin.market_cap_rank}
    </div>

    <div >
        {coin.desciription}
    </div>
      </div>

      {/* <CoinChart /> */}
    </div>
    </>
   }
   
   
   
   </>
  )
}

export default CoinDetails