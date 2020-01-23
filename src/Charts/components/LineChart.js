import React from 'react'

import { ResponsiveLine } from '@nivo/line'

const LineChart = ({data,amtValue}) => {
    console.log("DATA>>>",data)
    let MaxInitialValue=40000000
    const MaxReturn=amtValue.reduce((r,c)=>{
          return Math.max(r,c)
      },0)
      const a=MaxInitialValue+=MaxReturn
    console.log({a})
   
    return (
        
        <div className='container justify-content-center' style={{ height: 500, width: 600 }}>
            {/* <h5 style={{textAlign:'center', marginLeft:'20px', marginTop: '40px', marginBottom: '4px', paddingTop:'5px' }}>Inventory Amount</h5> */}
            <ResponsiveLine
                data={data}
                margin={{ top: 30, right:35, bottom: 153, left: 80 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min:0, max:`${a}`, stacked: true, reverse: false }}
                axisTop={null}
                enableGridX={false}
                enableArea={true} 
                enableCrosshair={false}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -50,

                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0

                }}
                colors={{ scheme: 'category10' }}
                pointSize={4}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'center',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 290,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 15,
                        symbolShape: 'diamond',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                enableSlices='x'
                sliceTooltip={({ slice }) => {
                 
                    return (
                        <div style={{
                            background: '#fff',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                            fontSize:'12px',
                        }}>
                            
                            {slice.points.map(point => (
                                <div
                                    key={point.id}
                                    style={{
                                        color:'black',
                                        padding: '3px 0',
                                    
                                    }}
                                >
                                    <strong>
                                        Amount : {point.data.y} <br />
                                        Quantity : {point.data.x[0]} <br />
                                        Unit : {point.data.x[1]} <br />
                                        Product : {point.data.x[2]}
                                    </strong>
                                   {/* <div className="row">
                                       <div className='col'><strong>Amount</strong></div>
                                       <div className='col'><strong>{point.data.y}</strong></div>
                                   </div>
                                   <div className="row">
                                       <div className='col'><strong>Qty</strong></div>
                                       <div className='col'><strong>{point.data.x[0]}</strong></div>
                                   </div>
                                   <div className="row">
                                       <div className='col'><strong>Unit</strong></div>
                                       <div className='col'><strong>{point.data.x[1]}</strong></div>
                                   </div>
                                   <div className="row">
                                       <div className='col'><strong>Product</strong></div>
                                       <div className='col'><strong>{point.data.x[2]}</strong></div>
                                   </div> */}
                        
                                </div>
                            ))}

                       </div>
                    )
                }}

            />
        </div>
    )
}
export default LineChart

