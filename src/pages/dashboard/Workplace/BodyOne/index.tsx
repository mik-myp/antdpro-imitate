import { Card, Avatar, List } from 'antd';
import React from 'react';
import styles from './index.less';

const cardList: any = [];
const activeList: any = [];

for (let i = 1; i < 7; i++) {
  cardList.push({
    id: i,
    title: `标题-${i}`,
    content: `这里是标题${i}的内容，这里是标题${i}的内容，这里是标题${i}的内容`,
    team: `负责组${i}`,
    time: '2022-3-23',
  });

  activeList.push({
    id: i,
    content: `这里是标题${i}的内容，这里是标题${i}的内容，这里是标题${i}的内容`,
    time: '2022-3-23',
  });
}

const BodyOne: React.FC = () => {
  return (
    <>
      <Card
        title="进行中的项目"
        extra={<a href="#">全部项目</a>}
        className={styles.projectList}
        style={{ marginBottom: '24px' }}
        bodyStyle={{ padding: '0px' }}
      >
        {cardList.map((item: any) => (
          <Card.Grid className={styles.projectGrid} key={item.id}>
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={item.title}
              description={item.content}
            />
            <div className={styles.projectItemContent}>
              <a href="#">{item.team}</a>
              <span className={styles.datetime}>{item.time}</span>
            </div>
          </Card.Grid>
        ))}
      </Card>
      <Card className={styles.activeCard} title="动态" bodyStyle={{ padding: '0px' }}>
        <List itemLayout="horizontal" className={styles.activitiesList}>
          {activeList.map((item: any) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.content}
                description={<span style={{ color: 'rgba(0,0,0,.25)' }}>{item.time}</span>}
              />
            </List.Item>
          ))}
        </List>
      </Card>
    </>
  );
};

export default BodyOne;
