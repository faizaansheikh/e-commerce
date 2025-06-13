import { Col, Row } from "antd";
import Appbar from "./components/Appbar";
import Card from "./components/Card";
import Carousal from "./components/Carousal";
import FProducts from "./components/FProducts";

export default function Home() {
  return (
    <>

      <Carousal />
      <hr />
      <h1 className="text-center text-4xl" style={{ marginTop: '80px' }}>Featured collection</h1>
     
    
      
        <div className="flex justify-evenly items-center flex-wrap p-4">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
     
     <h1 className="text-center text-4xl" style={{ marginTop: '80px',borderTop:'3px solid lightgrey',borderBottom:'3px solid lightgrey' }}>Featured Products</h1>
     
    
      
        <div className="flex justify-evenly items-center flex-wrap p-4">
          <FProducts postion={1}/>
          {/* <FProducts postion={2}/>
          <FProducts postion={3}/> */}
        </div>
    </>
  );
}
