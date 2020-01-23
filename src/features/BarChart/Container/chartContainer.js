import React,{ useState, useEffect } from 'react';
import {ChartFetcher} from '../../../api/chartFetcher'

import Chart from '../Components/barChart'

const ChartContainer =()=>{
const [chartData, setChartData]=useState([]);

const data=chartData;

console.log("ChartData",chartData);
    const ChartFetch=()=>{
        ChartFetcher((err,data)=>{
            
            setChartData(data.payload);
          
        });
    };
    useEffect(() =>{
        ChartFetch();
    },[]);

    return(
        <div style={{ width: '700px', height: 550 }}>
            <h2 className="text-center">Inventory Amount</h2>
           <Chart data={data} />
        </div>
    )
}
export default ChartContainer
