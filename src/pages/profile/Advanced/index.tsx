import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {
  Descriptions,
  Button,
  Dropdown,
  Menu,
  Statistic,
  Card,
  Steps,
  Divider,
  Empty,
  Table,
} from 'antd';
import { EllipsisOutlined, DingdingOutlined } from '@ant-design/icons';
import './index.less';
const { Step } = Steps;

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">曲丽丽</Descriptions.Item>
    <Descriptions.Item label="订购产品">XX 服务</Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-07-07</Descriptions.Item>
    <Descriptions.Item label="关联单据">12421</Descriptions.Item>
    <Descriptions.Item label="生效日期">2017-07-07 ~ 2017-08-08</Descriptions.Item>
    <Descriptions.Item label="备注">请于两个工作日内确认</Descriptions.Item>
  </Descriptions>
);

const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
);

const extra = (
  <>
    <Button.Group>
      <Button>操作一</Button>
      <Button>操作二</Button>
      <Dropdown overlay={menu}>
        <Button>
          <EllipsisOutlined />
        </Button>
      </Dropdown>
    </Button.Group>
    <Button type="primary">主操作</Button>
  </>
);

const extraContent = (
  <div className="moreInfo">
    <Statistic title="状态" value="待审批" />
    <Statistic title="订单金额" value="568.08" prefix="￥" />
  </div>
);

const Miaosu = (props) => {
  const { title, list, style, size } = props;
  return (
    <Descriptions size={size} title={title ? title : ''} style={style ? style : {}}>
      {list.map((item) => (
        <Descriptions.Item key={`${item.label}-${item.value}`} label={item.label}>
          {item.value}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

const listOne = [
  { label: '用户姓名', value: '付小小' },
  { label: '会员卡号', value: '32943898021309809423' },
  { label: '身份证', value: '3321944288191034921' },
  { label: '联系方式', value: '18112345678' },
  { label: '联系地址', value: '曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口' },
];
const listTwo = [
  { label: '某某数据', value: '7251' },
  { label: '该数据更新时间', value: '2017-08-08' },
  { label: '某某数据', value: '7252' },
  { label: '该数据更新时间', value: '2017-08-08s' },
];
const listThree = [
  { label: '负责人', value: '林东东' },
  { label: '角色码', value: '1234567' },
  { label: '所属部门', value: 'XX公司 - YY部' },
  { label: '过期时间', value: '2017-08-08' },
  { label: '描述', value: '这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...' },
];
const tabList = [
  {
    key: 'tab1',
    tab: '操作日志一',
  },
  {
    key: 'tab2',
    tab: '操作日志二',
  },
  {
    key: 'tab3',
    tab: '操作日志三',
  },
];

const columns = [
  {
    title: '操作类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '操作人',
    dataIndex: 'people',
    key: 'people',
  },
  {
    title: '执行结果',
    dataIndex: 'result',
    key: 'result',
  },
  {
    title: '操作时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '备注',
    dataIndex: 'bz',
    key: 'bz',
    render: (text) => text || '-',
  },
];

const data = [
  {
    key: '1',
    type: '订购关系生效',
    people: '曲丽丽',
    result: '成功',
    time: '2017-10-03 19:23:12',
    bz: '',
  },
  {
    key: '2',
    type: '财务复审		',
    people: '付小小		',
    result: '驳回	',
    time: '2017-10-03 19:23:12',
    bz: '不通过原因',
  },
  {
    key: '3',
    type: '部门初审	',
    people: '周毛毛	',
    result: '成功',
    time: '2017-10-03 19:23:12',
    bz: '',
  },
  {
    key: '4',
    type: '提交订单	',
    people: '	林东东',
    result: '成功',
    time: '	2017-10-03 19:23:12',
    bz: '	很棒',
  },
  {
    key: '5',
    type: '创建订单',
    people: '汗牙牙',
    result: '成功',
    time: '2017-10-03 19:23:12',
    bz: '',
  },
];

const Advanced = () => {
  return (
    <PageContainer
      title="单号：234231029431"
      extra={extra}
      content={content}
      extraContent={extraContent}
      tabList={[
        {
          tab: '详情',
          key: 'xq',
        },
        {
          tab: '规则',
          key: 'gz',
        },
      ]}
    >
      <Card title="流程进度" style={{ marginBottom: '24px' }}>
        <Steps progressDot current={1} size="small">
          <Step
            title="创建项目"
            description={
              <div>
                曲丽丽
                <DingdingOutlined style={{ marginLeft: '8px' }} />
                <div>2016-12-12 12:32</div>
              </div>
            }
          />
          <Step
            title="部门初审"
            description={
              <div>
                周毛毛
                <DingdingOutlined style={{ marginLeft: '8px', color: 'rgb(0, 160, 233)' }} />
                <div>
                  <a>催一下</a>
                </div>
              </div>
            }
          />
          <Step title="财务复核" />
          <Step title="完成" />
        </Steps>
      </Card>
      <Card title="用户信息" style={{ marginBottom: '24px' }}>
        <Miaosu style={{ marginBottom: '24px' }} list={listOne} />
        <Miaosu style={{ marginBottom: '24px' }} list={listTwo} title="信息组" />
        <h4 style={{ marginBottom: '16px' }}>信息组</h4>
        <Card title="多层级信息组">
          <Miaosu title="组名称" size="small" list={listThree} style={{ marginBottom: '24px' }} />
          <Divider />
          <Miaosu
            title="组名称"
            size="small"
            list={[
              {
                label: '学名',
                value:
                  'Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..',
              },
            ]}
          />
          <Divider />
          <Miaosu
            title="组名称"
            size="small"
            list={[
              {
                label: '负责人',
                value: '付小小',
              },
              {
                label: '角色码',
                value: '1234568',
              },
            ]}
          />
        </Card>
      </Card>
      <Card title="用户近半年来电记录" style={{ marginBottom: '24px' }}>
        <Empty />
      </Card>
      <Card tabList={tabList}>
        <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true  }} />
      </Card>
    </PageContainer>
  );
};

export default Advanced;
