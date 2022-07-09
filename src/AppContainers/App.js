import React, { Component } from 'react';
import CardList from '../Components/CardList';
import './App.css'
import Scroll from '../Components/Scroll.js'

class App extends Component {
 constructor(prop){
 	super(prop)
 	this.state = {
 		robots: [],
 		searchField: '',
 	}
 }

 componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users=> this.setState({robots:users}))
 }

 onSearchChange = (event) => {
	 this.setState({searchField: event.target.value})
}
 	
	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
	   })
	   if(robots.length===0){
		   return (
			   <div>
			   		<h1>Loading...</h1>
					<p><i>please wait!</i></p>
			   </div>
		   )
	   }else {
		return(
			<div className='tc'>
				<header>
					<h1 className='f1'>My RoboFriends</h1>
					<input className="pa3 ba b--blue bg-light-gray"
					type="search" 
					placeholder="Search robots"
					onChange={this.onSearchChange}
				/>
				</header>
				<Scroll>
						<CardList robots = {filteredRobots} />
				</Scroll>
				<h3>Built by Webranda 2022</h3>
			</div>
		)
	}
	}
}

export default App;