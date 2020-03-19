import React from "react";
import {ScrollView,Text,StyleSheet} from "react-native";
import {inject, observer} from "mobx-react";
import Todo from "./Todo";
import colors from "../consts/colors";

@inject("store")
@observer
class TodoList extends React.Component {
  render(){
    return (
      <ScrollView style={styles.todoList}>
        {
            this.props.store.todos.map((item, index) => (
                <Todo key={"todo-" + index} index={index} finished={item.finished} text={item.text} />
            ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    todoList: {
        paddingHorizontal: "5%",
    }
})

export default TodoList;