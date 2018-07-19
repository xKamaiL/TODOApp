import { observable } from '../node_modules/mobx';

class TodoStore {
  @observable todo_list = [];
  @observable is_adding = false;
  toggleAddTodo = event => {
    event.preventDefault();
    this.is_adding = !this.is_adding;
  };
}
export default new TodoStore();
