import CurrentNews from './CurrentNews'
import Featured from './Features'
import './Main.css'


const Main = ({topdata}) => {

    return (
        <>
        <div className='Main'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurreny with Your CrypTo</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn btn-border' >Learn More</button>
                    </div>
                </div>
             
                </div>
            </div>
            <Featured topdata={topdata} coinsvisble={10} flag={true} />
            <hr/>
            <h1 className='news-heading'>Current News</h1><hr/>

            <CurrentNews />
            </>
    )
}

export default Main