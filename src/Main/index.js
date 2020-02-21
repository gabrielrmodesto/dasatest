import React from "react";
import "./main.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Steps from "../Steps";
import Profiles from "../Profiles";

export default function Main() {
	return (
		<>
			<Banner />
			<section className="steps">
				<Steps />
			</section>
			<section className="partners">
				<Profiles />
			</section>
			<Footer />
		</>
	);
}
