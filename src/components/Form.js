import React, { useState } from 'react';
import GenerateForm from './FormGenerator';

const Form = () => {

	const data = [ 
		{
		  label : "Incident Location: ",
		  type: "text",
		  placeholder: "Long Street, Ikeja",
		  name: "name",
		  required: "",
		  value: ""
		}, 
		{
		  label : "Nearest Police Station: ",
		  type: "text",
		  placeholder: "Ikorodu Police Station",
		  name: "name",
		  required: "",
		  value: ""
		}, 
		{
		  label : "Amount of Bribe: ",
		  type: "number",
		  placeholder: "#100,000",
		  name: "number",
		  required: "",
		  value: ""
		}, 
		{
		  label : "Date of Incident: ",
		  type: "date",
		  placeholder: "dd-mm-yyyy",
		  name: "input",
		  required: "",
		  value: ""
		}, 
		{
		  label : "I agree that all details above are correct ",
		  type: "checkbox",
		  placeholder: "",
		  name: "agreement",
		  required: "required",
		  value: ""
		}, 
	  ]

    return(
        <GenerateForm data={data}/>
    )
}
export default Form
