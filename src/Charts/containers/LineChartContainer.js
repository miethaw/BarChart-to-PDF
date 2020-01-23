import React, { Component } from 'react';
import axios from 'axios'
import Pdf from 'react-to-pdf'

import LineChart from '../components/LineChart' 

class LineChartContainer extends Component {
    
    constructor() {
       super();
      
       this.state = {
         x: "",
         y: "",
         data: [],
         AMT:[]
       }
     }

     componentDidMount() {
           axios.get(`http://192.168.100.112:7000/get`)
             .then((response) => {
               console.log("response: ", response.data.payload)
               this.setState({ AMT: response.data.payload.map(a => a.Amount)})
               this.setState({ data: response.data.payload.map(d => ({ x:[d.Qty, d.Unit,  d.Product],  y: d.Amount })) });
               console.log("data", this.state.data)
               console.log("Amt", this.state.AMT)
      
             });
      
      }

    render() {
       const { data } = this.state
       const { AMT } = this.state
       const chartData = [
         {
           id: "Amount",
           color: "hsl(88, 70%, 50%)",
           data
         }
       ]
        return (
            <div className='container'>
                {/* <div className="example-config pt-3 pl-2">
                <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => <button style={{fontSize:'15px', border:'1px solid #555', borderRadius:'3px',  backgroundColor:'#ffffff' }} onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                </div>
                <div ref={ref}> */}
                  <LineChart data={chartData} amtValue={AMT} />
                
            </div>
        );
    }
}
export default LineChartContainer
