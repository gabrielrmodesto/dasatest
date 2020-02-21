import React from "react";
import "./style.css";
import Cards from "../components/Cards";

export default function Steps() {
	const cardItems = [
		{
			cardID: "firstStep",
			cardKey: "firstCard",
			badge: "step 1",
			titleCard: "Lorem ipsum dolor sit.",
			textCard:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius saepe expedita ipsum repudiandae perferendis fuga illum quia cumque laudantium."
		},
		{
			cardID: "secondStep",
			cardKey: "secondCard",
			badge: "step 2",
			titleCard: "Lorem ipsum dolor sit.",
			textCard:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius saepe expedita ipsum repudiandae perferendis fuga illum quia cumque laudantium."
		},
		{
			cardID: "thirdStep",
			cardKey: "ThirdCard",
			badge: "step 3",
			titleCard: "Lorem ipsum dolor sit.",
			textCard:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius saepe expedita ipsum repudiandae perferendis fuga illum quia cumque laudantium."
		}
	];
	return (
		<>
			<div className="cardTitleSection">
				<h2>How Dreamshare</h2>
			</div>
			<Cards cardItems={cardItems} />
		</>
	);
}
