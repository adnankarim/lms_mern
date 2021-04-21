import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../components/layouts/baselayout';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (<BaseLayout><Component {...pageProps} /></BaseLayout>)
}

