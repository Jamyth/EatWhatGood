const LocalStorageKeyPrefix = '@@EatWhatGood_';

export enum LocalStorageKey {
    SETTING_DISTRICT = 'SETTING_DISTRICT',
    HOME = 'HOME',
    RESTAURANT = 'RESTAURANT',
}

function getItem<T>(key: LocalStorageKey): T | null {
    const raw = localStorage.getItem(LocalStorageKeyPrefix + key);
    if (!raw) {
        return null;
    }
    return JSON.parse(raw);
}

function setItem(key: LocalStorageKey, value: string) {
    return localStorage.setItem(LocalStorageKeyPrefix + key, value);
}

export const LocalStorageUtil = Object.freeze({
    getItem,
    setItem,
});
