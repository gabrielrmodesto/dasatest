import React from "react";
import "./main.css";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Steps from "../Steps";
import Partner from "../../components/Partner";

export default function Main() {
	return (
		<>
			<Banner />
			<section className="steps">
				<div className="cardTitleSection">
					<h2>How Dreamshare</h2>
				</div>
				<Steps />
			</section>
			<section className="partners">
				<div className="partnerTitleSection">
					<h2>Meet a partner for you best</h2>
				</div>
				<Partner />
			</section>
			<Footer />
		</>
	);
}
