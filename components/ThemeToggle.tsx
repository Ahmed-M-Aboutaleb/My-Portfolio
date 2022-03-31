import { faMoonStars, faSun } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useState } from 'react';

const ThemeToggle: FC = () => {
    const theme = window.localStorage.getItem('theme') || 'dark';
    const [activeTheme, setActiveTheme] = useState(theme);
    const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem('theme', activeTheme);
    }, [activeTheme]);
    return (
        <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveTheme(inactiveTheme)}
            icon={activeTheme == 'dark' ? faSun : faMoonStars}
        />
    );
};
export default ThemeToggle;
