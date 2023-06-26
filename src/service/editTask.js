import { initBD } from './iniitFirebase'
import { getDatabase, ref, set } from "firebase/database";

let getDB = getDatabase(initBD)

export async function updateTask(dataTask,patch) {
    let dataRef = ref(getDB, patch)
    return await set(dataRef, dataTask)
}
