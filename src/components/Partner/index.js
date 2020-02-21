import React from "react";
import "./style.css";
import firstProfile from "../../assets/firstProfile.jpg";
import { FaMusic } from "react-icons/fa";
import { IoMdBrush, IoMdCamera, IoMdAirplane } from "react-icons/io";

export default function Partner() {
	return (
		<>
			<div className="profilePartner">
				<div className="profile">
					<img
						src={firstProfile}
						alt="Profile Partner"
						className="imgProfilePartner"
					/>
					<div className="iconPartner">
						<FaMusic id="firstIcon" />
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
				</div>
			</div>
		</>
	);
}
