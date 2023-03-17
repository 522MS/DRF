import React from 'react';
import './App.css';
import axios from 'axios';
import UserList from "./components/User";
import FooterContent from "./components/Footer";
import MenuContent from "./components/Menu";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import Todolist from "./components/Todo";
import ProjectList from "./components/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        'users': [],
        'todos': [],
        'projects': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            const users = response.data.results
            this.setState(
                {
                    'users': users
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/').then(response => {
            const todos = response.data.results
            this.setState(
                {
                    'todos': todos
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
            const projects = response.data.results
            this.setState(
                {
                    'projects': projects
                }
            )
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                    <MenuContent/>
                        <Routes>
                            <Route path='/' element={<Main />} />
                            <Route path='/users' element={<UserList users={this.state.users}/>} />
                            <Route path='/todo' element={<Todolist  todos={this.state.todos} />} />
                            <Route path='/projects' element={<ProjectList  projects={this.state.projects} />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <FooterContent/>
                </BrowserRouter>
            </div>

        )
    }
}

export default App;

