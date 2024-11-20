import React, { createContext, PropsWithChildren, useState, } from "react";
import { DateData } from 'react-native-calendars'


type CalendarType = {
    days: DateData | undefined,
    setDays: React.Dispatch<React.SetStateAction<undefined>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}


export const UiContext = createContext<CalendarType>({
    days: undefined,
    setDays: function (value: React.SetStateAction<undefined>): void { },
    loading: false,
    setLoading: function (value: React.SetStateAction<boolean>): void { },

})

export default function UiContextProvider({ children }: PropsWithChildren) {

    const [days, setDays] = useState()
    const [loading, setLoading] = useState(false)


    return (<UiContext.Provider value={{ days, setDays, loading, setLoading, }}>
        {children}
    </UiContext.Provider>)
}