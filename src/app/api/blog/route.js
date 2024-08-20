// src/app/api/blog/route.js
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";

export async function getDocument(coll, id) {
  const snap = await getDoc(doc(db, coll, id));
  if (snap.exists()) return snap.data();
  else return Promise.reject(Error(`No such document: ${coll}.${id}`));
}
