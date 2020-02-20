import React from "react";
import "./style.css";

export default function Banner() {
	return (
		<div className="bannerImg">
			<div className="headerTitle">
				<h1>Dreamshare</h1>
			</div>
			<div className="buttonHeader">
				<button>Login</button>
				<button>Sign up</button>
			</div>
		</div>
	);
}
