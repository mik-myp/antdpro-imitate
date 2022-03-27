import { PageContainer } from '@ant-design/pro-layout';
import { Card, DatePicker, Form, Input, InputNumber, Button, Radio, Select } from 'antd';
import { useState } from 'react';
import './index.less';
const { RangePicker } = DatePicker;
const { Option } = Select;
const content = <div>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</div>;

const BasicForm = () => {
  const [form] = Form.useForm();
  const [radioValue, setRadioValue] = useState(1);

  const onChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  const onReset = () => {
    form.resetFields();
  };
  const onSubmit = () => {
    console.log(form.getFieldsValue());
  };

  return (
    <PageContainer content={content}>
      <Card>
        <Form form={form} style={{ margin: '8px auto auto', maxWidth: '600px' }} layout="vertical">
          <Form.Item label="标题" name="标题">
            <Input placeholder="给目标起个名字" />
          </Form.Item>
          <Form.Item label="起始日期" name="起始日期">
            <RangePicker />
          </Form.Item>
          <Form.Item label="目标描述" name="目标描述">
            <Input.TextArea placeholder="请输入你的阶段性工作目标" />
          </Form.Item>
          <Form.Item label="衡量标准" name="衡量标准">
            <Input.TextArea placeholder="请输入衡量标准" />
          </Form.Item>
          <Form.Item
            label={
              <>
                <span>客户</span>
                <em className="optional">（选填）</em>
              </>
            }
            name="客户"
            tooltip="目标服务对象"
          >
            <Input placeholder="请描述你服务的客户" />
          </Form.Item>
          <Form.Item
            label={
              <>
                <span>邀评人</span>
                <em className="optional">（选填）</em>
              </>
            }
            name="邀评人"
          >
            <Input placeholder="请直接 @姓名/工号，最多可邀请5人" />
          </Form.Item>
          <Form.Item
            label={
              <>
                <span>权重</span>
                <em className="optional">（选填）</em>
              </>
            }
            name="权重"
          >
            <InputNumber value={0} formatter={(value) => `${value}%`} />
          </Form.Item>
          <Form.Item label="目标公开" name="目标公开" help="客户、邀评人默认被分享">
            <Radio.Group onChange={onChange} value={radioValue}>
              <Radio value={1}>公开</Radio>
              <Radio value={2}>部分公开</Radio>
              <Radio value={3}>不公开</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item hidden={radioValue !== 2} style={{ margin: '8px 0' }} name="同事">
            <Select placeholder="请选择">
              <Option key="1">同事甲</Option>
              <Option key="2">同事乙</Option>
              <Option key="3">同事丙</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
