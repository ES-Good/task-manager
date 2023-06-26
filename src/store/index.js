import { createStore } from 'vuex'
import task from './modules/task'
import subtask from './modules/subtask'

export default createStore({
  modules: {
    task,
    subtask
  }
})
