import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

export default function DataContextProvider({ children }) {
    const [data, setData] = useState([]);

    const saveData = (data) => {
        setData(...data)

    };

    return (
        <DataContext.Provider
            value={{
                data,
                saveData,
            }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);

    if (context === null) {
        throw new Error("useTheme must be used within a DataContextProvider");
    }

    return context;
}