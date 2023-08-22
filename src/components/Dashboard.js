import { Link } from 'react-router-dom'
import stocks from "../Data";
import styles from '../App.css'
function Dashboard() {
    // console.log(stocks)
    return (
        <div>
            <h1>Most active Stocks</h1>
            {
                stocks.map((stock, index) => {
                    const { name, symbol, lastPrice, change } = stock
                    return (
                        <div>
                            <Link to={`/Stocks/${symbol}`} key={index}>
                                <div className={styles.Stock}>
                                    <h3>{name}</h3>
                                    <p>{lastPrice}</p>
                                    <p>{change}</p>
                                </div>
                                <hr/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Dashboard;