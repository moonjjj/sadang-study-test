import { COLLECTIONS } from "@constants/collection";
import { fireStore } from "@utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getHotels() {
  const snapshot = await getDocs(collection(fireStore, COLLECTIONS.HOTELS));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
