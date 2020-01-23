import React,{ useState, useEffect } from 'react';
import {DataFetcher} from '../../API/dataFetcher'

import Chart from '../components/VerticalChart'

const ChartContainer =()=>{
const [chartData, setChartData]=useState([]);

const data=chartData;

console.log("ChartData",chartData);
    const DataFetch=()=>{
        DataFetcher((err,data)=>{
            setChartData(data.payload);
          
        });
    };
    useEffect(() =>{
        DataFetch();
    },[]);

    return(
        <div >
            {/* <h2 className="text-center">Inventory Amount</h2> */}
           <Chart data={data} />
        </div>
    )
}
export default ChartContainer
