import React from 'react';
import { Card, Space, Tag, Typography } from 'antd';

const { Text } = Typography;

const LifecycleStatus = ({ isActive, mountCount }) => {
  return (
    <Card 
      title="Component Lifecycle Status" 
      size="small" 
      style={{ marginBottom: 16 }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <div>
          <Text strong>Current Status: </Text>
          <Tag color={isActive ? 'success' : 'default'}>
            {isActive ? 'Mounted & Active' : 'Unmounted'}
          </Tag>
        </div>
        
        <div>
          <Text strong>Mount Count: </Text>
          <Tag color="blue">{mountCount}</Tag>
        </div>
        
        <div>
          <Text type="secondary" style={{ fontSize: '0.9rem' }}>
            {isActive 
              ? 'useEffect is running with setInterval updating every second' 
              : 'useEffect cleanup has cleared the interval'
            }
          </Text>
        </div>
      </Space>
    </Card>
  );
};

export default LifecycleStatus;
