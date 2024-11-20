import { StyleSheet } from 'react-native'





export const Styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    backgroundColor: "#fff"
  },




  containerSearch: {
    backgroundColor: '#fff',
    width: '100%',
    height: 115,
    borderBottomLeftRadius: 33,
    elevation: 10,

  },


  contentInput: {
    flex: 1,
    flexDirection: 'row',
    left: 44,
    alignItems: 'center',
    top: 10,
  },


  containerInput: {
    width: 230,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 22,
    elevation: 4,
  },



  titleHospedagem: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },


  textContent: {
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20
  },


  textPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',

  },


  contentTextSecundário: {
    marginBottom: 5,
    marginHorizontal: 14,
  },

  textSecundário: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },


  VerticalContent: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center'
  }

})