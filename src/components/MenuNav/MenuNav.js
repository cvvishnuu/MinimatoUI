import React from 'react';
import { Link } from 'react-router-dom';
require('./MenuNav.css')
const PMenuNav = (props)=>{
    const { starters, mainCourse, deserts, drinks } = props;
    return(
        <div>
            <ul>
                <Link to = {`/business/profile/${starters}`}><li>STARTERS</li></Link>
                <Link to = {`/business/profile/${mainCourse}`}><li>MAIN COURSE</li></Link>
                <Link to = {`/business/profile/${deserts}`}><li>DESERTS</li></Link>
                <Link to = {`/business/profile/${drinks}`}><li>DRINKS</li></Link>
            </ul>
        </div>
    )
}


export default PMenuNav;