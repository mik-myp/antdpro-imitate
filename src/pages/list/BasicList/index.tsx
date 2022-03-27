import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Avatar, Button, Card, Col, Dropdown, Input, List, Menu, Progress, Radio, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './index.less';

const styles = {
  xs: { span: 24 },
  sm: { span: 8 },
};
const options = [
  { label: '全部', value: '全部' },
  { label: '进行中', value: '进行中' },
  { label: '等待中', value: '等待中' },
];
const dataList = [];
for (let i = 0; i < 150; i++) {
  dataList.push({ id: i, title: `标题${i}`, description: `这是标题${i}的描述` });
}
const content = (
  <div className="listContent">
    <div className="listContentItem">
      <span>Owner</span>
      <p>付晓晓</p>
    </div>
    <div className="listContentItem">
      <span>开始时间</span>
      <p>2022-03-25 04:01</p>
    </div>
    <div className="listContentItem">
      <Progress percent={55} style={{ width: '180px' }} />
    </div>
  </div>
);
const menu = (
  <Menu>
    <Menu.Item key="bianji">
      <a>编辑</a>
    </Menu.Item>
    <Menu.Item key="shanchu">
      <a>删除</a>
    </Menu.Item>
  </Menu>
);
const BasicList = () => {
  return (
    <>
      <PageContainer>
        <div className="standardList">
          <Card>
            <Row>
              <Col {...styles}>
                <div className="headerInfo">
                  <span>我的待办</span>
                  <p>8个任务</p>
                  <em></em>
                </div>
              </Col>
              <Col {...styles}>
                <div className="headerInfo">
                  <span>本周任务平均处理时间</span>
                  <p>32分钟</p>
                  <em></em>
                </div>
              </Col>
              <Col {...styles}>
                <div className="headerInfo">
                  <span>本周完成任务数</span>
                  <p>24个任务</p>
                </div>
              </Col>
            </Row>
          </Card>
          <Card
            bodyStyle={{ padding: '0 32px 40px' }}
            className="listCard"
            style={{ marginTop: '24px' }}
            title="基本列表"
            extra={
              <>
                <Radio.Group options={options} optionType="button" />
                <Input.Search value="全部" placeholder="请输入" className="extraContentSearch" />
              </>
            }
          >
            <List
              dataSource={dataList}
              pagination={{
                showQuickJumper: true,
                pageSizeOptions: [5, 10, 20, 50],
                showSizeChanger: true,
              }}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <a key="edit">编辑</a>,
                    <Dropdown overlay={menu} key="more">
                      <a>
                        更多
                        <DownOutlined />
                      </a>
                    </Dropdown>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        size="large"
                        shape="square"
                      />
                    }
                    title={item.title}
                    description={item.description}
                  />
                  {content}
                </List.Item>
              )}
            />
          </Card>
        </div>
      </PageContainer>
      <Button type="dashed" block>
        +添加
      </Button>
    </>
  );
};

export default BasicList;
