import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import './ClockControls.css';

const ClockControls = ({ isActive, onToggle }) => {
  return (
    <div className="controls-section">
      <Button
        type="primary"
        size="large"
        icon={isActive ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        onClick={onToggle}
        className="control-button"
      >
        {isActive ? 'Stop Clock' : 'Start Clock'}
      </Button>
    </div>
  );
};

export default ClockControls;
