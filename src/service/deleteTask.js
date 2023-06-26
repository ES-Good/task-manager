import { initBD } from './iniitFirebase'
import { getDatabase, ref, remove } from "firebase/database";

let getDB = getDatabase(initBD)

export async function deleteMainTask(pathTask) {
    console.log(pathTask)
    let dataRef = ref(getDB, pathTask)
    await remove(dataRef)
}