import { Card, Col, Row } from 'antd';
import React from 'react';

const BodyTwo: React.FC = () => {
  return (
    <>
      <Row style={{ margin: '0 -12px' }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 12 }}
          style={{ padding: '0 12px', marginBottom: '24px' }}
        >
          <Card title="各品类占比">画布</Card>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 6 }}
          style={{ padding: '0 12px', marginBottom: '24px' }}
        >
          <Card title="热门搜索">画布</Card>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 6 }}
          style={{ padding: '0 12px', marginBottom: '24px' }}
        >
          <Card title="资源剩余">画布</Card>
        </Col>
      </Row>
    </>
  );
};

export default BodyTwo;
