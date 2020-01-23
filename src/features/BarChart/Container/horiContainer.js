import React, { useState, useEffect } from 'react'
import BarChart from '../Components/horiChart.js'
import { ChartFetcher } from '../../../api/chartFetcher.js'
//import { PDFExport } from '@progress/kendo-react-pdf';

const BarChartContainer = props => {
  //pdfExportComponent;
  const  [chartData, setChartData] = useState([]);
  // const { height} = props;
  // const userStyle = {
  //   height: `${height === undefined ? 700 : height}`
  // };
  const data = chartData;
  const DataFetch = () => {
    ChartFetcher((err, data) => {
      //console.log('Data => ',data.payload);
      setChartData(data.payload);
    });
  };

  useEffect(() => {
    DataFetch();
  }, []);
  console.log('chartData => ',chartData)

    return(
        <div>
            <div style={{ width:700, height: 500}}>
                {/* <h3 className="text-center">Inventory Amount</h3> */}
                  <BarChart data={data}/>
            </div>
        </div>
    );
}

export default BarChartContainer;

