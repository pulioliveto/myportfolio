import 'bootswatch/dist/lux/bootstrap.min.css'
import '../styles/section.css'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
	
	return (
	<>
		<Head>
			<title>Emiliano Oliveto</title>
		</Head>
		<Component {...pageProps} />
	</>
	)

}

export default MyApp;
