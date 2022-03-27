import React, { useState } from 'react';
import { Input, Card, Form, Row, Col, Tag, Select, List, Space, Avatar } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import './index.less';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Search } = Input;
const { CheckableTag } = Tag;
const { Option } = Select;

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
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Alipay${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: (
      <>
        <Tag>Ant Design</Tag>
        <Tag>设计语言</Tag>
        <Tag>蚂蚁金服</Tag>
      </>
    ),
    content: (
      <div className="listContent">
        <div className="description">
          段落示意：蚂蚁金服设计平台
          ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
          ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。,
        </div>
        <div className="extra">
          <Avatar className="avatar" src="https://joeschmoe.io/api/v1/random" size={20} />
          <a href="#">付晓晓</a>
          发布在
          <a href="#">https://ant.design</a>
          <em>2022-03-24 16:07</em>
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
const Articles = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTag, setAllTag] = useState(false);
  const [selectValue, setSelectValue] = useState(['2']);

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
      tabList={[
        { tab: '文章', key: '1' },
        { tab: '项目', key: '2' },
        { tab: '应用', key: '3' },
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
          <div className="standardFormRow standardFormRowBlock" style={{ paddingBottom: '11px' }}>
            <div className="label">
              <span>owner:</span>
            </div>
            <div className="content">
              <Select
                value={selectValue}
                mode="multiple"
                onChange={(value) => setSelectValue(value)}
              >
                <Option value="1">我自己</Option>
                <Option value="2">吴家豪</Option>
                <Option value="3">周星星</Option>
                <Option value="4">赵丽颖</Option>
                <Option value="5">姚明</Option>
              </Select>
              <a
                onClick={() => {
                  setSelectValue(['1']);
                }}
                style={{ marginLeft: '12px' }}
              >
                只看我自己
              </a>
            </div>
          </div>
          <div className="standardFormRow standardFormRowLast" style={{ paddingBottom: '11px' }}>
            <div className="label">
              <span>其它选项:</span>
            </div>
            <div className="content">
              <Row>
                <Col {...style}>
                  <Form.Item label="活跃用户" name="活跃用户">
                    <Select placeholder="不限">
                      <Option value="1">李三</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...style}>
                  <Form.Item label="好评度" name="好评度">
                    <Select placeholder="不限">
                      <Option value="1">优秀</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </div>
        </Form>
      </Card>
      <Card>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default Articles;
