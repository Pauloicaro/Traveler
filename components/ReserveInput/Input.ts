import { StyleSheet } from 'react-native'







export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },





    content: {
        marginHorizontal: 10,
        marginTop: 17,

    },


    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },


    subTitle: {
        fontSize: 17,
        fontWeight: 'bold'
    },



    contentInput: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },

    containerInput: {
        width: 335,
        height: 42,
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 7,
        borderRadius: 4,
        marginBottom: 10,
        backgroundColor: '#D3D3D3'

    },


    input: {
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
        height: '100%'
    },

    inputFocus: {
        borderWidth: 1.6,
        borderColor: '#00008B'
    },

    line: {
        borderBottomWidth: 1.5,
        borderColor: '#DCDCDC',
        marginTop: 10
    },

    line2: {
        borderBottomWidth: 7,
        borderColor: "#D3D3D3",
        marginTop: 11
    }
})