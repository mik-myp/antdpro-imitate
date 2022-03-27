import { Result, Button } from 'antd';
import React from 'react';

const Exception403 = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary">Back to Home</Button>}
    />
  );
};

export default Exception403;
