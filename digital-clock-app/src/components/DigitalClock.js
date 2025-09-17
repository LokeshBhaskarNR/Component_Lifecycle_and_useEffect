import React, { useState, useEffect } from 'react';
import { Card, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { formatTime } from '../utils/timeUtils';
import './DigitalClock.css';

const { Title, Text } = Typography;

const DigitalClock = ({ isActive }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!isActive) return;

    console.log('Clock effect started - setting up interval');
    
    const interval = setInterval(() => {
      setTime(new Date());
      console.log('Time updated:', new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log('Clock effect cleanup - clearing interval');
      clearInterval(interval);
    };
  }, [isActive]);

  if (!isActive) {
    return (
      <Card className="clock-card clock-inactive">
        <div className="clock-content">
          <ClockCircleOutlined className="inactive-icon" />
          <Title level={3} type="secondary">Clock is Unmounted</Title>
          <Text type="secondary">Press start to begin the clock</Text>
        </div>
      </Card>
    );
  }

  const { time: timeString, date: dateString } = formatTime(time);

  return (
    <Card className="clock-card clock-active" bodyStyle={{ padding: '40px 24px' }}>
      <div className="clock-content">
        <Title level={1} className="time-display">
          {timeString}
        </Title>
        <Text className="date-display">
          {dateString}
        </Text>
      </div>
    </Card>
  );
};

export default DigitalClock;
