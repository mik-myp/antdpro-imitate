import { Card, Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;
import styles from './index.less';

const tabsList: any = [];
for (let i = 0; i < 10; i++) {
  tabsList.push({ id: i, number: Math.floor(Math.random() * 100 + 1) });
}

const BodyFour: React.FC = () => {
  return (
    <Card style={{ marginTop: '32px' }}>
      <Tabs>
        {tabsList.map((item: any) => (
          <TabPane
            key={item.id}
            tab={
              <div className={styles.numberInfo}>
                <div className={styles.numberInfoTitle}>Stores{item.id}</div>
                <div className={styles.numberInfoSubTitle}>转化率</div>
                <div className={styles.numberInfoValue}>
                  <span>{item.number}%</span>
                </div>
              </div>
            }
          >
            等我会了画布再来整你们！！！ Content of tab {item.id}
          </TabPane>
        ))}
      </Tabs>
    </Card>
  );
};

export default BodyFour;
