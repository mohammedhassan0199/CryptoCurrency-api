import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import Header from './Header'
import { Link } from 'react-router-dom'


function Coins() {

  const[loading,setLoading]=useState(true)
    const[coins,setCoins]=useState([])
    const[search,setSearch]=useState('')
    const[currency,setCurrency]=useState('usd')
    const currencySymbol = currency === 'inr' ? '₹' : '$'
  useEffect(()=>{
      const getCoinsData=async()=>{
        const {data}= await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`)
        console.log(data)
        setCoins(data)
        setLoading(false)
      }
      getCoinsData()
  },[currency])

  return (
   <>
   
   {
    loading ? <Loader /> :<>
    
    <Header />
    <div>
      <input type="text" placeholder='Search your coin' className='h-8 w-80 xl:w-64 lg:w-60 md:w-56 absolute top-[1%] left-[35%] pl-4  xl:left-[30%] lg:left-[25%] text-black sm:top-[12%] sm:left-[2%] sm:w-[97%]' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
    <div className=' text-black text-base ml-[15%] lg:ml-[12%] md:ml-[8%] sm:ml-[2%]  sm:mt-12 '>
      <button className='h-8 w-20 rounded-lg ml-8 mt-16  bg-[orange] sm:ml-0' onClick={()=>setCurrency('inr')}>inr</button>
      <button className='h-8 w-20 rounded-lg ml-8 mt-16  bg-[orange] sm:absolute sm:right-[2%]' onClick={()=>setCurrency('usd')}>usd</button>
    </div>
    </>
   }

{
      coins.filter((data)=>{
        if(data=='')
          return data
        else if(data.name.toLowerCase().includes(search.toLocaleLowerCase()))
          return data
      }).map((coindata,index)=>(
    
      //  <Link to={`/coins/${coindata.id}`}>
       
       <div key={index} className='flex justify-between coindata-center mt-20 px-[5%]  sm:px-[2%]'>
  <div className='flex justify-center w-1/4'>
      <img src={coindata.image} className='w-20 sm:w-14'alt="" />
  </div>

  <div className=' text-xl flex items-center sm:text-sm  text-center justify-center w-1/4'>
      {coindata.name}
  </div>

  <div className='text-xl flex items-center sm:text-sm justify-center w-1/4'>
       {currencySymbol}{coindata.current_price}
  </div>

  <div className=' text-xl flex items-center sm:text-sm justify-center w-1/4' style={coindata.price_change_percentage_24h > 0 ? {color:'green'} : {color:'red'}}>
    
    { coindata.price_change_percentage_24h > 0 ? '+' + coindata.price_change_percentage_24h : coindata.price_change_percentage_24h}

          

  </div>

</div>
       
      //  </Link>
         
       
      ))
    }
   
   </>
    
  )
}


export default Coins