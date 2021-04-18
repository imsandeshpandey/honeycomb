import React from 'react';
import './Landing.css'
import 'antd/dist/antd.css';

function Landing() {
    return (
        <div className="landing">
            <div className="landing-elements">
            <h1 className="landing-title">Building Nepal's largest community of <span>Developers</span></h1>
            <p className="landing-description">Everyone needs some direction in life - and who better to ask than the people who've had the <b>same experience as you.</b></p>
            </div>
            <div className="landing-access">
                <p className="landing-access-text">
                    Join in to see what we are up to.
                </p>
                <div className=" noSelect landing-access-button">Request early access</div>
            </div>
        </div>
    )
}

export default Landing
