import React from 'react';
import { GithubOutlined, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';
import'./CommunityCard.css'

function CommunityCard(props) {
    
    return (
        <div className="community-card">
            <div style={{backgroundImage:`url('${props.cover}')`}} className="community-card-cover">
                <img src="https://honeycomb.sh/images/wave.svg" alt="" className="community-card-cover-wave"/>
            </div>
            <div className="community-card-meta">
                <h3 className="community-card-meta-name">
                    {props.name}
                </h3>
                <p className="community-card-meta-description">
                {props.description}
                </p>

            </div>
            <div className="community-card-links">
                <a className="community-card-link" href="#" target="blank" >
                    <GithubOutlined/>
                </a>
                <a className="community-card-link" href="#" target="blank" >
                    <TwitterOutlined/>
                </a>
                <a className="community-card-link" href="#" target="blank" >
                    <LinkedinFilled/>
                </a>
            </div>
        </div>
    )
}

export default CommunityCard
