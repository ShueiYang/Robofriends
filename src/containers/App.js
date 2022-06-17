import React from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from '../components/Searchbox';
import Scroll from "../components/Scroll"; 
import Errorboundry from "../components/Errorboundry";
import "./App.css"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({robots : user}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return robots.length === 0 ? <h1 className="tc">Loading...</h1>
            :   <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <Errorboundry>
                            <Cardlist robots = { filteredRobots }/>
                        </Errorboundry>
                    </Scroll>
                </div>
    }
}

export default App ;
