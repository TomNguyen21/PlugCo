import React, { useState, useEffect} from 'react'
import Preview from './Preview';

function Promo(props) {
    let iconStyle = {
        width: '65px',
        height: '65px',
        margin: '18px 14px 18px 18px'
    }

    let cardHeader = {
        display: 'flex',
        flexFlow: 'row no-wrap',
        alignItems: 'center',
        width: '375px'
    }

    let cardHeader2 = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start'
    }

    let cardTitle = {
        height: '28px',
    }

    let payInstall = {
        color: '#039330',
        height: '18px',
    }
    
    let previewCard = {
        background: '#F7FBFC',
        flexDirection: 'row',
    }
    return (
        <div>
            <div style={cardHeader}>
                <img style={iconStyle} src={props.promo.campaign_icon_url} />
                <div style={cardHeader2}>
                    <span style={cardTitle}>{props.promo.campaign_name}</span>
                    <span style={payInstall}>{props.promo.pay_per_install} per install</span>
                </div>
            </div>
            <div style={previewCard}>
            {props.promo.medias.map( (media) => {
                return (
                    <Preview media={media}/>
                )
            })}
            </div>
        </div>
    )
}

export default Promo
