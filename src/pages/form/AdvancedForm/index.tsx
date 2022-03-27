import React, { useState } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormTimePicker,
} from '@ant-design/pro-form';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { Card, Col, Row } from 'antd';

const content = <div>高级表单常见于一次性输入和提交大批量数据的场景。</div>;

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
// 数据类型
type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: string;
  update_at?: string;
  children?: DataSourceType[];
};
//默认数据
const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    readonly: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    readonly: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
    update_at: '2020-05-26T08:19:22Z',
  },
];
const AdvancedForm = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  // 表格头
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      tooltip: '只读，使用form.getFieldValue获取不到值',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      // 第一行不允许编辑
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: '活动名称二',
      dataIndex: 'readonly',
      tooltip: '只读，使用form.getFieldValue可以获取到值',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      readonly: true,
      width: '15%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (from, { rowKey, rowIndex }) => {
        if (from.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  return (
    <PageContainer content={content}>
      <ProForm
        submitter={{
          render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
        }}
      >
        <Card title="仓库管理" style={{ marginBottom: '24px' }}>
          <Row style={{ marginLeft: '-8px', marginRight: '-8px', rowGap: '0px' }}>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormText
                label="仓库名"
                name="仓库名"
                placeholder="请输入仓库名称"
                rules={[{ required: true, message: '请输入仓库名称' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormText
                label="仓库域名"
                name="仓库域名"
                addonBefore="http://"
                addonAfter=".com"
                placeholder="请输入"
                rules={[{ required: true, message: '请选择' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 10 }}
              xl={{ span: 8, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormSelect
                label="仓库管理员"
                name="仓库管理员"
                placeholder="请选择仓库管理员"
                options={[
                  { value: 'fxx', label: '付晓晓' },
                  { value: 'zmm', label: '张毛毛' },
                ]}
                rules={[{ required: true, message: '请选择管理员' }]}
              />
            </Col>
          </Row>
          <Row style={{ marginLeft: '-8px', marginRight: '-8px', rowGap: '0px' }}>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormSelect
                label="审批人"
                name="审批人"
                placeholder="请选择管理员"
                options={[
                  { value: 'fxx', label: '付晓晓' },
                  { value: 'zmm', label: '张毛毛' },
                ]}
                rules={[{ required: true, message: '请选择审批员' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormDateRangePicker
                label="生效日期"
                name="生效日期"
                width="lg"
                rules={[{ required: true, message: '请选择生效日期' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 10 }}
              xl={{ span: 8, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormSelect
                label="仓库类型"
                name="仓库类型"
                placeholder="请选择仓库类型"
                options={[
                  { value: 'sm', label: '私密' },
                  { value: 'gk', label: '公开' },
                ]}
                rules={[{ required: true, message: '请选择仓库类型' }]}
              />
            </Col>
          </Row>
        </Card>
        <Card title="任务管理" style={{ marginBottom: '24px' }}>
          <Row style={{ marginLeft: '-8px', marginRight: '-8px', rowGap: '0px' }}>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormText
                label="任务名"
                name="任务名"
                placeholder="请输入任务名"
                rules={[{ required: true, message: '请输入任务名' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormText
                label="任务描述"
                name="任务描述"
                placeholder="请输入"
                rules={[{ required: true, message: '请选择' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 10 }}
              xl={{ span: 8, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormSelect
                label="执行人"
                name="执行人"
                placeholder="请选择执行人"
                options={[
                  { value: 'fxx', label: '付晓晓' },
                  { value: 'zmm', label: '张毛毛' },
                ]}
                rules={[{ required: true, message: '请选择管理员' }]}
              />
            </Col>
          </Row>
          <Row style={{ marginLeft: '-8px', marginRight: '-8px', rowGap: '0px' }}>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormSelect
                label="责任人"
                name="责任人"
                placeholder="请选择责任人"
                options={[
                  { value: 'fxx', label: '付晓晓' },
                  { value: 'zmm', label: '张毛毛' },
                ]}
                rules={[{ required: true, message: '请选择审批员' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 6, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormTimePicker
                label="生效日期"
                name="生效日期"
                width="lg"
                rules={[{ required: true, message: '请选择生效日期' }]}
              />
            </Col>
            <Col
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 10 }}
              xl={{ span: 8, offset: 2 }}
              style={{ paddingLeft: '8px', paddingRight: '8px' }}
            >
              <ProFormSelect
                label="任务类型"
                name="任务类型"
                placeholder="请选择任务类型"
                options={[
                  { value: 'sm', label: '私密' },
                  { value: 'gk', label: '公开' },
                ]}
                rules={[{ required: true, message: '请选择任务类型' }]}
              />
            </Col>
          </Row>
        </Card>
        <Card title="成员管理">
          <EditableProTable<DataSourceType>
            rowKey="id"
            maxLength={5}
            scroll={{
              x: 960,
            }}
            // recordCreatorProps={
            //   position !== 'hidden'
            //     ? {
            //         position: position as 'top',
            //         record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
            //       }
            //     : false
            // }
            loading={false}
            // toolBarRender={() => [
            //   <ProFormRadio.Group
            //     key="render"
            //     // fieldProps={{
            //     //   value: position,
            //     //   onChange: (e) => setPosition(e.target.value),
            //     // }}
            //     // options={[
            //     //   {
            //     //     label: '添加到顶部',
            //     //     value: 'top',
            //     //   },
            //     //   {
            //     //     label: '添加到底部',
            //     //     value: 'bottom',
            //     //   },
            //     //   {
            //     //     label: '隐藏',
            //     //     value: 'hidden',
            //     //   },
            //     // ]}
            //   />,
            // ]}
            columns={columns}
            request={async () => ({
              data: defaultData,
              total: 3,
              success: true,
            })}
            value={dataSource}
            onChange={setDataSource}
            editable={{
              type: 'multiple',
              editableKeys,
              onSave: async (rowKey, data, row) => {
                console.log(rowKey, data, row);
                await waitTime(2000);
              },
              onChange: setEditableRowKeys,
            }}
          />
        </Card>
      </ProForm>
    </PageContainer>
  );
};

export default AdvancedForm;
