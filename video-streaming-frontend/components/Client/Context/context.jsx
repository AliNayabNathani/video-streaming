import { createContext, useContext, useState } from 'react';

const DetailContext = createContext();

export const useDetailContext = () => useContext(DetailContext);

export function DetailContextProvider({ children }) {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const updateTitle = text => {
        setTitle(text)
    }

    const updateSubTitle = text => {
        setSubTitle(text);
    }

    const contextValue = {
        title,
        updateTitle,
        subTitle,
        updateSubTitle
    }

    return (
        <DetailContext.Provider value={contextValue}>
            {children}
        </DetailContext.Provider>
    );
}