import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useTheme() {
    var theme = useLocalStorage('theme', 'dark');
    const [activeTheme, setActiveTheme] = useState(theme);
    const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem('theme', activeTheme);
    }, [activeTheme]);
    function setTheme() {
        setActiveTheme(inactiveTheme);
    }
    return [activeTheme, setTheme] as const;
}
