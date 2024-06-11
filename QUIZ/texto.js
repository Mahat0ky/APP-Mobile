import { StyleSheet } from "react-native";
const t= StyleSheet.create({
    buttonText :{
        fontSize :24,
        alignItems: 'center',
        position : 'relative',
        color : '#000',
        fontWeight : 'bold', 
        paddingLeft:30,
        textAlign: 'center',    
  },

    buttonsText :{
      fontSize :120,
      textAlign : 'center',
      position : 'relative',
      top : -4,
      color : '#fff',

  },
    bien : {
      color : '#000',
      fontSize : 12,
  },
  image : {
    position : 'relative',
    width : 920,
  },
  b : {
    position : 'absolute',
    top : 120,
    width : 180,
    height : 200,
  },
  h : {
    position : 'absolute',
    top : 120,
    width : 280,
    height : 280,
  },
  text : {
    position : 'absolute',
    top : 430,
    fontSize : 30,
    fontWeight : 'bold',
    color : '#167CB0'

  },
  texte : {
    position : 'absolute',
    top : 470,
    fontSize : 30,
    fontFamily : 'serif',
    color : '#0F120F',
    textAlign: 'center',
  },
  
  texto : {
    top:10,
    position : 'absolute',
    fontSize:32,
    borderWidth:3,
    borderRadius:50,
    borderColor: 'white',
    backgroundColor:'#D8B90C',
    paddingLeft:50,
    paddingRight:50,

  },
  pagdef : {
    backgroundColor:'#D8B90C',
    fontSize:30,
  }
});
export {t};