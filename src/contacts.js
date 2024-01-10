
import db from './firebaseConfig';

export async function getContacts(query) {
  let contactsCollection = db.collection("contacts");

  if (query) {
    const snapshot = await contactsCollection
      .where("first", "==", query)
      .orWhere("last", "==", query)
      .get();

    const contacts = snapshot.docs.map(doc => doc.data());
    return contacts.sort(sortBy("last", "createdAt"));
  } else {
    const snapshot = await contactsCollection.get();
    const contacts = snapshot.docs.map(doc => doc.data());
    return contacts.sort(sortBy("last", "createdAt"));
  }
}

export async function createContact() {
  const contactsCollection = db.collection("contacts");

  const contact = {
    id: Math.random().toString(36).substring(2, 9),
    createdAt: Date.now(),
  };

  await contactsCollection.add(contact);
  return contact;
}

export async function getContact(id) {
  const contactsCollection = db.collection("contacts");

  const snapshot = await contactsCollection.doc(id).get();
  if (snapshot.exists) {
    const contact = snapshot.data();
    return contact;
  } else {
    return null;
  }
}

export async function updateContact(id, updates) {
  const contactsCollection = db.collection("contacts");

  const contactRef = contactsCollection.doc(id);
  const snapshot = await contactRef.get();

  if (!snapshot.exists) {
    throw new Error(`No contact found for ID: ${id}`);
  }

  await contactRef.update(updates);
  const updatedContactSnapshot = await contactRef.get();
  const updatedContact = updatedContactSnapshot.data();
  return updatedContact;
}

export async function deleteContact(id) {
  const contactsCollection = db.collection("contacts");

  const contactRef = contactsCollection.doc(id);
  const snapshot = await contactRef.get();

  if (snapshot.exists) {
    await contactRef.delete();
    return true;
  } else {
    return false;
  }
}

// Sort function
function sortBy(...props) {
  return function (a, b) {
    for (let prop of props) {
      if (a[prop] < b[prop]) return -1;
      if (a[prop] > b[prop]) return 1;
    }
    return 0;
  };
}

// add firestore to this contact manager so that it stores and updates data
// add a search bar to search for contacts
// add a delete button to delete contacts
// add a edit button to edit contacts
// add a add button to add contacts
// add a sort button to sort contacts
// add a filter button to filter contacts
// add a save button to save contacts
// add a cancel button to cancel contacts
// add a clear button to clear contacts
// add a reset button to reset contacts
// add a refresh button to refresh contacts
// add a print button to print contacts
// add a export button to export contacts
// add a import button to import contacts
// add a share button to share contacts
// add a copy button to copy contacts
// add a paste button to paste contacts
// add a cut button to cut contacts
// add a undo button to undo contacts
// add a redo button to redo contacts
// add a settings button to settings contacts
// add a help button to help contacts


// how to convert local storage into firestore
// https://stackoverflow.com/questions/48592656/how-to-convert-local-storage-into-firestore
//  const data = JSON.parse(localStorage.getItem('data'));
//  const db = firebase.firestore();
//  const batch = db.batch();
//  data.forEach((doc) => {
//    const docRef = db.collection('collection').doc(doc.id);
//    batch.set(docRef, doc);
//  });
//  batch.commit().then(() => {
//    console.log('done');
//  });
//

