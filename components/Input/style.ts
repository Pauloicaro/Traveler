import { StyleSheet } from 'react-native'



export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    content: {
        flex: 1,
        alignItems: 'center',
        
    },


    containerInput: {
        backgroundColor: '#363636',
        width: '100%',
        height: 100,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        elevation: 16,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderRightWidth: 0.1,
        borderLeftWidth: 0.1,

    },



    Input: {
        width: '90%',
        height: 53,
        backgroundColor: '#fff',
        marginTop: 27,
        overflow: 'hidden',
        borderRadius: 12,
        flexDirection: 'row',
        gap: 3,
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: -28,
        left: 25,
        elevation: 22,
        borderWidth: 1.1
    },


    search: {
        width: '83%',
        height: '80%',
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black'
    },

    BlurView: {
        zIndex: 33,
        position: 'absolute',
        backgroundColor: '#20212490',
        left: 9,
        width: '59%',
        paddingVertical: 10,
        borderRadius: 22,
        bottom: 19,
        overflow: 'hidden',
        paddingHorizontal: 8,
        justifyContent: 'center'

    },



    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },


    titleLocation: {
        fontSize: 15,
        fontWeight: '900'
    },


    doubleleft: {
        position: 'absolute',
        top: 30,
        right: 8,
        paddingHorizontal: 5,
        paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 22,

    },

    contentBuscar: {
        left: 22
    },

    textBuscar: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic'
    },


    contentImg: {
        width: 350,
        height: 150,
        marginVertical: 5,
        overflow: 'hidden',
        elevation: 12
    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },


    contentlocation: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    }
})