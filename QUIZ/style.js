import { StyleSheet, StatusBar, Platform } from 'react-native';

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#a8a3e6'
  },
  button0: {
    borderRadius: 50,
    backgroundColor: '#39BFC6',
    position: 'relative',
    width: 300,
    paddingTop:5,
    paddingBottom:5,
    marginTop:20,
    top: 140,
    borderWidth:2,
    borderColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3, 
    elevation: 7,
  },
  
  button1: {
    borderRadius: 50,
    backgroundColor: '#d1ca00',
    position: 'relative',
    width: 250,
    paddingTop:5,
    paddingBottom:5,
    top: 150,
    borderWidth:2,
    borderColor:'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 7,
  },
  button2: {
    borderRadius: 50,
    backgroundColor: '#FF33CA',
    position: 'relative',
    width: 200,
    paddingTop:5,
    paddingBottom:5,
    top: 160,
    borderWidth:2,
    borderColor:'white',
    textAlign: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 4 }, 
    shadowOpacity: 0.7, 
    shadowRadius: 3, 
    elevation: 7,
  },
  buttons: {
    borderRadius: 50,
    backgroundColor: '#fff',
    position: 'relative',
    height: 70,
    width: 400,
    top: 250,
    padding: 25,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.7, 
    shadowRadius: 3,
    elevation: 7,
  },
  
  
  fullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffD',

  },
  transparentStatusBar: {
    ...Platform.select({
      android: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: StatusBar.currentHeight,
        backgroundColor: '#FFF',
      },
      
    }),
  },
});
export { s };


