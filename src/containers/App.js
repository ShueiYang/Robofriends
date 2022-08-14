import React from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from '../components/Searchbox';
import Scroll from "../components/Scroll"; 
import Errorboundry from "../components/Errorboundry";
import "./App.css"

import { connect } from "react-redux/es/exports";
import { setSearchField, requestRobots } from "../actions";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
        onRequestRobots: () =>  dispatch(requestRobots())
    }
}

class App extends React.Component {
    
    componentDidMount() {
        this.props.onRequestRobots();
    }
        
    render() {
        const { searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
            return isPending ?
            <h1 className="tc">Loading...</h1>
            :   <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange = {onSearchChange}/>
                    <Scroll>
                        <Errorboundry>
                            <Cardlist robots = { filteredRobots }/>
                        </Errorboundry>
                    </Scroll>
                </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
