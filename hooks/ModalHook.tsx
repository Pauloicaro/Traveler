import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { DateData } from 'react-native-calendars'
import { styles } from '../hooks/HookStyles'


type DaysTypes = {
  Visible: () => void,
  day: DateData | undefined,
}


const ModalHook = ({ Visible, day }: DaysTypes) => {
  const [date] = useState("2024-10-20")


  const HandleNavigation = () => {
    Visible()
  }


  return (
    <SafeAreaView>
      <TouchableOpacity activeOpacity={0.3} onPress={HandleNavigation}
        style={styles.container}>
        <Text style={styles.title}>
          {day?.dateString ? day.dateString : date} </Text>
        <AntDesign name="calendar" size={26} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ModalHook