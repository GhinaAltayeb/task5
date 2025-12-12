export const RTL_LANGUAGES = ["ar"];

export const updateHTMLDirection = (lang) => {
    const isRTL = RTL_LANGUAGES.includes(lang);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
};
