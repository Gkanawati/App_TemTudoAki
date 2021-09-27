import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8fbfd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#000",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start",
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      marginTop: 0,
      fontSize: 13,
    }
  });
  
export default styles