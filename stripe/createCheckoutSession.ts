import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseClient";
import getStripe from "./initializeStripe"

export async function createCheckoutSession(uid: string) {

    
}