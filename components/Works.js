

const Works = () => {
  return (
    <main id="work" className=" pb-5 text-center bg-primary">
					<p id='subtitle' className="display-4 text-light fw-bold pt-5">Work&apos;s</p>
					<p>see my work</p>
					<div className="container trabajos d-flex flex-wrap justify-content-center">
						<a href="https://pricebitcoin.netlify.app/" target="_blank" rel="noopener noreferrer" >
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
						<a href="https://todolist-eo.netlify.app/" target="_blank" rel="noopener noreferrer" >
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
						<a href="https://rickmorty-eo.netlify.app/" target="_blank" rel="noopener noreferrer" >
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
							href="https://calculadoradescuentos.netlify.app/"  target="_blank" rel="noopener noreferrer"
							
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