import React from "react";
import "./main.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Steps from "../Steps";
import Profiles from "../Profiles";
import PartnerForm from "../PartnerForm";

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
			<section className="formPartner">
				<PartnerForm />
			</section>
			<Footer />
		</>
	);
}
