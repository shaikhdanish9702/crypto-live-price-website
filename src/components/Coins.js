import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import {Link} from 'react-router-dom'


const Coins = ({ data, search }) => {
    

    return<>
        <div className='right'>
            {data.filter((data) => {
                if (search === "") {
                    return data;
                } else if (data.name.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                    return data
                } 
            }).map((data, index) => {
                return (
                    <Link  to={`/home/${data.market_cap_rank}/${data.name}`}  >
                        <div key={data.name} className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data.image} alt='' />
                        </div>
                        <div>
                            <h5>{data.name}</h5>
                            <p>₹{data.current_price.toLocaleString()}</p>
                        </div>

                        {data.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
                    </div>
                    </Link>
                )
            })}
            {
                // data.map((data, index) => {
                
                //         return 
                //     })
                    }
                    
        </div>
        </>
}
export default Coins