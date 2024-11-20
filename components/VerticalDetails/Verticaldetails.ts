import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },


    content: {
flex: 1
    },


    DescriptionContainer: {
        marginTop: 11,
        marginHorizontal: 22
    },

    containerBackground: {
        height: 350,
        width: '100%',
        alignItems: 'center',
    },

    imageBackground: {
        height: '100%',
        width: '100%',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        overflow: 'hidden',
    },

    bluecontainerDescription: {
        position: 'absolute',
        bottom: 55,
        right: 19,
        backgroundColor: '#20212499',
        paddingHorizontal: 11,
        paddingVertical: 5,
        borderRadius: 12,
        overflow: 'hidden'
    },



    ContainerMap: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },

    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },


    locationText: {
        fontSize: 15,
        fontWeight: '900',
        color: 'black'
    },

    containerLocation: {
        position: 'absolute',
        backgroundColor: '#000000',
        width: '88%',
        height: 33,
        bottom: 1,
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },

    doubleleft: {
        position: 'absolute',
        top: 51,
        right: 34,
        backgroundColor: '#4F4F4F',
        paddingHorizontal: 6,
        paddingVertical: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 2
    },

    textLocation: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },

    textInfo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',

    },


    containerIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1.5,
        borderTopWidth: 1,
        borderLeftWidth: 0.9,
        borderRightWidth: 0.9,
        borderColor: 'black',
        borderRadius: 14,
        width: '95%',
        paddingVertical: 3,
        elevation: 17,
        top: 20
    },




    contentIcons: {
        alignItems: 'center',
        justifyContent: 'center'
    },


    textIcon: {
        fontSize: 15,
        fontWeight: '700',
        color: 'white',
        top: 2 
    },

    container2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        gap: 5
    },


    tarjaMagnética: {
        borderBottomWidth: 0.6, 
        marginTop: 19,
         borderColor: '#4F4F4F',
          elevation: 5,
    },

    containerNumber: {
        backgroundColor: '#1C1C1C',
        borderRadius: 10,
        height: 45,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    number: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },


    validation: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#363636'
    },

    validation2: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FF0000' 
    },

    interiosContainer: {
        width: 120,
        height: 120,
        marginHorizontal: 5,
        borderRadius: 12,
        marginTop: 15,
        marginBottom: 1,
        top: 12
    },

    interiors: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 10
    },


    ContainerReservar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 22,
        bottom: 18,
     
        
    },


    containerPrice: {
        flexDirection: 'row',
         alignItems: 'center',
          gap: 2 
    },

    priceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },

    priceTitle2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#696969',
        textDecorationLine: 'line-through'
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },


    ContainerReserver: {
        backgroundColor: 'red',
        width: 120,
        height: 52,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },

    textReservar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }


})