import React from "react";
import firstProfile from "../assets/firstProfile.jpg";
import secondProfile from "../assets/secondProfile.jpg";
import thirdProfile from "../assets/thirdProfile.jpg";
import forthProfile from "../assets/forthProfile.jpg";
import { FaMusic } from "react-icons/fa";
import { IoMdBrush, IoMdCamera, IoMdAirplane } from "react-icons/io";
import Partner from "../components/Partner";
import "./style.css";

export default function Profiles() {
	const itemsProfile = [
		{
			profileImg: firstProfile,
			iconProfilePartner: <FaMusic />,
			namePartner: "Bradley Hunter",
			bioPartner:
				"Based in Chicago. I love playing tennis and loud music."
		},
		{
			profileImg: secondProfile,
			iconProfilePartner: <IoMdBrush />,
			namePartner: "Marie Bennett",
			bioPartner:
				"Currently living in Colorado. Lover of art, languages and travelling."
		},
		{
			profileImg: thirdProfile,
			iconProfilePartner: <IoMdCamera />,
			namePartner: "Diana Wells",
			bioPartner:
				"Living in Athene, Greece. I love black and white classics, chillout music and green tea."
		},
		{
			profileImg: forthProfile,
			iconProfilePartner: <IoMdAirplane />,
			namePartner: "Christopher Profile",
			bioPartner:
				"Star Wars fanatic. I have a persistent enthusiasm to create new things."
		}
	];
	return (
		<>
			<div className="partnerTitleSection">
				<h2>Meet a partner for you best</h2>
			</div>
			<Partner partnerProfile={itemsProfile} />
			<div className="buttonPartners">
				<button>See others partners</button>
			</div>
		</>
	);
}
