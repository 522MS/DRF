import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'First name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
];


const UserList = ({users}) => <Table columns={columns} dataSource={users} />;


export default UserList;
