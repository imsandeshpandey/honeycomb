import React from 'react'
import './Community.css'
import CommunityCard from './CommunityCard'

function Community() {
    return (
        <div className="community">
            <div className="community-header">
            <h3 className="community-text">
                Inside the community
            </h3>
            <hr/>
            </div>
            <div className="community-card-container">
                {devs.map((data, index)=><CommunityCard key={index} name={data.devName} description={data.devDescription} cover={data.devCover}  />)}
            </div>
            <div className="community-footer">
            <h3 className="community-text">
            and many more 🥳 . . .
            </h3>
            </div>
        </div>
    )
}

export default Community;


const devs =[
    {
        devIndex:1,
        devName :'Robus Gauli',
        devDescription:'Principal Engineer @lftechnology. 2.718281 ^ (√-1 * 3.14) + 1 = 0',
        devCover:'https://honeycomb.sh/user/robus_gauli.png'

    },
    {
        devIndex:2,
        devName :'Sandesh Pandey',
        devDescription:'Programming aauxa halka fulka tei ho',
        devCover:'https://scontent.fbhr1-1.fna.fbcdn.net/v/t1.6435-9/45581793_2203984279874968_4292840161907048448_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=RcG_wmzsvHQAX-FOhVe&_nc_oc=AQm2UMPEu-FuzYIDqjPO6yyvyOURXCre6F3HqzuDbo0zPQgPJjpbtquE28S1d55060k&_nc_ht=scontent.fbhr1-1.fna&oh=03870f06d4710fc6a02db427e5de67c5&oe=60A06B9A'

    },
    {
        devIndex:3,
        devName :'Shiva Pandey',
        devDescription:'Ma ta khatrai ho Facebook ma senior engineer vai sakeko',
        devCover:'https://miro.medium.com/fit/c/344/344/1*YrNONz0kkwqCb9D7212CiA.jpeg'

    },
    {
        devIndex:4,
        devName :'Rudra Singh',
        devDescription:'Programming garxu daam chapxu galti vaye shiva xa',
        devCover:'https://scontent.fbhr1-1.fna.fbcdn.net/v/t31.18172-8/15723647_1188235994591641_4626787110233549926_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FL5S7SilqjkAX_QNpQl&_nc_ht=scontent.fbhr1-1.fna&oh=df8838d482a5b9d617efaa74a7babf27&oe=60A179BA'

    },
    {
        devIndex:5,
        devName :'Aviskar Kc',
        devDescription:"Software Engineer @Careprotocol. console.log('here')",
        devCover:'https://honeycomb.sh/user/aviskar_kc.jpg'

    },
    {
        devIndex:6,
        devName :'Nishla Shakya',
        devDescription:'Developer @Zegal. Dreamer | Learner | Doer',
        devCover:'https://honeycomb.sh/user/nishla_shakya.jpg'

    },
    {
        devIndex:7,
        devName :'Kabir Baidhya',
        devDescription:'Senior Engineer @Klarna. Open Source Enthusiast · Software Engineer · Pacifist',
        devCover:'https://honeycomb.sh/user/kabir_baidhya.png'

    },
    {
        devIndex:8,
        devName :'Chumlung Limbu',
        devDescription:'Senior Software Engineer @lftechnology. Pro Googler',
        devCover:'https://honeycomb.sh/user/chumlung_limbu.png'

    },


]