import { observable } from '../node_modules/mobx';

class TodoStore {
  @observable todo_list = [];
}
export default new TodoStore();
