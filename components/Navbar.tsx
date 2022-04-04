import {
    faHome,
    faMoonStars,
    faRightToBracket,
    faSun,
} from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC } from 'react';
import { useTheme } from '../hooks/useTheme';

import styles from './scss/Navbar.module.scss';

interface navbarItem {
    icon?: any;
    toggler?: boolean;
    text: string;
    link?: string;
}

const NavbarItem: FC<navbarItem> = ({ icon, toggler, text, link }) => {
    const [activeTheme, setTheme] = useTheme();
    return (
        <>
            {toggler ? (
                <div onClick={() => setTheme()} className={styles.item}>
                    <FontAwesomeIcon
                        icon={activeTheme === 'dark' ? faSun : faMoonStars}
                    />
                    <span className={styles.text}>{text}</span>
                </div>
            ) : (
                <Link href={link}>
                    <div className={styles.item}>
                        <FontAwesomeIcon icon={icon} />
                        <span className={styles.text}>{text}</span>
                    </div>
                </Link>
            )}
        </>
    );
};

const Navbar: FC = () => {
    return (
        <div className={styles.navbar}>
            <NavbarItem icon={faHome} link='/' text='Home' />
            <NavbarItem toggler text='Theme' />
            <NavbarItem icon={faRightToBracket} link='/login' text='Login' />
        </div>
    );
};

export default Navbar;
