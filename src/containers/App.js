import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import '../containers/App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    //componentDidMount methd is called after it's been rendered
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }//onsearchchange method updates the searchfield state
    //based on user input
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    //The render method is where the component’s UI is defined.
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //below,if there's a delay display loading (if, else)  LOADING BAR
        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return !robots.length ?
                <h2>Loading</h2> :
                (
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <Cardlist robots={filteredRobots} />
                        </Scroll>

                    </div>
                );
        }
    }

}
export default App;

