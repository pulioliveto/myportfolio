const Aboutcard = () => {
  return (
    <header className="row container py-5 m-auto">
					<div className="col-md-12">
						<div className="card card-body  rounded-3 carta-header">
							<div className="row">
								<div className="col-md-4">
									<img
										src="Captura.jpg"
										alt="logo"
										className="img-fluid img-thumbnail rounded-circle ms-3 shadow-sm bg-primary"
									/>
								</div>
								<div className="col-md-8 my-5 text-center">
									<h2 className="text-info fw-bold">Hi, I am</h2>
									<h1
										id="title-name"
										className="display-4 text-light mt-3 fw-bold m-auto"
									>
										Emiliano Oliveto
									</h1>
									<p className="mt-3 text-light fs-3">
										<cite>Front-End Developer</cite>
									</p>
									<a
										href="cv.pdf"
										download="CV Emiliano Oliveto"
										className="btn btn-light mt-2 rounded-pill"
									>
										Download CV
									</a>
								</div>
							</div>
						</div>
					</div>
				</header>
  )
}

export default Aboutcard