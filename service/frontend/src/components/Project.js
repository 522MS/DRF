import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ссылка',
    dataIndex: 'link',
    key: 'link',
  },
  {
    title: 'Users',
    dataIndex: 'users',
    key: 'users',
    render: (_, { users }) => (
      <>
        {users.map((user) => {
          return (
            <div>
              {user}
            </div>
          );
        })}
      </>
    ),
  },
];


const ProjectList = ({projects}) => <Table columns={columns} dataSource={projects} />;

export default ProjectList;