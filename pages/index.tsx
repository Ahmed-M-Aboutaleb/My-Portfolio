import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
    const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
        ssr: false,
    });
    return <ThemeToggle />;
}
