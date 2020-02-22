import React from "react";
import "./style.css";

export default function PartnerForm() {
	return (
		<>
			<div className="formTitle">
				<h2>Crate your holiday</h2>
			</div>
			<div className="formText">
				<p>Hi! What are your holiday interests?</p>
			</div>
			<form>
				<input type="text" className="inputFormPartner" placeholder="Enter your interest" />
				<button className="btnFormPartner">Search partners</button>
			</form>
		</>
	);
}
