import React from 'react';
import { Row } from 'antd';
import CardModal from '@/components/CardModal';
import styles from '../../../../components/CardModal/index.less';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const BodyOne: React.FC = () => {
  return (
    <>
      <Row gutter={24}>
        <CardModal
          key="1"
          title="总销售额"
          total="¥ 126,560"
          content={
            <div className={styles.contenFixed}>
              <div className={styles.trendItem} style={{ marginRight: '16px' }}>
                <span>
                  周同比
                  <span className={styles.trendText}>12%</span>
                </span>
                <CaretUpOutlined className={styles.up} />
              </div>
              <div className={styles.trendItem}>
                <span>
                  日同比
                  <span className={styles.trendText}>11%</span>
                </span>
                <CaretDownOutlined className={styles.down} />
              </div>
            </div>
          }
          foot={
            <div className={styles.footer}>
              <div className={styles.field}>
                <span className={styles.label}>日销售额</span>
                <span className={styles.number}>￥12,423</span>
              </div>
            </div>
          }
        />
        <CardModal
          key="2"
          title="访问量"
          total="8,846"
          content={
            <div className={styles.contenFixed}>
              <div>这里是画布，实在不会</div>
            </div>
          }
          foot={
            <div className={styles.footer}>
              <div className={styles.field}>
                <span className={styles.label}>日访问量</span>
                <span className={styles.number}>1,234</span>
              </div>
            </div>
          }
        />
        <CardModal
          key="3"
          title="支付笔数"
          total="6,560"
          content={
            <div className={styles.contenFixed}>
              <div>这里是画布，实在不会</div>
            </div>
          }
          foot={
            <div className={styles.footer}>
              <div className={styles.field}>
                <span className={styles.label}>转化率</span>
                <span className={styles.number}>60%</span>
              </div>
            </div>
          }
        />
        <CardModal
          key="4"
          title="运营活动效果"
          total="78%"
          content={
            <div className={styles.contenFixed}>
              <div>这里是画布，实在不会</div>
            </div>
          }
          foot={
            <div className={styles.footer}>
              <div className={styles.contenFixed}>
                <span className={styles.trendItem} style={{ marginRight: '19px' }}>
                  <span>
                    周同比
                    <span style={{ marginLeft: '8px', color: 'rgba(0, 0, 0, 0.85)' }}>12%</span>
                  </span>
                  <CaretUpOutlined style={{ marginLeft: '4px', color: '#f5222d' }} />
                </span>
                <span className={styles.trendItem}>
                  <span>
                    日同比
                    <span style={{ marginLeft: '8px', color: 'rgba(0, 0, 0, 0.85)' }}>11%</span>
                  </span>
                  <CaretDownOutlined style={{ marginLeft: '4px', color: '#52c41a' }} />
                </span>
              </div>
            </div>
          }
        />
      </Row>
    </>
  );
};

export default BodyOne;
