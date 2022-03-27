import { Card, Col, Dropdown, Menu, Radio, Row, Table, Tooltip } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import columns from './config.js';
import {
  EllipsisOutlined,
  ExclamationCircleOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

const data: any = [];
for (let i = 1; i <= 100; i++) {
  data.push({
    ranking: i,
    keywords: `搜索关键词-${i}`,
    usersNumber: Math.floor(Math.random() * 1000 + 1),
    weeklyGains: `${Math.floor(Math.random() * 100 + 1)}%`,
  });
}

const menu = (
  <Menu>
    <Menu.Item key="1">操作一</Menu.Item>
    <Menu.Item key="2">操作二</Menu.Item>
  </Menu>
);
const options = [
  { label: '全部渠道', value: '全部渠道' },
  { label: '线上', value: '线上' },
  { label: '门店', value: '门店' },
];
const Detail = (props: any) => {
  const { numberInfoSubTitle, numberInfoValue, subTotal, icon } = props;
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      style={{ paddingLeft: '34px', paddingRight: '34px', marginBottom: '24px' }}
    >
      <div className={styles.numberInfo}>
        <div className={styles.numberInfoSubTitle}>
          <span>
            {numberInfoSubTitle}
            <Tooltip title="指标说明">
              <ExclamationCircleOutlined style={{ marginLeft: '8px' }} />
            </Tooltip>
          </span>
        </div>
        <div className={styles.numberInfoValue} style={{ marginTop: '8px' }}>
          <span>{numberInfoValue}</span>
          <span className={styles.subTotal}>
            {subTotal}
            {icon}
          </span>
        </div>
      </div>
      <div>chart波浪线</div>
    </Col>
  );
};

const BodyThree: React.FC = () => {
  const [value, setValue] = useState('全部渠道');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <Row style={{ margin: '24px -12px 0', rowGap: '0px' }} gutter={24}>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 12 }}
      >
        <Card
          title="线上热门搜索"
          extra={
            <Dropdown overlay={menu}>
              <EllipsisOutlined className={styles.iconGroup} />
            </Dropdown>
          }
        >
          <Row>
            <Detail
              key="1"
              numberInfoSubTitle="搜索用户数"
              numberInfoValue="12,321"
              subTotal="17.1"
              icon={<CaretUpOutlined style={{ marginLeft: '4px', color: '#f5222d' }} />}
            />
            <Detail
              key="2"
              numberInfoSubTitle="人均搜索次数"
              numberInfoValue="2.7"
              subTotal="26.2"
              icon={<CaretDownOutlined style={{ marginLeft: '4px', color: '#52c41a' }} />}
            />
          </Row>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            pagination={{
              pageSize: 5,
              showSizeChanger: false,
            }}
          />
        </Card>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 12 }}
      >
        <Card
          title="销售额类别占比"
          extra={
            <>
              <Radio.Group
                options={options}
                optionType="button"
                value={value}
                onChange={handleChange}
                style={{ marginRight: '17px' }}
              />
              <Dropdown overlay={menu}>
                <EllipsisOutlined className={styles.iconGroup} />
              </Dropdown>
            </>
          }
        >
          画布什么的最烦人了
        </Card>
      </Col>
    </Row>
  );
};

export default BodyThree;
