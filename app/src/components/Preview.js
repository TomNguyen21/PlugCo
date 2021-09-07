import React, { useState, useEffect} from 'react'

function Preview(props) {
    // let [copyLink, setCopyLink] = useState(props.media.tracking_link);

    let [isVideo, setIsVideo] = useState(props.media.media_type);

    let updateVideoIcon = () => {
        if (isVideo === 'video') {
            return true;
        } else 
        return false;
    }
    let copy = () => {
        const el = document.createElement('input');
        el.value = props.media.tracking_link;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    let cardStyle = {
        display: 'flex',
        flexDirection: 'column',

    }
    let cardFooter = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
    let previewImg = {
        height: '179px',
        width: '101px',
        margin: '12px'
    }
    let buttonStyle = {
        background: 'none',
        height: '20px',
        width: '19px',
        border: 'none'
    }
    return (
        <div style={cardStyle}>
            <img style={previewImg} src={props.media.cover_photo_url} mediatype />
            {/* <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.20841 25.0579C1.20916 25.5933 0 24.8693 0 23.7357V2.5C0 1.36636 1.20916 0.642433 2.20841 1.17782L22.0256 11.7957C23.0811 12.3612 23.0811 13.8745 22.0256 14.44L2.20841 25.0579Z" fill="white"/>
</svg> */}

            <div style={cardFooter}>
                <button style={buttonStyle} onClick={copy}><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8955 9.83725L2.62092 7.07949C2.01205 6.34868 1.71181 5.43542 1.80132 4.51999C1.88779 3.62858 2.34887 2.85505 3.06407 2.33124C3.77926 1.80742 4.69135 1.57523 5.63475 1.71236C6.60373 1.85254 7.45358 2.31969 8.08499 3.07756L10.3626 5.81132C11.6254 7.32706 11.4357 9.44909 9.91945 10.5596C9.51895 10.8529 9.45232 11.3811 9.77106 11.736C9.92891 11.9255 10.15 12.0251 10.3802 12.0526C10.6105 12.0801 10.8498 12.0356 11.05 11.8889C13.3386 10.2127 13.6647 7.01024 11.793 4.76369L9.51235 2.05395C8.61033 0.971273 7.32429 0.257018 5.92046 0.0648626C4.49408 -0.15436 3.07479 0.187811 1.95909 1.00496C0.843386 1.8221 0.148738 3.00641 0.0272686 4.38107C-0.116752 5.72867 0.314084 7.04749 1.21611 8.13017L3.49372 10.8639C3.80943 11.2429 4.37217 11.3101 4.7471 11.0137C5.14761 10.7204 5.21424 10.1922 4.8955 9.83725ZM18.8615 15.6253C19.0055 14.2777 18.5777 12.9348 17.6757 11.8522L15.3981 9.1184C15.0824 8.73947 14.5196 8.67221 14.1447 8.9686C13.7442 9.26194 13.6775 9.79015 13.9963 10.1451L16.2739 12.8788C16.8828 13.6096 17.183 14.5229 17.0935 15.4383C17.007 16.3297 16.5459 17.1033 15.8307 17.6271C15.1156 18.1509 14.2035 18.3831 13.2601 18.246C12.2911 18.1058 11.4412 17.6386 10.8098 16.8808L8.52918 14.171C7.26634 12.6553 7.45612 10.5332 8.97233 9.42276C9.37284 9.12942 9.43947 8.60121 9.12073 8.24628C8.80502 7.86735 8.24228 7.80009 7.86735 8.09648C5.57873 9.77268 5.25267 12.9751 7.12437 15.2217L9.40198 17.9554C10.304 19.0381 11.59 19.7524 12.9939 19.9445L13.1218 19.9598C14.503 20.1249 15.8712 19.7766 16.9297 19.0014C18.0454 18.1842 18.74 16.9999 18.8615 15.6253Z" fill="#909A9C"/>
                    </svg>
                </button>
                <a href={props.media.download_url}>
                    <svg width="18" height="19" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.58579 0 8.25 0.335786 8.25 0.75V11.8747L5.69797 9.32272C5.37984 9.00458 4.86403 9.00458 4.54589 9.32272C4.22776 9.64086 4.22776 10.1567 4.54589 10.4748L8.45951 14.3884C8.77765 14.7066 9.29345 14.7066 9.61159 14.3884C9.71125 14.2888 9.77969 14.1697 9.81691 14.0434L13.2637 10.5966C13.5819 10.2784 13.5819 9.76264 13.2637 9.4445C12.9456 9.12636 12.4298 9.12636 12.1116 9.4445L9.75 11.8061V0.75C9.75 0.335786 9.41421 0 9 0ZM0.75 17.7083C0.335786 17.7083 0 18.0441 0 18.4583C0 18.8725 0.335787 19.2083 0.75 19.2083H17.25C17.6642 19.2083 18 18.8725 18 18.4583C18 18.0441 17.6642 17.7083 17.25 17.7083H0.75Z" fill="#909A9C"/>
                    </svg>
                </a>

            </div>
        </div>
    )
}

export default Preview
