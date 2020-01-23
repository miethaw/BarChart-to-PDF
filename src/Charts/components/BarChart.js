import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const InventoryBar = (props) => {
    const {data} = props;
    let max =0;
    data.forEach(cd => {
        if(cd.Amount > max){
            max = cd.Amount;
        }
    });
    //console.log('Max -> ',max);
        
    return(
        <div className="container" style={{ height:500, width:600}}>
<ResponsiveBar
        data={data}
        keys={["Amount"]}
        indexBy= { Data => JSON.stringify(Data)}
        tooltip={({ id, value, color,data }) => (
            <strong style={{ color }}>
              {id}: {value} <br />
              Unit:{data.Unit} <br />
              Quantity:{data.Qty} <br />
              Product:{data.Product}
            </strong>
          )}
          theme={{
            tooltip: {
              container: {
                //background: "black",
               //  width: 250
               //height: 145
              }
            }
          }}
        margin={{ top: 30, right: 20, bottom: 100, left: 127 }}
        padding={0.3}
        maxValue={max+22000000}
        layout="horizontal"
        colors={{ scheme: 'category10' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            legendPosition: 'middle',
            legendOffset: 52,
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -40
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
            renderTick: CustomTick
        }}
        enableGridX={true}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'column',
                justify: false,
                translateX: 20,
                translateY: 75,
                itemsSpacing: 2,
                itemWidth: 120,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 10,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    
    </div>
    )
    
    }

export default InventoryBar;

const CustomTick = (tick) => {
    const value = JSON.parse(tick.value)
    return (
        <g transform={`translate(${tick.x},${tick.y})`} >
            {/* <rect x={-146} y={-31} width={145} height={60} fill="white" stroke="lightgray" strokeWidth="1" /> */}
            <text
                className="txtIndex"
                transform="rotate(270)"
                textAnchor="middle"
                dominantBaseline="middle"
                glyphOrientationVertical="0"
                style={{ fill: '#333', fontSize:11}}
            >
                <tspan x="0" y="-120" dy="0em" textAnchor="middle"  >{value.Qty}</tspan>
                <tspan x="0" y="-119" dy="1.4em" textAnchor="middle">{value.Unit}</tspan>
            </text>
            <text
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: '#333', fontSize:11 }}
            >
                <tspan x="-53" y="-30" dy="2.8em" textAnchor="middle">{value.Product}</tspan>
            </text>
        </g>
    )
}