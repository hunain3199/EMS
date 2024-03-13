import { db } from './config';
const storageRef = firebase.storage().ref();
const fileInput = document.getElementById('profileImage');

// Get the file from the input element
const file = fileInput.files[0];

// Create a reference to the location you want to upload to in Firebase Storage
const imageRef = storageRef.child('images/' + file.name);

// Upload the file to Firebase Storage
const collectImage = (ImageRef)=>{
ImageRef.put(file)
  .then((snapshot) => {
    console.log('Uploaded a blob or file!');
    // You can get the download URL of the uploaded image
    return snapshot.ref.getDownloadURL();
  })
  .then((downloadURL) => {
    console.log('File available at', downloadURL);
    // Now you can save this download URL to Firestore if needed.
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error uploading file:', error);
    
db.collection('UserTable').add({
    imageURL: downloadURL, // Use the download URL obtained from Firebase Storage
    
    // Other fields related to your image
    })
    .then((docRef) => {
    console.log('Image document added with ID: ', docRef.id);
    })
    .catch((error) => {
    console.error('Error adding image document: ', error);
    });




  });}

  // Assuming 'images' is a collection in Firestore

export const url = collectImage(imageRef)
console.log(url)