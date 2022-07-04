import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  header: {
    fontSize: 26,
    fontFamily: 'mt-bold',
  
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 50,
    
  },

  main: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'mt-bold',
    paddingTop: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom:15,
  },

  anon: {
    fontSize: 22,
    fontFamily: 'mt-light',
    paddingTop: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom:50
  },
  image:{
    textAlign:'center',
     resizeMode: 'contain'
  },

  full: {
    fontSize: 22,
    fontFamily: 'mt-light',
    paddingTop: 20,
    textAlign: "justify",
    marginTop: 20,
    marginBottom:50

},
close_button:{

  textAlign:'right',
  // marginTop:10,
marginRight:15,
marginTop:15,

},

add_button:{

textAlign:"center",
marginBottom:20,

},

input:{
borderWidth:1,
marginBottom:15,
padding:15,
borderColor:'silver',
borderRadius:5,



}

});
