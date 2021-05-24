import React, { useState } from "react"

import QrScan from 'react-qr-reader'

function App() {
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
                    width: 320,
                    height: 100,
                    marginTop: 100,
                    marginLeft: 20
                }}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}

            />

        </div>
    );
}
export default App;
