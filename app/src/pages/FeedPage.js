import React, { useState, useEffect} from 'react';
import Promo from '../components/Promo';

function FeedPage(props) {

    return (
        <div>
            {props.promos.map( (promo) => {
                return (
                    <ul>
                        <Promo key={promo.id} promo={promo}/>
                    </ul>
                )
            })}
        </div>
    )
};

export default FeedPage;
