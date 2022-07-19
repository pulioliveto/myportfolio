import Image from 'next/image'

const Footer = () => {
  return (
    <footer id="contact" className="pt-5 pb-5 text-center bg-dark">
					<h3 className="text-light display-5 fw-bold">Contact</h3>
					<a
						href="mailto:emilianooliveto02@gmail.com"
						target="_blank"
						className="text-light"
					>
						emilianooliveto02@gmail.com
					</a>
					<div className="contact-container d-flex justify-content-center mt-3">
						<a
							href="https://www.linkedin.com/in/emilianooliveto/" rel="noreferrer"
							target="_blank"
						>
							<picture>
							<img
								height="30px"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
								alt="linkedin"
							/>
							</picture>
						</a>
						<a href="https://github.com/pulioliveto" rel="noreferrer" target="_blank">
							<picture>
							<img
								height="30px"
								src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
								alt="github"
							/>
							</picture>
						</a>
						<a href="https://twitter.com/DevPul" rel="noreferrer" target="_blank">
						<picture>
							<img
								height="30px"
								src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
								alt="twitter"
							/>
						</picture>
						</a>
						<a href="https://platzi.com/p/pulioliveto/" rel="noreferrer" target="_blank">
						<picture>
							<img
								height="30px"
								src="https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png"
								alt="platzi"
							/>
						</picture>
						</a>
					</div>
				</footer>
  )
}

export default Footer