import React from "react";

const Socials = () => {
	return (
		<div>
			<div className="m-6 text-2xl">
				<h2>Follow Us on Our Socials</h2>
			</div>
			<div className="flex gap-10 justify-self-center font-medium">
				<div>
					<a
						href="https://www.facebook.com/"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png"
							alt="facebook"
							className="w-10 h-10"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://www.instagram.com/"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
							alt="instagram"
							className="w-10 h-10"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://www.x.com/"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png"
							alt="twitter or X"
							className="w-10 h-10"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
							alt="linkedin"
							className="w-10 h-10"
						/>
					</a>
				</div>

				<div>
					<a
						href="https://www.youtube.com/"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png"
							alt="youtube"
							className="w-10 h-10"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
