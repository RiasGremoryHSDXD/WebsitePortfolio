import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
  QuerySnapshot,
} from 'firebase/firestore';
import { db } from './firebase';

export interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: Timestamp | null;
}

export function subscribeToComments(
  onData: (comments: Comment[]) => void,
  onError: (error: Error) => void
) {
  const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
  
  const unsubscribe = onSnapshot(
    q,
    (querySnapshot: QuerySnapshot) => {
      const commentsData: Comment[] = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() } as Comment);
      });
      onData(commentsData);
    },
    (err: Error) => {
      onError(err);
    }
  );

  return unsubscribe;
}

export async function addComment(name: string, content: string) {
  return await addDoc(collection(db, 'comments'), {
    name: name.trim(),
    content: content.trim(),
    createdAt: serverTimestamp(),
  });
}
