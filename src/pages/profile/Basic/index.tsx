import React from 'react';
import './index.less';

import { PageContainer } from '@ant-design/pro-layout';
import { Card, Descriptions, Divider } from 'antd';
import ProTable from '@ant-design/pro-table';

const columnsOne = [
  {
    dataIndex: 'bh',
    title: '商品编号',
  },
  {
    dataIndex: 'mc',
    title: '商品名称',
  },
  {
    dataIndex: 'tm',
    title: '商品条码',
  },
  {
    dataIndex: 'dj',
    title: '单价',
  },
  {
    dataIndex: 'sl',
    title: '数量（件）',
  },
  {
    dataIndex: 'je',
    title: '金额',
  },
];

const columnsTwo = [
  {
    dataIndex: 'sj',
    title: '时间',
    key: 'sj',
  },
  {
    dataIndex: 'jd',
    title: '当前进度',
  },
  {
    dataIndex: 'zt',
    title: '状态',
  },
  {
    dataIndex: 'czy',
    title: '操作员ID',
  },
  {
    dataIndex: 'hs',
    title: '耗时',
  },
];

const tableListDataSourceOne: any = [];
const tableListDataSourceTwo: any = [];

for (let i = 1; i < 6; i += 1) {
  tableListDataSourceOne.push({
    bh: i,
    mc: `商品名称${i}`,
    tm: `123456789-${i}`,
    dj: `${i}.${i}0`,
    sl: i,
    je: Math.floor(Math.random() * 100 + 1),
  });
  tableListDataSourceTwo.push({
    sj: '2017-10-01 14:10',
    jd: `进度${i}`,
    zt: `状态-${i}`,
    czy: `操作员${i}`,
    hs: Math.floor(Math.random() * 100 + 1),
  });
}

const Basic = () => {
  return (
    <PageContainer>
      <Card>
        <Descriptions title="退款申请" key="th">
          <Descriptions.Item label="取货单号">1000000000</Descriptions.Item>
          <Descriptions.Item label="状态">已取货</Descriptions.Item>
          <Descriptions.Item label="销售单号">1234123421</Descriptions.Item>
          <Descriptions.Item label="子订单">3214321432</Descriptions.Item>
        </Descriptions>
        <Divider />
        <Descriptions title="用户信息" key="yh">
          <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
          <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
          <Descriptions.Item label="菜鸟仓储">菜鸟仓储</Descriptions.Item>
          <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
          <Descriptions.Item label="备注">无</Descriptions.Item>
        </Descriptions>
        <Divider />
        <div className="title">退货商品</div>
        <ProTable
          key="thsp"
          columns={columnsOne}
          request={(params, sorter, filter) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            console.log(params, sorter, filter);
            return Promise.resolve({
              data: tableListDataSourceOne,
              success: true,
            });
          }}
          toolBarRender={false}
          search={false}
          pagination={{
            hideOnSinglePage: true,
          }}
          style={{ marginBottom: '24px' }}
        />
        <div className="title">退货进度</div>
        <ProTable
          key="thjd"
          columns={columnsTwo}
          request={(params, sorter, filter) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            console.log(params, sorter, filter);
            return Promise.resolve({
              data: tableListDataSourceTwo,
              success: true,
            });
          }}
          toolBarRender={false}
          search={false}
          pagination={{
            hideOnSinglePage: true,
          }}
        />
      </Card>
    </PageContainer>
  );
};

export default Basic;
