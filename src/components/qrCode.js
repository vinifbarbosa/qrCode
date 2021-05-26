import React, { useState } from "react"
import "./qrCode.css"
import QrScan from 'react-qr-reader'

function QrCode() {
    const [qrscan, setQrscan] = useState('No result');
    
    const handleScan = data => {
        if (data) {
            setQrscan(data)
           
        }
    }
    const handleError = err => {
        console.error(err)
    }

    return (
        <div>
            <center>
                <div style={{ marginTop: 30 }}>
                    <QrScan
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: 240, width: 320 }}
                    />
                </div>
            </center>

            <textarea
                style={{
                    fontSize: 18,
                    width: 315,
                    height: 80,
                    marginTop: 88,
                    marginBottom:50
                  
                }}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}

            />

        </div>
    );
}
export default QrCode;
