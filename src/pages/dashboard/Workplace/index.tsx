import React from 'react';
import { Avatar, Row, Statistic, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';
import styles from './index.less';
import BodyOne from './BodyOne';
import BodyTwo from './BodyTwo';

const content = (
  <div className={styles.pageHeaderContent}>
    <div className={styles.avatar}>
      <Avatar size={72} icon={<UserOutlined />} />
    </div>
    <div className={styles.content}>
      <div className={styles.contentTitle}>早安，吴彦祖，祝你开心每一天！</div>
      <div>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
    </div>
  </div>
);
const statisticList = [
  { id: 1, title: '项目数', number: '56' },
  { id: 2, title: '团队内排名', number: '8/24' },
  { id: 3, title: '项目访问', number: '2,223' },
];

const extraContent = (
  <div className={styles.extraContent}>
    {statisticList.map((item) => (
      <div className={styles.statItem} key={item.id}>
        <Statistic title={item.title} value={item.number} />
      </div>
    ))}
  </div>
);

const Workplace: React.FC = () => {
  return (
    <div id="test-pro-layout">
      <PageContainer content={content} extraContent={extraContent}>
        <Row gutter={24} style={{ margin: '0 -12px', rowGap: '0px' }}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 16 }}
            style={{ padding: '0 12px' }}
          >
            <BodyOne />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 8 }}
            style={{ padding: '0 12px' }}
          >
            <BodyTwo />
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Workplace;
