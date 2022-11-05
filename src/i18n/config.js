import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getLanguage = () => window.navigator.userLanguage || window.navigator.language

i18n.use(initReactI18next).init({
    fallbackLng: 'fr',
    lng: getLanguage(),
    react: {
        bindI18n: 'loaded languageChanged',
        bindI18nStore: 'added',
        useSuspense: true
    },
    resources: {
        fr: {
            translations: require('./locales/fr/translations.json')
        },
        en: {
            translations: require('./locales/en/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
})

i18n.languages = ['fr', 'en'];

export default i18n;