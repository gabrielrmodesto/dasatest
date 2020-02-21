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
						bioPartner
					}) => (
						<div className="profile">
							<img
								src={profileImg}
								alt="Profile Partner"
								className="imgProfilePartner"
							/>
							<div className="iconPartner">
								{iconProfilePartner}
							</div>

							<p className="namePartner">{namePartner}</p>
							<p className="bioPartner">
								{bioPartner}
							</p>
						</div>
					)
				)}
{/* 
				<div className="profile">
					<img
						src={firstProfile}
						alt="Profile Partner"
						className="imgProfilePartner"
					/>
					<div className="iconPartner">
						<IoMdBrush id="secondIcon" size={2} />
					</div>

					<p className="namePartner">Bradley Hunter</p>
					<p className="bioPartner">
						Based in Chicago. I love playing tennis and loud music.
					</p>
				</div>
				<div className="profile">
					<img
						src={firstProfile}
						alt="Profile Partner"
						className="imgProfilePartner"
					/>
					<div className="iconPartner">
						<IoMdCamera id="thirdIcon" />
					</div>

					<p className="namePartner">Bradley Hunter</p>
					<p className="bioPartner">
						Based in Chicago. I love playing tennis and loud music.
					</p>
				</div>
				<div className="profile">
					<img
						src={firstProfile}
						alt="Profile Partner"
						className="imgProfilePartner"
					/>
					<div className="iconPartner">
						<IoMdAirplane id="forthIcon" />
					</div>

					<p className="namePartner">Bradley Hunter</p>
					<p className="bioPartner">
						Based in Chicago. I love playing tennis and loud music.
					</p>
				</div> */}
			</div>
		</>
	);
}
