import React, { useState } from 'react';
import { Input, Card, Form, Row, Col, Tag, Select, List, Statistic, Avatar } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import './index.less';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Search } = Input;
const { CheckableTag } = Tag;
const { Option } = Select;
const { Meta } = Card;

const content = (
  <div style={{ textAlign: 'center' }}>
    <Search
      placeholder="请输入"
      allowClear
      enterButton="搜索"
      size="large"
      style={{ maxWidth: '522px', width: '100%' }}
    />
  </div>
);

const lmList: any = [];
for (let i = 1; i < 10; i++) {
  lmList.push(`类目${i}`);
}
const listData = [];
for (let i = 0; i < 8; i++) {
  listData.push({
    title: `Alipay${i}`,
    content: (
      <div className="cardInfo">
        <div>
          <p>活跃用户</p>
          <p>
            <span>16万</span>
          </p>
        </div>
        <div>
          <p>新增用户</p>
          <p>123456</p>
        </div>
      </div>
    ),
  });
}
const style = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 10 },
  xl: { span: 8 },
};
const Applications = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTag, setAllTag] = useState(false);
  const [tab, setTab] = useState('3');

  const handleChange = (item: any, checked: any) => {
    const nextSelectedTags = checked
      ? [...selectedTags, item]
      : selectedTags.filter((t) => t !== item);
    setSelectedTags(nextSelectedTags);
    setAllTag(nextSelectedTags.length == lmList.length ? true : false);
  };

  const handleAllChange = (checked: any) => {
    setAllTag(checked);
    setSelectedTags(checked ? lmList : []);
  };
  return (
    <PageContainer
      content={content}
      tabActiveKey={tab}
      onTabChange={(activeKey) => setTab(activeKey)}
      tabList={[
        { tab: '文章', key: '1', tabKey: '1' },
        { tab: '项目', key: '2', tabKey: '2' },
        { tab: '应用', key: '3', tabKey: '3' },
      ]}
    >
      <Card>
        <Form layout="inline">
          <div className="standardFormRow standardFormRowBlock" style={{ paddingBottom: '11px' }}>
            <div className="label">
              <span>所属类目:</span>
            </div>
            <div className="content">
              <Row>
                <Col>
                  <CheckableTag
                    checked={allTag}
                    onChange={(checked) => handleAllChange(checked)}
                    className="tagSelect"
                  >
                    全部
                  </CheckableTag>
                </Col>
                {lmList.map((item: any) => (
                  <Col key={item}>
                    <CheckableTag
                      className="tagSelect"
                      key={item}
                      checked={selectedTags.indexOf(item) > -1}
                      onChange={(checked) => handleChange(item, checked)}
                    >
                      {item}
                    </CheckableTag>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="standardFormRow standardFormRowLast" style={{ paddingBottom: '11px' }}>
            <div className="label">
              <span>其它选项:</span>
            </div>
            <div className="content">
              <Row>
                <Col {...style}>
                  <Form.Item label="作者" name="活跃用户">
                    <Select placeholder="不限">
                      <Option value="1">王昭君</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...style}>
                  <Form.Item label="好评度" name="好评度">
                    <Select placeholder="不限">
                      <Option value="1">优秀</Option>
                      <Option value="2">普通</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </div>
        </Form>
      </Card>
      <div className="cardList">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={listData}
          renderItem={(item) => (
            <Col>
              <List.Item>
                <Card
                  hoverable={true}
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.title}
                  />
                  {item.content}
                </Card>
              </List.Item>
            </Col>
          )}
        />
      </div>
    </PageContainer>
  );
};

export default Applications;
