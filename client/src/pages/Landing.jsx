import React from "react";

import LandingImage from "../components/LandingImage";
import AlumniCard from "../components/AlumniCard";
import EventCard from "../components/EventCard";
import Socials from "../components/Socials";

const Landing = () => {
	return (
		<div>
			<div className="m-6 align-middle text-center">
				<LandingImage />
			</div>

			<div className="m-6 align-middle text-center">
				<AlumniCard />
			</div>

			<div className="m-6 align-middle py-6 px-24">
				<EventCard />
			</div>

			<div className="m-6 align-middle text-center">
				<Socials />
			</div>
		</div>
	);
};

export default Landing;
