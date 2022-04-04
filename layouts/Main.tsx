import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';

const Main: FC<{ title?: string }> = ({ title, children }) => {
    const Navbar = dynamic(() => import('../components/Navbar'), {
        ssr: false,
    });
    return (
        <>
            <Head>
                <title>
                    {title ? `Ahmed Mohamed - ${title}` : 'Ahmed Mohamed'}
                </title>
            </Head>
            <Navbar />
            <main className={'container'}>{children}</main>
        </>
    );
};
export default Main;
