import { doc, setDoc } from "@firebase/firestore";
import { db } from "../firebase";

export const createUser = async ({uid, name, email, phoneNumber, password}) => {
    try {
        console.log(uid);
        const docRef = await setDoc(doc(db, 'users', uid), {
            name,
            phoneNumber,
            email,
            uid,
            password,
        })
        console.log("Document written with ID: ", docRef);
    } catch (err) {
        console.log("Error creating a user", err.message);
    }
}