import {observable, action} from "mobx";
class MainStore{
    @observable todos = [];
    @action addTodo(todo){
        this.todos = [...this.todos, todo];
        this.addTodoInputText = "";
    }
    @observable addTodoInputText = "";
    @action addTodoInputText_change(text){
        this.addTodoInputText = text;
    }
    @action toggleTodo(index){
        this.todos[index].finished = !this.todos[index].finished;
    }
}

const store = new MainStore();
export default store;