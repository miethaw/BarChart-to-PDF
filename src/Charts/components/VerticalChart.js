import React from "react";
import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = props => {
  const { data} = props;
   console.log("Data===",data);

   let max=0;
   data.forEach(i=>{
       if(i.Amount > max){
           max= i.Amount;
       }
   });
   
  return (
    // <div >
    <div className='container justify-content-center' style={{ width: 600, height: 500 }}>
      <ResponsiveBar
        data={data}
        
        keys={["Amount"]}
        indexBy={d => JSON.stringify(d)}
        tooltip={({ id, Unit, value, color,data }) => (
          <strong style={{ color }}>
              {id}: {value} <br />
              Unit:{data.Unit} <br />
              Quantity:{data.Qty} <br />
              Product:{data.Product}
            {/* <div className='d-flex flex-row'>
              <div className='col'>
                <p>{id}</p>
                <p>Unit</p>
                <p>Qty</p>
                <p>Product</p>
              </div>
              <div className='col'>
                <p>{value}</p>
                <p>{data.Unit}</p>
                <p>{data.Qty}</p>
                <p>{data.Product}</p>
              </div>
              
            </div> */}
          </strong>
        )}
        theme={{
          tooltip: {
            container: {
              background: "white",
              
            }
          }
        }}
        margin={{ top: 30, right: 20, bottom: 130, left: 70 }}
        padding={0.2}
        colors={{ scheme: "category10" }}
      
        defs={[
          {
            id: "gradientA",
            type: "linearGradient",
            colors: [
              { offset: 0, color: "inherit" },
              { offset: 250, color: "inherit", opacity: 0 }
            ]
          }
        ]}
        fill={[{ match: { id: "Amount" }, id: "gradientA" }]}
        borderColor={{ theme: "background" }}
        axisTop={null}
        axisRight={null}
        enableLabel={false}
        maxValue={max+ 30000000}
      
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          renderTick: CustomTick
          // legend: 'Amount',
          // legendPosition: 'bottom',
          // legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0
          // legend: 'food',
          // legendPosition: 'middle',
          // legendOffset: -40
        }}
        labelSkipWidth={10}
        labelSkipHeight={3}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom",
            direction: "column",
            justify: false,
            translateX: 0,
            translateY: 140,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 100,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
              {
                on: "hover",
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
  );
};

export default MyResponsiveBar;
const CustomTick = tick => {
  const value = JSON.parse(tick.value);
  // console.log("tick: ", value)
  return (
    <g transform={`translate(${tick.x},${tick.y + 12})`}>
      <text transform="rotate(-30)">
      <tspan
          // x="-120"
          y="-5"
          // dy="0em"
          textAnchor="end"
          style={{ fontSize:11}}
        >
          {value.Unit} {value.Qty}{value.Product}
        </tspan>

        
      </text>
     
    </g>
  );
};
