import { useEffect, useState } from 'react';

export function useLocalStorage(itemToGet, defaultReturn) {
    var item = null;
    const ISSERVER = typeof window === 'undefined';
    if (!ISSERVER) {
        const itemGot = localStorage.getItem(itemToGet);
        itemGot ? (item = itemGot) : (item = defaultReturn);
    }
    return item;
}
