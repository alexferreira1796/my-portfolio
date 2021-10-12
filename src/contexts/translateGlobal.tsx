import React from 'react';
import intl from 'react-intl-universal';
import locales from '../locales';

interface ITranslateGlobal {
    currentLocale: string;
    changeLocale: (locale: string) => void;
    getTranslate: (key: string, options?: object) => string;
}

export const TranslateGlobal = React.createContext<ITranslateGlobal>({} as ITranslateGlobal);

const TranslateProvider = ({children}) => {
  const [currentLocale, setCurrentLocale] = React.useState<string>('en-US');
  
    React.useEffect(() => {
        setCurrentLocale( locales[navigator.language] ? navigator.language : 'en-US' );
    }, []);

    intl.init({
        currentLocale,
        locales
    });

    function changeLocale(locale: string): void {
        setCurrentLocale(locale);
    }

    function getTranslate(key: string, options?: object): string {
        return intl.get(key, options);
    }

    return (
        <TranslateGlobal.Provider value={{currentLocale, changeLocale, getTranslate}}>
            {children}
        </TranslateGlobal.Provider>
    )
};

export default TranslateProvider;