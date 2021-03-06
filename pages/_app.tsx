import { Provider } from 'react-redux';
import store from '../lib/store';
import './globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
