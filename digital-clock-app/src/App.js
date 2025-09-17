import React, { useState, useEffect } from 'react';
import { Typography, Divider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import DigitalClock from './components/DigitalClock';
import LifecycleStatus from './components/LifecycleStatus';
import ClockControls from './components/ClockControls';
import './App.css';

const { Title, Text } = Typography;

const App = () => {
  const [isClockActive, setIsClockActive] = useState(false);
  const [mountCount, setMountCount] = useState(0);

  // Effect to track mount count
  useEffect(() => {
    if (isClockActive) {
      setMountCount(prev => prev + 1);
    }
  }, [isClockActive]);

  const toggleClock = () => {
    setIsClockActive(prev => !prev);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <Title level={2} className="app-title">
          <ClockCircleOutlined className="title-icon" />
          Digital Clock with Component Lifecycle
        </Title>

      </div>

      <LifecycleStatus isActive={isClockActive} mountCount={mountCount} />
      
      <div className="clock-section">
        <DigitalClock isActive={isClockActive} />
      </div>

      <ClockControls 
        isActive={isClockActive} 
        onToggle={toggleClock} 
      />

      <Divider />
    </div>
  );
};

export default App;

