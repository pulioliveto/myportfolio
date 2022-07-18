import Layout from "../components/Layout";
import Aboutcard from "../components/Aboutcard";
import Techme from "../components/Techme";
import Works from "../components/Works";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Layout>
				{/* Card About Me*/}
				<Aboutcard />

				{/* second section - my technologies*/}
				<Techme />

				{/* section my works -  */}
				<Works />

				{/* FOOTER! */}
				<Footer />
			</Layout>
		</>
	);
}
