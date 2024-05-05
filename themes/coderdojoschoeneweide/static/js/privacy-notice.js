const localStorageKey = "hidePrivacyNotice";

document.addEventListener("DOMContentLoaded", () => {
    const hidePrivacyNotice = !!localStorage.getItem(localStorageKey);
    console.log(hidePrivacyNotice);

    if (!hidePrivacyNotice) {
        const privacyNotice = document.querySelector("#privacy-notice");
        privacyNotice.classList.remove("hidden");
        privacyNotice.querySelector("button").addEventListener("click", () => {
            privacyNotice.classList.add("hidden");
            localStorage.setItem(localStorageKey, "true");
        });
    }
});
