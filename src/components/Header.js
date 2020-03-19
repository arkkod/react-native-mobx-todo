import React from "react";
import {View,Text,StyleSheet} from "react-native";
import colors from "../consts/colors";

class Header extends React.Component {
  render(){
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>todo App</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: colors.headerBackground,
        justifyContent: "center",
        paddingHorizontal: "5%"
    },
    headerText: {
        color: colors.headerText,
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Header;