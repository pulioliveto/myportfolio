import Link from 'next/link'


const Header = () => {
	return (
		<>
			<nav id="header-a" className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<Link href="/">
					<a id="title_name" className="navbar-brand ms-3 text-light" >
						Emiliano Oliveto
					</a>
					</Link>
					
					
					<div className="collapse navbar-collapse" id="navbarNav">
						<div className="container d-flex flex-row-reverse">
							<ul className="navbar-nav">
								
								<li className="nav-item">
									<Link href="/#tech">
									<a className="nav-link">
										Technologies
									</a>
									</Link>
									
								</li>
								<li className="nav-item">
									<Link href="/#work">
									<a className="nav-link" >Work</a>
									</Link>
									
										
									
								</li>
								<li className="nav-item">
									<Link href="/#contact">
									<a className="nav-link" >Contact</a>
									</Link>
									
										
									
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
