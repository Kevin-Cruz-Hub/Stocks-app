import stocks from "../Data";
import { useParams } from "react-router-dom";
function Stock(props) {
    const params = useParams()
    const { symbol } = params
    // console.log(props)



    const findStock = () => {
        for (let i = 0; i < stocks.length; i++) {
            let currStock = null

            // props.map((ele)=>{
            if (stocks[i].symbol === symbol) {
                currStock = stocks[i]
                console.log(currStock)
                return currStock
            }
            // console.log(currStock)

        }
    }
    const currStock = findStock()

    return (
        <div>
            <h1>{currStock.name}</h1>
            <div>
                <p>{currStock.symbol}: {currStock.high} | {currStock.low} | {currStock.change} | {currStock.lastPrice} | {currStock.open}</p>
            </div>
        </div>
    )
}
export default Stock;