import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

import './index.less';
import { Avatar, Button, Card, List } from 'antd';

const content = (
  <div className="pageHeaderContent">
    <p>
      段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
      提供跨越设计与开发的体验解决方案。
    </p>
    <div className="contentLink">
      <a>快速开始</a>
      <a>产品简介</a>
      <a>产品文档</a>
    </div>
  </div>
);

const extraContent = (
  <div className="extraImg">
    <img
      alt="这是一个标题"
      src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
    />
  </div>
);

const dataList = [];
for (let i = 0; i < 8; i++) {
  dataList.push({ id: i, title: `标题${i}`, description: `这是标题${i}的描述` });
}

const CardList = () => {
  return (
    <PageContainer content={content} extraContent={extraContent}>
      <div className="cardList">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 4,
          }}
          dataSource={dataList}
          renderItem={(item) => {
            return item.id === 0 ? (
              <List.Item>
                <Button type="dashed" className="newButton">
                  +新增
                </Button>
              </List.Item>
            ) : (
              <List.Item>
                <Card actions={[<a>操作一</a>, <a>操作二</a>]} hoverable>
                  <Card.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size="large" />}
                    title={item.title}
                    description={item.description}
                  />
                </Card>
              </List.Item>
            );
          }}
        />
      </div>
    </PageContainer>
  );
};

export default CardList;
