import React from 'react'
import STORE from './store'

var HomeView = React.createClass({

	componentWillMount(){
		STORE.on('dataUpdated', ()=> {
			this.setState(STORE.data)
		})
	},

	getInitialState(){
		return STORE.data
	},

	render:function(){
		return(
			<div className='title'>
				<h1>Life RPG</h1>
			<div className='mainContainer'>
				<ActionList />
				<StatList stats={STORE.data}/>
			</div>
			</div>
		)
	}
})

var ActionList = React.createClass({
	render: function(){
		return(
			<div>
				<button onClick={function() {{STORE.set('intellect')}}}>Read A Book</button>
				<button onClick={function() {{STORE.set('strength')}}}>Ride A Bicycle</button>
				<button onClick={function() {{STORE.set('health')}}}>Eat A Banana</button>
				<button onClick={function() {{STORE.set('spirit')}}}>Say Your Prayers</button>
			</div>
		)
	}
})

var StatList = React.createClass({
	render: function(){
		return(
			<div>
				<p>INTELLECT: {this.props.stats.intellect}</p>
				<p>STRENGTH: {this.props.stats.strength}</p>
				<p>HEALTH: {this.props.stats.health}</p>
				<p>SPIRIT: {this.props.stats.spirit}</p>
				<p>VALUE: {this.props.stats.value}</p>
			</div>
		)
	}
})

export default HomeView