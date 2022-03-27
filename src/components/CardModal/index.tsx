import React from 'react';
import { Card, Col } from 'antd';
import styles from './index.less';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface Iprops {
  title: string;
  total: string;
  foot: any;
  content: any;
}

const CardModal: React.FC<Iprops> = (props) => {
  const { title, total, foot, content } = props;
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 12 }}
      xl={{ span: 6 }}
      style={{ paddingLeft: '12px', paddingRight: '12px', marginBottom: '24px' }}
    >
      <Card bodyStyle={{ padding: '20px 24px 8px' }}>
        <div className={styles.chartCard}>
          <div className={styles.chartTop}>
            <div className={styles.metaWrap}>
              <div className={styles.meta}>
                <span>{title}</span>
                <ExclamationCircleOutlined className={styles.action} />
              </div>
              <div className={styles.total}>
                <span>{total}</span>
              </div>
            </div>
          </div>
          <div className={styles.content} style={{ height: '46px' }}>
            {content}
          </div>
          {foot}
        </div>
      </Card>
    </Col>
  );
};

export default CardModal;
