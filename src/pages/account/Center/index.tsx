import { Row, Col, Card, Divider, Tag, Avatar, List, Space } from 'antd';
import React from 'react';
import {
  ContactsOutlined,
  ClusterOutlined,
  HomeOutlined,
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from '@ant-design/icons';
import './index.less';

const teamList = [
  { id: '1', name: '科学搬砖组' },
  { id: '2', name: '全组都是吴彦祖' },
  { id: '3', name: '中二少女团' },
  { id: '4', name: '程序员日常' },
  { id: '5', name: '高逼格设计天团' },
  { id: '6', name: '骗你来学计算机' },
];
const tabList = [
  {
    key: 'tab1',
    tab: '文章（8）',
  },
  {
    key: 'tab2',
    tab: '应用（8）',
  },
  {
    key: 'tab3',
    tab: '项目（8）',
  },
];
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const listData = [];
for (let i = 0; i < 8; i++) {
  listData.push({
    id: i,
    title: `列表${i}`,
    description: (
      <span>
        <Tag>Ant Design</Tag>
        <Tag>设计语言</Tag>
        <Tag>蚂蚁金服</Tag>
      </span>
    ),
    content: (
      <div className="listContent">
        <div className="description">
          段落示意：蚂蚁金服设计平台
          ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
          ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
        </div>
        <div className="extra">
          <Avatar src="https://joeschmoe.io/api/v1/random" size="small" />
          <a>付晓晓</a>
          发布在
          <a>https://ant.design</a>
          <em>2022-03-25 13:34</em>
        </div>
      </div>
    ),
  });
}
const Center = () => {
  return (
    <Row style={{ marginLeft: '-12px', marginRight: '-12px' }}>
      <Col md={{ span: 24 }} lg={{ span: 7 }} style={{ paddingLeft: '12px', paddingRight: '12px' }}>
        <Card style={{ marginBottom: '24px' }}>
          <div>
            <div className="avatarHolder">
              <img
                src="	https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                alt=""
              />
              <div className="name">Serati Ma</div>
              <div>海纳百川，有容乃大</div>
            </div>
            <div className="detail">
              <p>
                <ContactsOutlined style={{ marginRight: '8px' }} />
                交互专家
              </p>
              <p>
                <ClusterOutlined style={{ marginRight: '8px' }} />
                蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
              </p>
              <p>
                <HomeOutlined style={{ marginRight: '8px' }} />
                浙江省杭州市
              </p>
            </div>
            <Divider />
            <div className="tags">
              <div className="tagsTitle">标签</div>
              <Tag>很有想法</Tag>
              <Tag>专注设计</Tag>
              <Tag>辣~</Tag>
              <Tag>大长腿</Tag>
              <Tag>川妹子</Tag>
            </div>
            <Divider style={{ marginTop: '16px' }} />
            <div className="team">
              <div className="teamTitle">团队</div>
              <Row style={{ marginLeft: '-18px', marginRight: '-18px', rowGap: '0px' }}>
                {teamList.map((item) => (
                  <Col
                    key={item.id}
                    lg={{ span: 24 }}
                    xl={{ span: 12 }}
                    style={{ paddingLeft: '18px', paddingRight: '18px' }}
                  >
                    <a>
                      <Avatar
                        src="https://joeschmoe.io/api/v1/random"
                        size="small"
                        style={{ marginLeft: '12px' }}
                      />
                      {item.name}
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Card>
      </Col>
      <Col
        md={{ span: 24 }}
        lg={{ span: 17 }}
        style={{ paddingLeft: '12px', paddingRight: '12px' }}
      >
        <Card tabList={tabList}>
          <List
            itemLayout="vertical"
            dataSource={listData}
            className="articleList"
            renderItem={(item) => (
              <List.Item
                style={{ padding: '0 24px 16px' }}
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
              >
                <List.Item.Meta title={item.title} description={item.description} />
                {item.content}
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Center;
