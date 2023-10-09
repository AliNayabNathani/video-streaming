import { createContext, useContext, useState } from 'react';

const DetailContext = createContext();

export const useSearchContext = () => useContext(DetailContext);

export function SearchContextProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState(null);
    const [isFilter, setIsFilter] = useState(false);
    const updateSearchQuery = text => {
        setSearchQuery(text);
        setIsFilter(false);
    }
    const updateFilter = () => {
        setIsFilter(!isFilter);
    }

    const contextValue = {
        searchQuery,
        updateSearchQuery,
        isFilter,
        updateFilter
    }

    return (
        <DetailContext.Provider value={contextValue}>
            {children}
        </DetailContext.Provider>
    );
}