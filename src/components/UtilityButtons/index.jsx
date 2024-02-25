import { EyeOutlined, SyncOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';


 const UtilityButtons = ({shuffle, showTopCards}) => {
  return (
    <div style={{ marginTop: '10px' }}>
        <Button size='large' icon={<SyncOutlined />} onClick={()=> {shuffle()}} />
        <Button size='large' icon={<EyeOutlined />} onClick={()=>{showTopCards()}} style={{ marginLeft: '5px' }} />
    </div>
  );
}

export default UtilityButtons;