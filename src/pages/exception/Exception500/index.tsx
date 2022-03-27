import React from 'react';
import { Button, Result } from 'antd';

const Exception500 = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, the server is reporting an error."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default Exception500;
