import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },


    content: {
        flex: 1,
        backgroundColor: '#6A5ACD',
    },

    contentimg: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15
    },



    contentInput: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 43,
        borderTopRightRadius: 53,
        overflow: 'hidden',
        backgroundColor: 'white',
        

    },



    containerImg: {
        width: 220,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        marginBottom: 20,
        marginTop: 20,


    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 110,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: 'white',
    },



    containerInput: {
        width: 356,
        height: 45,
        paddingLeft: 11,
        marginBottom: 7,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
        borderBottomWidth: 1.5,
    },

    input: {
        width: '100%',
        height: '100%',
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'


    },

    containerButton: {
        width: 356,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 12,
        paddingLeft: 5,
        marginTop: 7,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',

    },


    TextButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000'
    },


    containerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },


    title: {
        fontSize: 16,
        fontWeight: '500'
    },

    textNavigation: {
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#6A5ACD'
    },


    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})