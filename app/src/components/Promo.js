import React, { useState, useEffect} from 'react'
import Preview from './Preview';

function Promo(props) {
    let iconStyle = {
        width: '40px',
        height: '40px',
    }
    let cardHeader = {
        display: 'flex',
        flex: 'row no-wrap',
    }
    return (
        <div>
            <div style={cardHeader}>
                <img style={iconStyle} src={props.promo.campaign_icon_url} />
                <div>
                    <p>{props.promo.campaign_name}</p>
                    <p>{props.promo.pay_per_install} per install</p>
                </div>
            </div>
            <Preview key={props.promo.id} medias={props.promo.medias}/>
        </div>
    )
}

export default Promo
