import React from "react";
import "./style.css";

export default function Cards({ cardItems }) {
	return (
		<>
			<div className="card">
				{cardItems.map(
					({
						cardID,
						cardKey,
						badge,
						titleCard,
						textCard
					}) => (
						<div className="card-body" id={cardID}>
							<div className="card-content" key={cardKey}>
								<p className="badge">{badge}</p>
								<p className="titleCard">{titleCard}</p>
								<p className="textCard">{textCard}</p>
							</div>
						</div>
					)
				)}
			</div>
		</>
	);
}
