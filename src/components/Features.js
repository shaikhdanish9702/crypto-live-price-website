import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Features.css'
import Coins from './Coins'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import TopTenCrypto from './TopTenCrypto'

const Featured = ({coinsvisble,flag,topdata}) => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=Inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            let set = new Set();
     while (set.size < coinsvisble) {
                let s = Math.floor(Math.random() * 99);
         set.add(s);
            }
            let arr=[]
            for (let i of set) {
                arr.push(response.data[i]);
            }
            setData(arr);        
        }).catch((error) => {
            console.log(error)
        })
    }, [coinsvisble])

    if (!data) return null
    
    return (
        <div className='featured'>
            
            
            <div className={flag ?"container grid":"container"}>
                {
                    flag &&<div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <Link  to="/Featured"  className='btn'>See More Coins</Link>
                </div>
                }
                {!flag && <SearchBar setData={setSearch} data={search } />}
                
                <Coins data={data} search={search} />
                {flag && <TopTenCrypto topdata={ topdata} />}
                
            </div>

        </div>
    )
}

export default Featured