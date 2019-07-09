import React, { PureComponent } from 'react';

const accessDenied = () => {
        return (
            <div>
                <div id="denied-message-box">
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="denied-icon"></div>
                    </div>
                    <div>
                        <h1>You can't access this page</h1>
                    </div>
                </div>
            </div>
        )

}

export default accessDenied;