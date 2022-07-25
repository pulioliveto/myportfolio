
const Techme = () => {
  return (
	<section id="tech" className="pb-5">
					<div className="text-center">
						<p id="subtitle" className="text-light bg-gradient display-2 py-5 fw-bold ">
							Technologies
						</p>
						<div className="img-technologies container d-flex flex-wrap justify-content-center p-3">
							<picture>
							<img
								className="rounded-3 img-technology"
								height="75px"
								src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
								alt="logo-html"
							/>
							</picture>
							<picture>
							<img
								className="rounded-3 img-technology"
								height="75px"
								src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
								alt="logo-css"
							/>
							</picture>
							<picture>
							<img
								className="rounded-3 img-technology"
								height="75px"
								src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
								alt="logo-js"
							/>
							</picture>
							<picture>
							<img
								className="rounded-3 img-technology img-react"
								height="75px"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
								alt="logo-react"
							/>
							</picture>
							<picture>
							<img
								className="rounded-3 img-technology"
								height="75px"
								src="git.png"
								alt="logo-git"
							/>
							</picture>
							<picture>
							<img
								className="rounded-3 img-technology"
								height="75px"
								src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
								alt="logo-bootstrap"
							/>
							</picture>
							<picture>
							<img
								className="rounded-3 img-technology"
								height="75px"
								src="https://media.graphcms.com/VKHHNvEETYqZRkqgjybc"
								alt="logo-next"
							/>
							</picture>
						</div>
						<a href="https://github.com/pulioliveto" target="_blank" rel="noopener noreferrer">
							<button className="btn btn-light mt-5 rounded-pill">
								Check my github
							</button>
						</a>
					</div>
				</section>
  )
}

export default Techme