import { initBD } from './iniitFirebase'
import { getDatabase, ref, onValue } from "firebase/database";

let getDB = getDatabase(initBD)
let dataRef = ref(getDB, '/tasks')

export function task(params) {
    onValue(dataRef, (snapshot) => {
        let data = snapshot.val();
        params.value = data
    });
}

