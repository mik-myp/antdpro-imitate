import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const BodyOne: React.FC = () => {
  return (
    <>
      <Row style={{ margin: '0 -12px' }}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 18 }}
          style={{ padding: '0 12px', marginBottom: '24px' }}
        >
          <Card title="活动实时交易情况">
            <Row>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                <Statistic title="今日交易总额" value={124543233} suffix="元" />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                <Statistic title="销售目标完成率" value={92} suffix="%" />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                <Countdown title="活动剩余时间" value={deadline} format="HH:mm:ss:SSS" />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                <Statistic title="每秒交易总额" value={234} suffix="元" />
              </Col>
            </Row>
            OK，这次不是画布了，是更高级的可视化
          </Card>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 6 }}
          style={{ padding: '0 12px' }}
        >
          <Card title="活动情况预测" style={{ marginBottom: '24px' }}>
            <Statistic title="目标评估" value="有望达到预期" />
            不想要画布了
          </Card>
          <Card title="券核效率" style={{ marginBottom: '24px' }}>
            拜托不要画布了
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BodyOne;
