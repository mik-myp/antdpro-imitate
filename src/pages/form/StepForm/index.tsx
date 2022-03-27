import { PageContainer } from '@ant-design/pro-layout';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormSelect,
  ProFormMoney,
} from '@ant-design/pro-form';
import { Alert, Button, Card, Descriptions, Divider, Result } from 'antd';
import './index.less';

const content = <div>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</div>;

const StepForm = () => {
  return (
    <PageContainer content={content}>
      <Card>
        <StepsForm>
          <StepsForm.StepForm title="填写转账信息">
            <ProFormSelect
              label="付款账号"
              name="付款账号"
              width="md"
              required
              placeholder="请选择"
              initialValue="email"
              rules={[{ required: true, message: '请选择付款账户' }]}
              options={[{ value: 'email', label: 'ant-design@alipay.com' }]}
            />
            <ProForm.Group label="付款账号">
              <ProFormSelect
                options={[
                  { value: 'zfb', label: '支付宝' },
                  { value: 'yhzh', label: '银行账户' },
                ]}
                initialValue="zfb"
                width="xs"
                placeholder="请选择"
                rules={[{ required: true, message: '请选择付款账户' }]}
              />
              <ProFormText
                initialValue="test@example.com"
                width="sm"
                placeholder="test@example.com"
                rules={[{ required: true, message: '请输入收款人账户' }]}
              />
            </ProForm.Group>
            <ProFormText
              label="收款人姓名"
              placeholder="请输入收款人姓名"
              width="md"
              required
              initialValue="Alex"
              rules={[{ required: true, message: '请输入收款人姓名' }]}
            />
            <ProFormMoney
              label="转账金额"
              width="md"
              rules={[{ required: true, message: '请输入转账金额' }]}
              required
              initialValue={500}
            />
          </StepsForm.StepForm>
          <StepsForm.StepForm title="确认转账信息">
            <div className="result">
              <Alert
                message="确认转账后，资金将直接打入对方账户，无法退回。"
                type="info"
                showIcon
                closable
                style={{ marginBottom: '24px' }}
              />
              <Descriptions bordered column={1}>
                <Descriptions.Item label="付款账号">ant-design@alipay.com</Descriptions.Item>
                <Descriptions.Item label="收款账户">test@example.com</Descriptions.Item>
                <Descriptions.Item label="收款人姓名">Alex</Descriptions.Item>
                <Descriptions.Item label="转账金额" contentStyle={{ fontSize: '24px' }}>
                  501.00元
                </Descriptions.Item>
              </Descriptions>
              <Divider style={{ margin: '24px 0' }} />
              <ProFormText.Password label="支付密码" width="md" name="password" />
            </div>
          </StepsForm.StepForm>
          <StepsForm.StepForm title="完成">
            <div className="result">
              <Result
                status="success"
                title="操作成功"
                subTitle="预计两小时内到账"
                extra={[
                  <Button type="primary" key="again">
                    再转一笔
                  </Button>,
                  <Button key="see">查看账单</Button>,
                ]}
              >
                <Descriptions column={1}>
                  <Descriptions.Item label="付款账号">ant-design@alipay.com</Descriptions.Item>
                  <Descriptions.Item label="收款账户">test@example.com</Descriptions.Item>
                  <Descriptions.Item label="收款人姓名">Alex</Descriptions.Item>
                  <Descriptions.Item label="转账金额" contentStyle={{ fontSize: '24px' }}>
                    501.00元
                  </Descriptions.Item>
                </Descriptions>
              </Result>
            </div>
          </StepsForm.StepForm>
        </StepsForm>
      </Card>
      <Divider style={{ margin: '40px 0 24px' }} />
      <h3>说明</h3>
      <h4>转账到支付宝账户</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
      <h4>转账到银行卡</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
    </PageContainer>
  );
};

export default StepForm;
