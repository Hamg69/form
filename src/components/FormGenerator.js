import React, { useState } from 'react';

class GenerateForm extends React.Component {

	state = {
		dataValue: [
			{location: ""},
			{station: ""},
			{amount: ""},
			{date: ""},
			{agreement: ""}
		]
	}
	collectData = (event) => {
		let values = []
		this.setState({ dataValue: values.map(value => value = event.target.value) })
	}
	render() {
	const {data} = this.props
    return(
		<div>
		<div>{JSON.stringify(this.state)}</div>
		<form>
			{data.map(data => (
			<div key = {data.label}>
			<label>{data.label}</label>
			<input type={data.type} 
			name = {data.name} placeholder={data.placeholder}  
			required = {data.required} 
			value = {this.state.dataValue.map(data => data)} 
			onChange = {this.collectData}
			/>
			</div>
			))}
			<button type="submit" value="Submit">Submit</button>
		</form>
		</div>
		)
	}	
}
/*<form>
		<label>Full Name:</label>
		<input type="text" name="username" placeholder="John Smith" required/><br/>

		<label for="email">Email:</label>
		<input type="email" name="email" placeholder="email@example.com" required/><br/> 

		<label>Amount: </label>
		<input type="number" name="number" placeholder="mobile number" minlength="12"/><br/>
		
		<label>Date: </label>
        <input type="date" name="input" required placeholder="dd-mm-yyyy"/>

		<br/>
			<label for="agree">I agree to pay upon order</label>
			<input type="checkbox" name="agreement" placeholder=" " value="Agree"/>
        <br/>

		<select>
        	<option value="move" >Yes</option>
        	<option value="currentlyReading">No</option>
		</select>

        <input type="submit" value="submit"/>
	</form>*/

export default GenerateForm
