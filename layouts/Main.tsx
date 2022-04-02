import { FC } from 'react';
import Navbar from '../components/Navbar';

const Main: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};
export default Main;
