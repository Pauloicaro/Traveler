import { StyleSheet } from 'react-native'









export const styles = StyleSheet.create({

container: {
flex: 1
},

    subContent: {
        flex: 1,
        width: 340,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 22,
        overflow: 'hidden',
        elevation: 7,
        marginBottom: 22,
        top: 10
    },


    img: {
        width: '100%',
        height: '100%',
    },


    content2: {
        zIndex: 33,
        position: 'absolute',
        backgroundColor: '#20212471',
        left: 10,
        width: '55%',
        padding: 10,
        borderRadius: 22,
        bottom: 22,
        overflow: 'hidden'
    },

    titleContent: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },

    locationContent: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    TextlocationContent: {
        fontSize: 14,
        fontWeight: '800'
    },

    heart2: {
        zIndex: 20,
        height: 50,
        width: 50,
        borderRadius: 40,
        position: 'absolute',
        right: 33,
        top: 19,
        backgroundColor: '#20212491',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },

})