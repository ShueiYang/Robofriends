import React, { useEffect } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from '../components/Searchbox';
import Scroll from "../components/Scroll"; 
import "./App.css"

import { useDispatch, useSelector } from "react-redux";
import { searchRobotsField } from "../features/searchRobot.slice";
import { fetchRobots } from "../features/requestRobot.slice";


function App () {
    
    const dispatch = useDispatch();
    const searchField = useSelector((state)=> state.searchRobots.searchField)
    const { isPending, robots, error } = useSelector((state)=> state.requestRobots)
    
    function handleChange (event) {
        dispatch(searchRobotsField(event.target.value))
    }
    
    useEffect(() => {
        dispatch(fetchRobots()) 
    }, [dispatch]);   

        
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
       
        
    if(isPending)
        return <div className="container"><h1>Loading...</h1></div> 
        
    else if(error)
        return <div className="container"><h1>{error}</h1></div>
    
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Searchbox searchChange= {handleChange}/>
                <Scroll>
                    <Cardlist robots= {filteredRobots}/>
                </Scroll>
            </div> 
        )
}
export default App;  
                