import { Button, Card, Result } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import './index.less';
const Fail = () => {
  return (
    <Card>
      <Result
        status="error"
        title="提交失败"
        subTitle="请核对并修改以下信息后，再重新提交。"
        extra={[
          <Button type="primary" key="1">
            返回修改
          </Button>,
        ]}
      >
        <div className="title">
          <span>您提交的内容有如下错误:</span>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <CloseCircleOutlined style={{ marginRight: '8px', color: '#ff4d4f' }} />
          <span>您的账户已被冻结</span>
          <a style={{ marginLeft: '16px' }}>
            <span>立即解冻</span>
            <RightOutlined />
          </a>
        </div>
        <div>
          <CloseCircleOutlined style={{ marginRight: '8px', color: '#ff4d4f' }} />
          <span>您的账户还不具备申请资格</span>
          <a style={{ marginLeft: '16px' }}>
            <span>立即升级</span>
            <RightOutlined />
          </a>
        </div>
      </Result>
    </Card>
  );
};

export default Fail;
