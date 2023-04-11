import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Проект',
    dataIndex: 'project',
    key: 'project',
    render: (_, { project }) => (
      <>
            <div>
              {project.name}
            </div>
      </>
    ),
  },
  {
    title: 'Заметка',
    dataIndex: 'text',
    key: 'text',
  },
  {
    title: 'User id',
    dataIndex: 'user',
    key: 'user',
  },
];

const TodoList = ({todos}) => <Table columns={columns} dataSource={todos} />;

export default TodoList;