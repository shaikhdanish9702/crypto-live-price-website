import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import {useParams} from 'react-router-dom'


export default function Crypto({ data }) {
    const { id ,name} = useParams();
   
  return (
      <div>
          
              
          {data.filter((data) => {
                if (data.market_cap_rank.toString().toLowerCase().includes(id.toString().toLowerCase()) && data.name.toString().toLowerCase().includes(name.toString().toLowerCase()) ) {
                    
                    return data
                }
            }).map((data) => {
                // console.log(val)
                return (
                    <>
                        <div className='center'>
                            <div className='center-border'>
                                <img src={data.image} />
                                <br />
                                <br/>
                                <br/>
                                <h2>Market Cap Rank:{data.market_cap_rank}</h2>
                                <br/>
                              <h1>Name:{data.name}</h1>
                           <br/>
                            {data.price_change_percentage_24h < 0 ? (
                            <h1 className='red'>
                                <FiArrowDown className='icon' />
                                {data.price_change_percentage_24h.toFixed(2)}%
                            </h1>
                        ) : (
                                <h1 className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data.price_change_percentage_24h.toFixed(2)}%
                                </h1>
                                )}
                                <br/>
                                <h2>Price:₹{data.current_price}</h2>
                                <br />
                                <h3>Total Volume:{data.total_volume}</h3>
                                <br />
                                <h3>24 hour high:{data.high_24h}</h3>
                                <br/>
                                <h3>24 hour low:{data.low_24h }</h3>
                                <br/>
                            <h2>Supply:{data.total_supply}</h2>
                            </div>
                            </div>
                    </>
                )
            })}
      </div>
  )
}
