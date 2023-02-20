import React from 'react';
import './App.css';
import axios from 'axios';
import UserList from "./components/User";
import FooterContent from "./components/Footer";
import MenuContent from "./components/Menu";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            const users = response.data
            this.setState(
                {
                    'users': users
                }
            )
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <MenuContent/>
                <UserList users={this.state.users}/>
                <FooterContent/>
            </div>

        )
    }
}

export default App;

