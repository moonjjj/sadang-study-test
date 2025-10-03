import { COLLECTIONS } from "@constants/collection";
import { fireStore } from "@utils/firebase";
import { collection, getDocs, limit, query, type QueryDocumentSnapshot, startAfter } from "firebase/firestore";
import type { Hotel } from "../models/hotel";

export async function getHotels(
  pageParams?: any
) {
  const hotelQuery =
    pageParams == null
      ? query(collection(fireStore, COLLECTIONS.HOTELS), limit(10))
      : query(
          collection(fireStore, COLLECTIONS.HOTELS),
          startAfter(pageParams),
          limit(10)
        );

  const snapshot = await getDocs(hotelQuery);

  const lastVisible = snapshot.docs[snapshot.docs.length - 1];

  const hotels = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Hotel;
  });

  return { hotels, lastVisible };
}