import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        <Link to='/'>Главная</Link>
      </a>
    ),
    key: '1',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        <Link to='/users'>Пользователи</Link>
      </a>
    ),
    key: '2',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        <Link to='/projects'>Проекты</Link>
      </a>
    ),
    key: '3',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        <Link to='/todo'>ToDo</Link>
      </a>
    ),
    key: '4',
  },
];

const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;


