import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container:{
        width:"100%",
       marginBottom: 10,
        borderRadius: 5,   
        gap: 20,
        flexDirection: "row",
        alignItems: "center",
     
    },
    name:{
        flex: 1,
        fontSize: 16,
        padding: 16,
        height: 56,
        borderRadius: 5,
        color: "#fdfcfe",
        backgroundColor: "#1F1E25",
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#E23C44",
        alignItems: "center",
        justifyContent: "center",
      },
      buttonText:{
        color: "#fdfcfe",
        fontSize: 24,
      },
})