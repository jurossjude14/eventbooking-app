import { getDocs, collection, setDoc, doc, deleteDoc,getDoc, updateDoc } from "firebase/firestore";
import { db } from '@/app/firebase';

// Get All Datalist
export const getPosts = async (getCblists, getCbloading) => {
    try {
        await getDocs(collection(db, "eventdb"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), gid: doc.id }));
                getCblists(newData);
            })
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        getCbloading(false);
    }
};

//Search Data
export const searchDocument = async (id) => {
    try {
      const docRef = doc(db, 'eventdb', id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        return docSnap.data(); // Return document data if found
      } else {
        console.log('No document found with ID:', id);
        return null; // Handle case where document doesn't exist
      }
    } catch (error) {
      console.error('Error searching document:', error);
      return null; // Handle errors gracefully
    }
  };

// Add Data  
export const addDbSet = (oneobj) => {
    const saveDataToFirestore = async () => {
        const docRefSet = doc(db, 'eventdb', oneobj.googleid)
        try {
            await setDoc(docRefSet, { ...oneobj });
            console.log('Document Data Added', docRefSet.id);
        } catch (error) {
            console.error('Error Adding document:', error);
        }
    };
    saveDataToFirestore();
};

// Update Data
export const updateDataDb = async (newData,googleid,cbLoading) => {
    try {
        const docRef = doc(collection(db, 'eventdb'), googleid);
        await updateDoc(docRef, newData);
        console.log('update');
    } catch (err) {
        console.log(err);
    } finally {
        cbLoading(false);
    }
};


// Delete Data
export const deleteData = async (id) => {
    console.log(id);
    const docRef = doc(collection(db, 'eventdb'), id); // Replace 'yourCollectionName' with your actual collection name
    try {
        await deleteDoc(docRef);
        console.log('Document deleted successfully!', docRef.id);
        // Optionally, update your React state to reflect the deleted data
    } catch (error) {
        console.error('Error deleting document:', error);
        // Error handling, e.g., display an error message to the user
    }
};

