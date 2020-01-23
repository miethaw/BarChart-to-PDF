import React, { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import BarChart from './Charts/containers/BarChartContainer'
import LineChart from './Charts/containers/LineChartContainer'
import VerticalChart from './Charts/containers/VerticalChartContainer'

function App() {
  let timeoutId = null;
  useEffect(()=>{
     clearTimeout(timeoutId)
  },[]);

  const download = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.page=1;
    doc.setFontSize(28);
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(100, 102, 23,2);
    doc.rect(0, 0,600,900,"F");
    doc.setFont("Bowlby One SC")
    doc.text("**KUMO Solutions**",175,350);
    doc.setFontSize(20);
    doc.text("These Charts represent the Inventory Amount",115,450)
    doc.addPage();
    doc.setFontSize(12);
    doc.setTextColor(103, 128, 159, 1);
    doc.text("KUMO Solutions",10,20)
    doc.text("Page1",270,800)
    console.log(doc);

    const first = html2canvas(document.getElementById("first"));
    first.then(function(canvas) {
      console.log(canvas);
      var img1 = canvas.toDataURL("image/jpg");
      doc.addImage(img1,"JPG", -150, 100);
      doc.addPage();
      doc.setFontSize(12);
      doc.setTextColor(103, 128, 159, 1);
      
      doc.text("KUMO Solutions",10,20)
      doc.text("Page2",270,800)
      timeoutId=setTimeout(() => {
        SeconCanvas();
      },0);
    });

  
    const SeconCanvas = () => {
      const second = html2canvas(document.getElementById("second"));
      second.then(function(canvas) {
        var img2 = canvas.toDataURL("image/jpg");
        doc.addImage(img2,"JPG",  -150, 100);
        doc.addPage();
        doc.setFontSize(12);
        doc.text("KUMO Solutions",10,20)
        doc.text("Page3",270,800)
        timeoutId = setTimeout(() => {
            ThirdCanvas();
        },0);
        //doc.save("chart.pdf");
      });
     
    };

    const ThirdCanvas = () => {
      const third = html2canvas(document.getElementById("third"));
      third.then(function(canvas) {
        var img3 = canvas.toDataURL("image/jpg");
        doc.addImage(img3,"JPG", -150, 100);
        doc.save("chart.pdf");
      });
     
    };

  };

  return (
    <div className="container text-center" style={{paddingTop:'35px'}}>
      {/* <h1>Test</h1> */}
      <button className="btn-primary pt-3" style={{width:'100px', height:'40px'}} onClick={() => download()}>Create PDF</button>

      
        <div className='' id="first" style={{ height: 600}}>
          {/* <h2 className='text-center pt-3'>Inventory Amount </h2> */}
          <BarChart />
        </div>
        
        <div className='' id="second" style={{ height: 600}}>
        {/* <h2 className='text-center pt-3'>Inventory Amount </h2> */}
          <LineChart />
        </div>
        <div className='' id="third" style={{ height: 600 }}>
        {/* <h2 className='text-center pt-3'>Inventory Amount </h2> */}
          <VerticalChart />
        </div>
        
    </div>
  );
}
export default App;




// import React from 'react';
// import BarChart from './Charts/containers/BarChartContainer';
// import VerticalChart from './Charts/containers/VerticalChartContainer'
// import LineChart from './Charts/containers/LineChartContainer'
// import Pdf from 'react-to-pdf'

// function App() {
//   const ref = React.createRef();
//   const options = { orientation:'landscape', wrap:'true'};
//   return (
//     <div class="container">
//        <Pdf targetRef={ref} options={options} filename="chart.pdf">
//         {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
//       </Pdf>
//       <div style={{backgroundColor:'none', height:900, padding:0}} ref={ref}>
//         <VerticalChart />
//         <div className="d-flex flex-row">
//             <div className="col-lg-6">
//               <BarChart />
//             </div>
//             <div className="col-lg-6">
//               <LineChart />
//             </div>
//         </div>
       
        
//       </div>
//     </div>
    
//   );
// }

// export default App;
