import { View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleModal } from './StylesCalendarModal'
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';



type ModalProps = {
    Visible: () => void,
    day: DateData | undefined,
    setDay: React.Dispatch<React.SetStateAction<undefined>>

}

const ModalCalendar = ({ Visible, day, setDay }: ModalProps) => {


    LocaleConfig.locales['fr'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Mai',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: ['Jan.',
            'Fev.',
            'Mar',
            'Abri',
            'Mai',
            'Jun',
            'Jul.',
            'Ago',
            'Set.',
            'Out.',
            'Nov.',
            'Dez.'],

        dayNames: ['Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Mai',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'],

        dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
        today: "Aujourd'hui"
    };
    LocaleConfig.defaultLocale = 'fr';


    return (
        <View style={{ flex: 1, backgroundColor: "rgba(34, 34, 34, 0.4)" }}>

            <TouchableOpacity onPress={() => Visible()} style={{ flex: 1 }}>
            </TouchableOpacity>


            <View style={StyleModal.containerModal}>
                <Calendar style={StyleModal.calendar}
                    headerStyle={StyleModal.headerStyle}
                    theme={{
                        textDayFontSize: 18,
                        todayTextColor: "#6A5ACD",
                        selectedDayBackgroundColor: "#6A5ACD",
                        selectedDayTextColor: "white",
                        dayTextColor: 'black',
                        monthTextColor: 'white',
                        indicatorColor: 'blue',
                        textMonthFontSize: 16,
                        arrowColor: 'red',
                        textDayStyle: { color: 'black' },
                        textDisabledColor: '#DCDCDC',

                    }}

                    onDayPress={setDay}
                    markedDates={day && {
                        [day.dateString]: { selected: true, },

                    }}

                    minDate={new Date().toDateString()}
                    hideExtraDays={true}
                    renderArrow={(direction: "right" | "left") => (
                        <Feather size={22} color={"#fff"} name={`chevron-${direction}`}
                        />
                    )}
                />
            </View>
            < StatusBar animated backgroundColor={"rgba(34, 34, 34, 0.4)"} />

        </View>
    )
}

export default ModalCalendar