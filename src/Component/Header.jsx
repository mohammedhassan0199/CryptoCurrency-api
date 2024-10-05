import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <>

        <div className='flex items-center justify-between bg-[rgb(22,20,20)] h-12 px-[15%] xl:px-[12%] lg:px-[10%] md:px-[8%] sm:px-[1%]' >

            
            <div className='flex items-center'>
                  <h1 className='text-2xl lg:text-xl sm:text-xl'>CryptoWorld</h1>
                  <FaEthereum color='orange' size={"25"}/>
                </div>
                  
                  <ul className='flex text-xl md:text-base lg:text-base sm:text-base justify-between'>
                    <li className='lg:ml-20 md:ml-16 sm:ml-8'><Link to='/'>Home</Link></li>
                    <li className='ml-60  md:ml-32 sm:ml-10 '><Link to='/coins'>Coins</Link></li>
                  </ul>

                    </div>
                  
      </>
  )
}

export default Header