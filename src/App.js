import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Featured from './components/Features';
import Footer from './components/Footer';
import Contact from './components/Contact';
import axios from 'axios';
import Crypto from './components/Crypto';
import CurrentNews from './components/CurrentNews';
import NoMatch from './components/NoMatch';

function App() {
  const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=Inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    if (!data) return null
  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main topdata={ data} />} />
          <Route path='/Featured' element={<Featured coinsvisble={90} flag={false} />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Home/:id/:name' element={<Crypto data={data} />} />
          <Route path='/News' element={<CurrentNews />} />
          <Route path="/:id" element={ <NoMatch/>} />
        </Routes>

<Footer/>
</BrowserRouter>
    </>
  );
}

export default App;
