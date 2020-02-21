import React from "react";
import "./style.css";

export default function Banner() {
	return (
		<div className="bannerImg">
			<header>
				<div className="headerTitle">
					<h1>Dreamshare</h1>
					<button>Login</button>
					<button>Sign up</button>
				</div>
			</header>
			
			<div className="contentBanner">
				<h1>Share Your Holiday Dream</h1>
				<p>And find the perfect partner to fullfill it</p>
				<button>Find your holiday partner</button>
			</div>
		</div>
	);
}
