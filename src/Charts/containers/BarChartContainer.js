import React, { useState, useEffect } from 'react'
import BarChart from '../components/BarChart'
import { DataFetcher } from '../../API/dataFetcher';

const BarChartContainer = props => {
  //pdfExportComponent;
  const  [chartData, setChartData] = useState([]);
  // const { height} = props;
  // const userStyle = {
  //   height: `${height === undefined ? 700 : height}`
  // };
  const data = chartData;
  const DataFetch = () => {
    DataFetcher((err, data) => {
      //console.log('Data => ',data.payload);
      setChartData(data.payload);
    });
  };

  useEffect(() => {
    DataFetch();
  }, []);
  console.log('chartData => ',chartData)

    return(
      
          <div >
                {/* <h3 className="text-center">Inventory Amount</h3> */}
                  <BarChart data={data}/>
            </div>
       
       
    );
}

export default BarChartContainer;

