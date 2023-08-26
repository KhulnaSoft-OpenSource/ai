import { KHULNASOFT_OPENSOURCE_AUTH_TOKEN_KEY } from "../constants";

const setAuthTokenInChromeStorage = async (accessToken: string): Promise<void> => new Promise((resolve, reject) => {
    chrome.storage.sync.set({ [KHULNASOFT_OPENSOURCE_AUTH_TOKEN_KEY]: accessToken }, () => {
        if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
        } else {
            resolve();
        }
    });
});

export default setAuthTokenInChromeStorage;

