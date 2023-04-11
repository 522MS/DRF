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
import LoginForm from "./components/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from 'universal-cookie';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'todos': [],
            'projects': [],
            'token': ''
        }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, ()=>this.load_data())
    }


    is_authenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, ()=>this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password}).then(response => {
            this.set_token(response.data['token'])
            console.log(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated())
        {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    load_data() {
        const headers = this.get_headers()

        axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
            const users = response.data.results
            this.setState(
                {
                    'users': users
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
            const todos = response.data.results
            this.setState(
                {
                    'todos': todos
                }
            )
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(response => {
            const projects = response.data.results
            this.setState(
                {
                    'projects': projects
                }
            )
        }).catch(error => console.log(error))
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                <MenuContent is_authenticated={() => this.is_authenticated()} logout={() => this.logout()} />
                        <Routes>
                            <Route path='/' element={<Main />} />
                            <Route path='/users' element={<UserList users={this.state.users}/>} />
                            <Route path='/todo' element={<Todolist  todos={this.state.todos} />} />
                            <Route path='/projects' element={<ProjectList  projects={this.state.projects} />} />
                            <Route path='/login' element={<LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <FooterContent/>
                </BrowserRouter>
            </div>

        )
    }
}

export default App;

