import React from "react";
import { Link } from "react-router-dom";

const eventData = [
	{
		id: 1,
		cover: "/images/events/event1.jpg",
		title: "Event Title",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 2,
		cover: "/images/events/event2.jpg",
		title: "Event Title",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 3,
		cover: "/images/events/event3.jpg",
		title: "Event Title",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 4,
		cover: "/images/events/event4.jpg",
		title: "Event Title",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const EventCard = () => {
	return (
		<div>
			<div className="flex justify-between my-6">
				<h1 className="text-3xl font-bold">Events</h1>
				<Link
					to={"/"}
					className="py-2 px-6 border-2"
				>
					View All
				</Link>
			</div>

			<div className="flex justify-around gap-8">
				{[0, 1, 2].map((i) => {
					const card = eventData[i];
					return (
						<div
							key={card.id}
							className="h-fit rounded-md shadow-lg"
						>
							<div>
								<img
									src={card.cover}
									alt={card.title}
									className="w-fit h-75 mx-auto"
								/>
							</div>

							<div>
								<h2 className="text-2xl p-4">{card.title}</h2>
							</div>

							<div>
								<p className="px-4">{card.desc}</p>
							</div>

							<div className="p-6">
								<Link
									to={"/"}
									className="border-2 py-2 px-6"
								>
									View Event
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default EventCard;
