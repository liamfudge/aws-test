import React from 'react';

class Home extends React.Component {
	constructor(){
		super()
		this.state = {
			test: 'thing'
		}
	}
	
	componentWillMount() {
		fetch('/flower')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({test: data.name})
			})
	}
	render() {
		return(
			<div>
				This is the home page {this.state.test}
			</div>
		)
	}
}

export default Home;