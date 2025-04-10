import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
	{
		id: 1,
		image: "/images/alumni/alumni1.avif",
		name: "Alumni 1",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 2,
		image: "/images/alumni/alumni2.avif",
		name: "Alumni 2",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 3,
		image: "/images/alumni/alumni3.avif",
		name: "Alumni 3",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 4,
		image: "/images/alumni/alumni4.avif",
		name: "Alumni 4",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: 5,
		image: "/images/alumni/alumni5.avif",
		name: "Alumni 5",
		desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const AlumniCard = () => {
	const [startIndex, setStartIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	const [direction, setDirection] = useState("next");
	const sliderRef = useRef(null);

	const getCard = (index) => {
		const length = cardData.length;
		return cardData[((index % length) + length) % length];
	};

	const smoothTransition = (newIndex, direction) => {
		setAnimating(true);
		sliderRef.current.style.transition = "transform 1.5s ease-in-out";
		sliderRef.current.style.transform =
			direction === "next" ? "translateX(-352px)" : "translateX(352px)";

		setTimeout(() => {
			sliderRef.current.style.transition = "none";
			sliderRef.current.style.transform = "translateX(0)";
			setStartIndex(newIndex);
			setAnimating(false);
		}, 1505);
	};

	const handleNext = () => {
		if (animating) return;
		setDirection("next");
		const newIndex = (startIndex + 1) % cardData.length;
		smoothTransition(newIndex, "next");
	};

	const handlePrev = () => {
		if (animating) return;
		setDirection("prev");
		const newIndex = (startIndex - 1 + cardData.length) % cardData.length;
		smoothTransition(newIndex, "prev");
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000);
		return () => clearInterval(interval);
	}, [startIndex]);

	return (
		<div className="flex items-center gap-6 py-6 px-4 w-full overflow-hidden h-2xl justify-around">
			<button
				onClick={handlePrev}
				className="text-black p-2 hover:bg-gray-500 rounded-full"
			>
				<ChevronLeft size={32} />
			</button>

			<div className="relative w-[1008px] overflow-hidden">
				<div
					ref={sliderRef}
					className="flex gap-12"
				>
					{[0, 1, 2, 3].map((i) => {
						const card = getCard(startIndex + i);
						return (
							<div
								key={`${card.id}-${i}`}
								className="w-76 h-fit bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 transition-transform duration-500 opacity-90 text-black p-6"
							>
								<div>
									<img
										src={card.image}
										className="w-full h-full object-cover"
									/>
								</div>

								<div>
									<h1 className="text-2xl my-5 mx-auto">{card.name}</h1>
								</div>

								<div>
									<p>{card.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<button
				onClick={handleNext}
				className="text-black p-2 hover:bg-gray-500 rounded-full"
			>
				<ChevronRight size={32} />
			</button>
		</div>
	);
};

export default AlumniCard;
