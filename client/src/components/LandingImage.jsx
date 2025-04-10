import React, { useState, useEffect, use } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LandingImages = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const images = [
		"/images/landing/intro.webp",
		"/images/landing/photo1.webp",
		"/images/landing/photo2.webp",
		"/images/landing/photo3.webp",
		"/images/landing/photo4.webp",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(
				(previousImage) => (previousImage + 1) % images.length
			);
		}, 3000);
		return () => clearInterval(interval);
	}, [images.length]);

	const previousImage = () => {
		setCurrentImage(
			(previousImage) =>
				(previousImage - 1 + images.length) % images.length
		);
	};

	const nextImage = () => {
		setCurrentImage((previousImage) => (previousImage + 1) % images.length);
	};

	return (
		<div className="w-full overflow-hidden relative">
			<div
				className="flex transition-transform duration-1000 ease-in-out"
				style={{ transform: `translateX(-${currentImage * 100}%)` }}
			>
				{images.map((img, index) => (
					<img
						key={index}
						src={img}
						className="w-full h-5xl object-cover flex-shrink-0"
						style={{height: 650}}
					/>
				))}
			</div>

			<div>
				<button
					onClick={previousImage}
					className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-gray-400 to-transparent text-black opacity-0 hover:opacity-100 transition-opacity p-4"
				>
					<ChevronLeft />
				</button>

				<button
					onClick={nextImage}
					className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-gray-400 to-transparent text-black opacity-0 hover:opacity-100 transition-opacity"
				>
					<span className="absolute right-0 p-4"><ChevronRight /></span>
				</button>
			</div>
		</div>
	);
};

export default LandingImages;
