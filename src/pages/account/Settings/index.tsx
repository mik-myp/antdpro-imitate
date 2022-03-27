import {
  Form,
  Menu,
  Upload,
  message,
  Button,
  Input,
  Select,
  List,
  Avatar,
  Switch,
} from 'antd';
import React, { useState } from 'react';
import './index.less';
import { UploadOutlined } from '@ant-design/icons';

const dataListOne = [
  { id: 1, title: '账户密码', description: '当前密码强度：强' },
  { id: 1, title: '密保手机', description: '已绑定手机：138****8293' },
  { id: 1, title: '密保问题', description: '未设置密保问题，密保问题可有效保护账户安全' },
  { id: 1, title: '备用邮箱', description: '已绑定邮箱：ant***sign.com' },
  { id: 1, title: 'MFA 设备', description: '未绑定 MFA 设备，绑定后，可以进行二次确认' },
];

const dataListTwo = [
  { id: 1, title: '绑定淘宝', description: '当前未绑定淘宝账号' },
  { id: 1, title: '绑定支付宝', description: '当前未绑定支付宝账号' },
  { id: 1, title: '绑定钉钉', description: '当前未绑定钉钉账号' },
];
const dataListThree = [
  { id: 1, title: '账户密码', description: '其他用户的消息将以站内信的形式通知' },
  { id: 1, title: '系统消息', description: '系统消息将以站内信的形式通知' },
  { id: 1, title: '待办任务', description: '待办任务将以站内信的形式通知' },
];
const Settings = () => {
  const [current, setCurrent] = useState(['1']);
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="main">
      <div className="leftMenu">
        <Menu mode="vertical" selectedKeys={current} onClick={(e) => setCurrent([e.key])}>
          <Menu.Item key="1">基本设置</Menu.Item>
          <Menu.Item key="2">安全设置</Menu.Item>
          <Menu.Item key="3">账号绑定</Menu.Item>
          <Menu.Item key="4">新消息通知</Menu.Item>
        </Menu>
      </div>
      <div className="right">
        {current[0] === '1' ? (
          <>
            <div className="title">基本设置</div>
            <div className="baseView">
              <div className="left">
                <Form layout="vertical">
                  <Form.Item
                    label="邮箱"
                    name="邮箱"
                    rules={[{ required: true, message: '请输入您的邮箱！' }]}
                  >
                    <Input placeholder="请输入" value="antdesign@alipay.com" />
                  </Form.Item>
                  <Form.Item
                    label="昵称"
                    name="昵称"
                    rules={[{ required: true, message: '请输入您的昵称！' }]}
                  >
                    <Input placeholder="请输入" value="Serati Ma" />
                  </Form.Item>
                  <Form.Item label="个人简介" name="个人简介">
                    <Input.TextArea placeholder="个人简介" />
                  </Form.Item>
                  <Form.Item
                    label="国家/地区"
                    name="国家/地区"
                    rules={[{ required: true, message: '请输入国家/地区' }]}
                  >
                    <Select placeholder="请输入" value="中国">
                      <Select.Option key="1">中国</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="所在省市"
                    name="所在省市"
                    rules={[{ required: true, message: '请输入所在省市' }]}
                  >
                    <Select placeholder="请输入">
                      <Select.Option key="1">北京市</Select.Option>
                    </Select>
                    <Select placeholder="请输入" disabled>
                      <Select.Option key="1">直辖市</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="街道地址"
                    name="街道地址"
                    rules={[{ required: true, message: '请输入街道地址' }]}
                  >
                    <Input placeholder="请输入" value="西湖区工专路 77 号" />
                  </Form.Item>
                  <Form.Item
                    label="联系电话"
                    name="联系电话"
                    rules={[{ required: true, message: '请输入联系电话' }]}
                  >
                    <Input placeholder="请输入" value="0752" />
                    <Input placeholder="请输入" value="268888888" />
                  </Form.Item>
                </Form>
              </div>
              <div className="right">
                <div className="avatar">
                  <img
                    src="	https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                    alt="avatar"
                  />
                </div>
                <span>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>更换头像</Button>
                  </Upload>
                </span>
              </div>
            </div>
          </>
        ) : current[0] === '2' ? (
          <>
            <div className="title">安全设置</div>
            <List
              dataSource={dataListOne}
              renderItem={(item) => (
                <List.Item actions={[<a key="1"> 修改</a>]} key={item.id}>
                  <List.Item.Meta title={item.title} description={item.description} />
                </List.Item>
              )}
            />
          </>
        ) : current[0] === '3' ? (
          <>
            <div className="title">账号绑定</div>
            <List
              dataSource={dataListTwo}
              renderItem={(item) => (
                <List.Item actions={[<a key="1">绑定</a>]} key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </>
        ) : (
          <>
            <div className="title">新消息通知</div>
            <List
              dataSource={dataListThree}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Switch key="1" checkedChildren="开" unCheckedChildren="关" defaultChecked />,
                  ]}
                  key={item.id}
                >
                  <List.Item.Meta title={item.title} description={item.description} />
                </List.Item>
              )}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
