import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: '排名',
    dataIndex: 'ranking',
    key: 'ranking',
  },
  {
    title: '搜索关键词',
    dataIndex: 'keywords',
    key: 'keywords',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '用户数',
    dataIndex: 'usersNumber',
    key: 'usersNumber',
    sorter: (a, b) => a.usersNumber - b.usersNumber,
  },
  {
    title: '周涨幅',
    dataIndex: 'weeklyGains',
    key: 'weeklyGains',
    sorter: (a, b) => a.weeklyGains - b.weeklyGains,
    render: (text) => (
      <div>
        <span>{text}</span>
        {text > '50' ? (
          <CaretUpOutlined style={{ marginLeft: '4px', color: '#f5222d' }} />
        ) : (
          <CaretDownOutlined style={{ marginLeft: '4px', color: '#52c41a' }} />
        )}
      </div>
    ),
  },
];

export default columns;
