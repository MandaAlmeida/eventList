import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    eventName: {
      color: "#fdfcfe",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize: 16
    },
    input: { 
      flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        padding: 16,
        color: "#fdfcfe",
        fontSize: 16,
       
    },
    form: {
      width: "100%",
      flexDirection: "row",
      gap: 20,
      marginTop: 36,
      marginBottom: 42
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: "#31CF67",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText:{
      color: "#fdfcfe",
      fontSize: 24,
    },
    listEmptyText:{
      color: "#fdfcfe",
      fontSize: 14,
      textAlign: "center"
    }
   
  })