import React from "react";
import "./style.css";

export default function Banner() {
	return (
		<div className="bannerImg">
			<header>
				<div className="headerTitle">
					<div className="title">
						<h1>Dreamshare</h1>
					</div>
					<div className="btns">
						<button className="loginBtn" type="button">
							Log in
						</button>
						<button className="signBtn" type="button">
							Sign up
						</button>
					</div>
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
