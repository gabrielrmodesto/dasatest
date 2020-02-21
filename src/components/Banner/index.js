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
				<p className="bigTitleBanner">Share Your<br /> Holiday Dream</p>
				<p className="subTitleBanner">And find the perfect partner to fullfill it</p>
				<button>Find your holiday partner</button>
			</div>
		</div>
	);
}
