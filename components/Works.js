import React from 'react'

const Works = () => {
  return (
    <main id="work" className=" pb-5 text-center bg-primary">
					<p className="display-4 text-light fw-bold pt-5">My Work's</p>
					<p>see my work</p>
					<div className="container trabajos d-flex flex-wrap justify-content-center">
						<a href="https://pricebitcoin.netlify.app/" rel="noreferrer" target="_blank">
							<picture>
							<img
								height="250px"
								width="300px"
								src="work1.jpg"
								alt="trabajo1"
								className="rounded"
							/>
							</picture>
						</a>
						<a href="https://todolist-eo.netlify.app/" rel="noreferrer" target="_blank">
						<picture>
							<img
								height="250px"
								width="300px"
								src="work2.png"
								alt="trabajo1"
								className="rounded"
							/>
						</picture>
						</a>
						<a href="https://rickmorty-eo.netlify.app/" rel="noreferrer" target="_blank">
						<picture>
							<img
								height="250px"
								width="300px"
								src="work3.jpg"
								alt="trabajo1"
								className="rounded"
							/>
						</picture>
						</a>
						<a
							href="https://calculadoradescuentos.netlify.app/"  rel="noreferrer"
							target="_blank"
						>
						<picture>
							<img
								height="250px"
								width="300px"
								src="work4.png"
								alt="trabajo1"
								className="rounded"
							/>
						</picture>
						</a>
					</div>
				</main>
  )
}

export default Works