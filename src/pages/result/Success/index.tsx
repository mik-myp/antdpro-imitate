import { Button, Card, Descriptions, Result, Steps } from 'antd';
import React from 'react';
import { DingdingOutlined } from '@ant-design/icons';
import './index.less';
const Success = () => {
  return (
    <Card>
      <Result
        status="success"
        title="提交成功"
        subTitle="提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
        extra={[
          <Button type="primary" key="1">
            返回列表
          </Button>,
          <Button key="2">查看项目</Button>,
          <Button key="3">打印</Button>,
        ]}
      >
        <Descriptions title="项目名称" size="small">
          <Descriptions.Item label="项目 ID">23421</Descriptions.Item>
          <Descriptions.Item label="负责人">曲丽丽</Descriptions.Item>
          <Descriptions.Item label="生效时间">2016-12-12 ~ 2017-12-12</Descriptions.Item>
        </Descriptions>
        <Steps progressDot current={1} size="small">
          <Steps.Step
            title="创建项目"
            description={
              <div className="title">
                <div style={{ margin: '8px 0px 4px' }}>
                  曲丽丽
                  <DingdingOutlined />
                </div>
                <div>2016-12-12 12:32</div>
              </div>
            }
          />
          <Steps.Step
            title="部门初审"
            description={
              <div className="title" style={{ fontSize: '12px' }}>
                <div style={{ margin: '8px 0px 4px' }}>
                  周毛毛
                  <a>
                    <DingdingOutlined />
                    催一下
                  </a>
                </div>
              </div>
            }
          />
          <Steps.Step title="财务复核" />
          <Steps.Step title="完成" />
        </Steps>
      </Result>
    </Card>
  );
};

export default Success;
