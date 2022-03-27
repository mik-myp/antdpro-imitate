import { Button, Card, Row, Col, Avatar } from 'antd';
import styles from './index.less';
import { PlusOutlined } from '@ant-design/icons';

const actionList: any = [];

for (let i = 1; i < 7; i++) {
  actionList.push({
    id: i,
    name: `操作${i}`,
  });
}

const membersList = [
  { id: 1, name: '科学搬砖组' },
  { id: 2, name: '全组都是吴彦祖' },
  { id: 3, name: '中二少女团' },
  { id: 4, name: '程序员日常' },
  { id: 5, name: '高逼格设计天团' },
  { id: 6, name: '骗你来学计算机' },
];
const BodyTwo = () => {
  return (
    <>
      <Card
        title="快速开始 / 便捷导航"
        bodyStyle={{ padding: '0px' }}
        style={{ marginBottom: '24px' }}
      >
        <div className={styles.linkGroup}>
          {actionList.map((item: any) => (
            <a href="#" key={item.id}>
              {item.name}
            </a>
          ))}
          <Button
            icon={<PlusOutlined />}
            size="small"
            style={{ color: '#1890ff', borderColor: '#1890ff' }}
          >
            添加
          </Button>
        </div>
      </Card>
      <Card title="XX 指数" bodyStyle={{ padding: '0px' }} style={{ marginBottom: '24px' }}>
        画布
      </Card>
      <Card title="团队" bodyStyle={{ paddingTop: '12px', paddingBottom: '12px' }}>
        <div className={styles.members}>
          <Row style={{ margin: '0 -24px', rowGap: '0px' }}>
            {membersList.map((item) => (
              <Col span={12} style={{ padding: '0 24px' }} key={item.id}>
                <a href="#">
                  <Avatar size="small" src="https://joeschmoe.io/api/v1/random" />
                  <span className={styles.member}>{item.name}</span>
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Card>
    </>
  );
};

export default BodyTwo;
