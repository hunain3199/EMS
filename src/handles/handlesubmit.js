
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

const handleSubmit = (testdata) => {

    const ref = collection(firestore, "test_data") // Firebase creates this automatically

    let data = {
        testData: testdata
    }
    try {
        if (addDoc(ref, data)) {
            console.group("success");
        }
        console.log(ref, data)
    } catch (err) {
        console.log(err)
    }
}

export default handleSubmit