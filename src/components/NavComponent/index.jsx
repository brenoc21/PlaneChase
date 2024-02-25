import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const NavigationControls = ({ onNext, onPrevious }) => (
    <div style={{ marginTop: '10px' }}>
        <Button size='large' icon={<LeftOutlined />} onClick={onPrevious} />
        <Button size='large' icon={<RightOutlined />} onClick={onNext} style={{ marginLeft: '5px' }} />
    </div>
);

export default NavigationControls;
