import React, { PureComponent } from 'react';

const notFound = () => {
        return (
            <div style={{backgroundColor: '#707c90'}}>
                <div id="denied-message-box">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="denied-icon"></div>
                    </div>
                    <div style={{paddingTop: '100px', paddingBottom: '50px'}}>
                        <h1>Not Found</h1>
                    </div>
                </div>
            </div>
        )

}

export default notFound;