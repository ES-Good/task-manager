import { initBD } from "./iniitFirebase";
import { getDatabase, ref, set, push } from "firebase/database";

let getDB = getDatabase(initBD)

export async function sendTask(NameTask, path) {
    let taskRef = ref(getDB, `${path}`);
    
    let newTask = push(taskRef)

    let task = {
            name: NameTask,
            id: newTask.key,
            subtasks:null
        }
    set(newTask, task);
    
    return await set(newTask, task)
}
