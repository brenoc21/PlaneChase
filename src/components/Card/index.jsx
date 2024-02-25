import React, { useEffect } from 'react';
import { Card, theme } from 'antd';
import { useIsPCResolution } from '../../hooks/useIsPcResolution';
import { LoadingOutlined } from '@ant-design/icons';


const CardDisplay = ({ card }) => {
    const isPC = useIsPCResolution();
    useEffect(() => {   
        console.log(card);
    }, [card])
    return (<>{
        card ?
        <img style={{width: "auto", maxWidth: "94vw", maxHeight: "80vh", transform: isPC ?"rotate(90deg)" : ''}} alt="example" src={card["image_uris"].png }/> : <LoadingOutlined size='large'style={{color: "#fff", flex: 1}} />}
        </>
    ); // Add a closing parenthesis here
};

export default CardDisplay;


