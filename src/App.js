import React from "react";
import {View,Text,StatusBar,StyleSheet} from "react-native";
import {Provider} from "mobx-react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import store from "./stores/MainStore";

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar />
          <Header />
          <AddTodo />
          <TodoList />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default App;