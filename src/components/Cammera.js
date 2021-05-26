import React, { useState } from "react";
import Scanner from './Scanner';
import BarcodeService from '../services/BarcodeService'
import './Cammera.css'


function Cammera() {

  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);
  // const [salvar, setSalvar]  = useState(null);

  const service = new BarcodeService();

  /* this.setState({ result });
  service.salvar(result); */



  const onDetected = result => {
    setResult(result);
    if (result !== '') {
      setCamera(!camera);
      service.salvar(result);
    }
    console.log(result);
  };

/* salvar = (result) => {
    const service = new BarcodeService();
    setSalvar(result);
    service.salvar(result);
}
*/



  return (
    <div className="camera">
      <p><b>{result ? result : ""}</b></p>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}
export default Cammera;