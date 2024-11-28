import {
  View,
  Text,
  StatusBar,
  Pressable,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import Animation, { BounceInRight, Easing } from 'react-native-reanimated'
import HorizontalItem from '../HorizontalItem/HorizontalItem';
import _RenderItem from '../HorizontalItem/HorizontalItem';
import VerticalItem from '../VerticalItem/VerticalItem';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Styles } from '../Home/StyleHome';
import React, { useState } from 'react';
import { signOut, } from 'firebase/auth'
import { auth } from '../../firebase/firebaseAuth';
import { StackTypes } from '../../routes/RouteScreen'
import { VerticalProps, data } from '../../content/DataVertical'
import { Houses, HouseProps } from '../../content/Data'


function Home() {

  const Navigation = useNavigation<StackTypes>()
  const [house] = useState<HouseProps[]>(Houses)
  const [verticalDate] = useState<VerticalProps[]>(data)

  function HandlesignOut() {
    signOut(auth).then((response) => {
      console.log(response, "Usuário desconectado")
      Navigation.navigate('Login')
    }).then((r) => {
      console.log(r, "Saiu com sucesso")
    })
  }
  const HandChangeInput = () => {
    Navigation.navigate('Input')
  }


  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.content}>
        <Animation.View style={Styles.containerSearch}
          entering={BounceInRight.delay(100).duration(1000).easing(Easing.bounce)}>
          <View style={Styles.contentInput}>
            <TouchableOpacity onPress={HandlesignOut} style={{ right: 11 }}>
              <AntDesign name="arrowleft" size={29} color="black" />
            </TouchableOpacity>
            <Pressable onPress={HandChangeInput} >
              <View style={Styles.containerInput}>
                <MaterialCommunityIcons name="map-search-outline" size={29} color="red" />
                <Text style={Styles.titleHospedagem}>Buscar, hospedagem</Text>
              </View>
            </Pressable>
          </View>
        </Animation.View>
        <View style={Styles.textContent}>
          <Text style={Styles.textPrincipal}>Preferido dos hóspedes</Text>
        </View>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={house}
          horizontal
          renderItem={({ item, index }: { item: HouseProps, index: number }) => {
            return <HorizontalItem item={item} index={index} />
          }}
          showsHorizontalScrollIndicator={false} />
        <View style={Styles.contentTextSecundário}>
          <Text style={Styles.textSecundário}> Outros destinos incrível</Text>
        </View>
        <View style={Styles.VerticalContent}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={verticalDate}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }: { item: VerticalProps, index: number }) => {
              return <VerticalItem item={item} index={index} />
            }}
          />
        </View>
        <StatusBar backgroundColor={'#fff'} />
      </View>
    </SafeAreaView>

  );

}


export default Home;