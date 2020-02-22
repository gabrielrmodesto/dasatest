import React from "react";
import "./style.css";

export default function Partner({ partnerProfile }) {
	return (
		<>
			<div className="profilePartner">
				{partnerProfile.map(
					({
						profileImg,
						iconProfilePartner,
						namePartner,
						bioPartner,
						idIcon
					}) => (
						<div className="profile">
							<img
								src={profileImg}
								alt="Profile Partner"
								className="imgProfilePartner"
							/>
							<div className="iconPartner">
								<span id={idIcon}>{iconProfilePartner}</span>
							</div>

							<p className="namePartner">{namePartner}</p>
							<p className="bioPartner">{bioPartner}</p>
						</div>
					)
				)}
			</div>
		</>
	);
}
