import React from "react";
import { Modal} from 'antd';
import qrCode from '../img/qrcode002.png'
import barcode from '../img/barcode003.jpg'
import Cammera from '../components/Cammera'
import QrCode from "../components/qrCode"
import 'antd/dist/antd.css';
import "./main.css"

class Main extends React.Component { 
    state = {
        modal1Visible: false,
        modal2Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    render() {
        return (
        <div id="main">
                <button className="barcode" onClick={() => this.setModal1Visible(true)}>
                <img className="icone-barcode" src={barcode} />
                <br />
                <b>codigo de barras</b>
            </button>

            <br />
            <Modal
               visible={this.state.modal1Visible}
               onOk={() => this.setModal1Visible(false)}
               onCancel={() => this.setModal1Visible(false)}
               >
               <Cammera />
           </Modal>
           <Modal
               visible={this.state.modal2Visible}
               onOk={() => this.setModal2Visible(false)}
               onCancel={() => this.setModal2Visible(false)}>
               <QrCode />
           </Modal>
            <button className="barcode" onClick={() => this.setModal2Visible(true)}>
                <img className="icone-qrcode" src={qrCode} />
                <br />
                <b>QR CODE</b>
            </button>
        </div>
    )
    }

    

}
export default Main;