import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from "react-native";
import {inject, observer} from "mobx-react";
import Icon from "react-native-vector-icons/Feather";
import colors from "../consts/colors";

@inject("store")
@observer
class Todo extends React.Component {
  onPressTodo(){
    this.props.store.toggleTodo(this.props.index);
  }
  render(){
    return (
      <TouchableOpacity
        style={styles.todo}
        onPress={() => this.onPressTodo()}
      >
        {
            this.props.finished ? (
                <Icon name={"check-circle"} size={24} color={colors.todoCircleFinished} />
            ) : (
                <Icon name={"circle"} size={24} color={colors.todoCircle} />
            )
        }
        <Text style={this.props.finished ? styles.todoTextFinished : styles.todoText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    todo: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    todoText: {
        marginLeft: 10,
        fontSize: 18
    },
    todoTextFinished: {
      marginLeft: 10,
      fontSize: 18,
      fontStyle: "italic",
      textDecorationLine: "line-through"
   }
})

export default Todo;