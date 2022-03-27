import { Card, Tabs, DatePicker, Col, Row } from 'antd';
import moment from 'moment';
import React from 'react';
import './index.less';
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

interface List {
  id: number;
  name: string;
  number: string;
}

const rankingList: List[] = [];

for (let i = 0; i < 7; i++) {
  rankingList.push({ id: i, name: `工专路${i}号店`, number: '323,234' });
}

const BodyTwo: React.FC = () => {
  return (
    <Card bodyStyle={{ padding: '0px' }}>
      <div className="salesCard">
        <Tabs
          defaultActiveKey="1"
          tabBarExtraContent={
            <div className="salesExtraWrap">
              <div className="salesExtra">
                <a>今日</a>
                <a>本周</a>
                <a>本月</a>
                <a>本年</a>
              </div>
              <RangePicker
                defaultValue={[
                  moment('2022/01/01', 'YYYY-MM-DD'),
                  moment('2022/12/31', 'YYYY-MM-DD'),
                ]}
              />
            </div>
          }
          style={{ marginBottom: '24px' }}
        >
          <TabPane tab="销售额" key="1">
            <Row style={{ rowGap: '0px' }}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 16 }}
              >
                <div className="salesBar">
                  <div>这里还是画布</div>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className="salesRank">
                  <h4 className="rankingTitle">门店销售额排名</h4>
                  <ul className="rankingList">
                    {rankingList.map((item) => (
                      <li key={item.id}>
                        <span className="rankingItemNumber">{item.id + 1}</span>
                        <span className="rankingItemTitle">{item.name}</span>
                        <span>{item.number}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="访问量" key="2">
            <Row style={{ rowGap: '0px' }}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 16 }}
              >
                <div className="salesBar">
                  <div>这里还是画布</div>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 8 }}
              >
                <div className="salesRank">
                  <h4 className="rankingTitle">门店访问量排名</h4>
                  <ul className="rankingList">
                    {rankingList.map((item) => (
                      <li key={item.id}>
                        <span className="rankingItemNumber">{item.id + 1}</span>
                        <span className="rankingItemTitle">{item.name}</span>
                        <span>{item.number}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
};

export default BodyTwo;
