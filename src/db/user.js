import { db } from './config';
import { collection,orderBy, limit, getDocs,getDoc,where,query ,addDoc, Firestore, Timestamp,doc ,setDoc} from 'firebase/firestore';




export const addUser = async (uid, userData) => {
  console.log('Data inside addUser:', userData);
  try {
      const usersCollection = collection(db, 'User Table');
      const userDoc = doc(usersCollection, uid); // Using UID as the document ID
      await setDoc(userDoc, userData);
      console.log('Document written with ID:', uid);
  } catch (error) {
      console.error('Error adding document:', error);
  }
};

// export const addUser = async (userData) => {
//     console.log('data inside addUser: ', userData);
//     try {
//         const usersCollection = collection(db, 'User Table');
//         const docRef = await addDoc(usersCollection, userData);
//         console.log('Document written with ID: ', docRef.id);
        
//     } catch (error) {
//         console.error('Error adding document: ', error);
//     }
// };



// const userData = {
//     Cnic:cnic,
//     ContactNumber:phone,
//     Email: email,
//     FirstName: firstName,
//     LastName:lastName,
//     Password:'Milad420@',
//     UserName:'milad420',
//     GuardianName:guardianName,
//     GuardianCnic:guardianCnic,
//     GuardianContact:guardianContact,
//     Address:address,
//     Qualification:qualification,
//     JoinDate:joinDate,
//     Designation:designation,
//     JobType:jobType,
//     NoticePeriod:noticePeriod,
//     Salary:salary,
//     Timing:timing

    
//     // Other user data fields
// };
// addUser(userData);


export const getUser = async () => {
    try {
        var dataDB = [];
        const usersCollection = collection(db, 'User Table');
        const docRef = await getDocs(usersCollection);

        docRef.forEach(doc => {
            // console.log('loop', doc.data(), dataDB, typeof(dataDB));
            dataDB.includes(doc.data()) === false && dataDB.push(doc.data());
        });
        return dataDB;
        // console.log( 'Doctor Data');
        // console.log('Document written with ID: ', docRef.id);    
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};

// export const adminn = async () => {
    
//       // Get a reference to the document in the 'User Table' collection
//       const userDocRef = doc(db, 'role', 'hJ66wguN7m73TTy8q7Hr');
      
//       // Get the document snapshot
//       const userDocSnapshot = await getDoc(userDocRef);
//       const userData = userDocSnapshot.data().role_name;
//       // Check if the document exists before retrieving data
//      return userData
    
//   };
//   export const moderatorr = async () => {
    
//     // Get a reference to the document in the 'User Table' collection
//     const userDocRef = doc(db, 'role', 'rJ1VZERXFazOQ94lXIx5');
    
//     // Get the document snapshot
//     const userDocSnapshot = await getDoc(userDocRef);
//     const userData = userDocSnapshot.data();
//     console.log(userData)
//     // Check if the document exists before retrieving data

  
// };


const fetchDocumentIdsFromFirestore = async () => {
    try {
      // Reference to a specific collection in Firestore
      const collectionRef = collection(db, "role"); // Replace 'collectionName' with your actual collection name
      
      // Get all documents within the collection
      const querySnapshot = await getDocs(collectionRef);
      
      const documentIds = [];
      
      // Iterate through the query snapshot to extract document IDs
      querySnapshot.forEach((doc) => {
        documentIds.push(doc.id); // Add each document ID to the array
      });
  
      console.log('Document IDs:', documentIds);
      return documentIds;
    } catch (error) {
      console.error('Error getting documents:', error);
      return [];
    }
  };
  const getfetchid = async()=>{
    fetchDocumentIdsFromFirestore().then(res=>console.log(res))
}
getfetchid();

// export default addUser;

export const rolenames = async () => {
    try {
        var dataDB = [];
      // Get a reference to the 'role' collection
      const roleCollectionRef = collection(db, 'role');
      
      // Get all documents from the 'role' collection
      const querySnapshot = await getDocs(roleCollectionRef);
      
      // Process each document in the snapshot
      querySnapshot.forEach((doc) => {
        // Access the data of each document
        dataDB.includes(doc.data().role_name) === false && dataDB.push(doc.data().role_name);
        // const documentData = doc.data().role_name;
      });
      return dataDB // Log document data
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };
  
  // Call the function

  
 export const getName = async () => { 
   try {
    const docRef = doc(db, 'User Table', localStorage.getItem('userId'));
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const fieldValue = data.firstName; // Replace 'your_field_name' with the actual field name
      
      return fieldValue
    } else {
      console.log('No such document!');
    }
  } catch(e) {
    console.log('Error getting document:', e);
  }
 }


 export const namee = await getName()
//  console.log("milad mazak nahi",namee)


 export const getDatee = async () => { 
  try {
   const docRef = doc(db, 'attendance', localStorage.getItem('attendanceId'));
   const docSnapshot = await getDoc(docRef)
   if (docSnapshot.exists()) {
     const data = docSnapshot.data();
     const fieldValue = data.date; 
     return fieldValue;
   } else {
     console.log('No such document!');
   }
 } catch(e) {
   console.log('Error getting document:', e);
 }
}

const getMonth = (data) => {
  const dateTemp = new Date(data.date)
  console.log('date:', dateTemp.getMonth())   
  return {
    month: dateTemp.getMonth(),
    year: dateTemp.getFullYear(),
  }
}

const getWeek = (data) => {
  const dateTemp = new Date(data.date)
  console.log('date:', dateTemp.getDay())   
  // return dateTemp.getDay()
  return {
    // date: dateTemp.getDate(),
    week: dateTemp.getDay(),
    time: dateTemp.getTime(),
  }
}

export const datte = await getDatee()
console.log('new date: ', datte)
// const month = getMonth()
// console.log('month: ', month.month)
// console.log('year: ', month.year)


// export const getUserAttendanceByUserId = async () => {
//   const q = query(collection(db, "attendance"), where("userid", "==", localStorage.getItem('userId')));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
//   const docc = doc.id
//   localStorage.setItem('attendaceId',docc)
// });


// }

// getUserAttendanceByUserId()


// export const getUserAttendanceByUserId = async () => {
//   try {
//     const q = query(
//       collection(db, "attendance"),
//       where("userid", "==", localStorage.getItem('userId')),
//       orderBy("date", "asc"), // Order by date in descending order
//       limit(1) // Limit the result to only one document (the latest)
//     );

//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//       const latestDocId = doc.id;
//       localStorage.setItem('attendaceId', latestDocId);

//       // Access the entire document's data
//       // const latestDocumentData = doc.data();
//       // Do something with latestDocumentData if needed
//     });
//   } catch (error) {
//     console.error('Error getting documents:', error);
//   }
// };

// getUserAttendanceByUserId();


export const getLeaveStatus = async () => {
  try {
      var dataDB = [];
      const usersCollection = collection(db, 'leave');
      const docRef = await getDocs(usersCollection);

      docRef.forEach(doc => {
          // console.log('loop', doc.data(), dataDB, typeof(dataDB));
          dataDB.includes(doc.data()) === false && dataDB.push(doc.data());
      });
      return dataDB;
      // console.log( 'Doctor Data');
      // console.log('Document written with ID: ', docRef.id);    
  } catch (error) {
      console.error('Error adding document: ', error);
  }
};


export const getUserAttendanceByUserId = async () => {
  try {
    const q = query(
      collection(db, "attendance"),
      where("userid", "==", localStorage.getItem('userId')),
      orderBy("date", "asc") // Order by date in ascending order
    );

    const querySnapshot = await getDocs(q);

    const attendanceData = [];
    let filteredData = [];
    let weekData = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      
      // Add each document's data to the array
      attendanceData.push({
        id: doc.id,
        data: doc.data()
      });
    });
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    // const currentDate = new Date().getDate();
    const currentWeek = new Date().getDay();
    const currentTime = Date.now();
    // const sixDays = 31104000;
    const sixDays = 518400000;
    filteredData = attendanceData.filter(i => {
      const temp = getMonth(i.data);
      if(temp.month === currentMonth && temp.year === currentYear) {
        return i;
      }
    })
    weekData = attendanceData.filter(i => {
      const temp = getWeek(i.data);
      // console.log('time:', temp.time, temp.week, currentTime, currentWeek)
      if(temp.week <= currentWeek && temp.time >= (currentTime-sixDays)) {
        return i;
      }
    })
    console.log('All attendance data:', attendanceData);
    console.log('Filtered data:', filteredData);
    console.log('week data:', weekData);
    return {
      attendence: filteredData.length,
      percent: Math.round((filteredData.length/24)*100),
      week: weekData.length,
      weekPercentage: Math.round((weekData.length/6)*100),
    }
  } catch (error) {
    console.error('Error getting documents:', error);
  }
};

export const monthlyAttendence = await getUserAttendanceByUserId();



export const getUserAttendanceByUserIdd = async () => {
  try {
    const q = query(
      collection(db, "leave"),
      where("userid", "==", localStorage.getItem('userId')),
      orderBy("date", "asc") // Order by date in ascending order
    );

    const querySnapshot = await getDocs(q);

    const attendanceData = [];
    let filteredData = [];
    let weekData = [];

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      
      // Add each document's data to the array
      attendanceData.push({
        id: doc.id,
        data: doc.data()
      });
    });
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    // const currentDate = new Date().getDate();
    const currentWeek = new Date().getDay();
    const currentTime = Date.now();
    // const sixDays = 31104000;
    const sixDays = 518400000;
    filteredData = attendanceData.filter(i => {
      const temp = getMonth(i.data);
      if(temp.month === currentMonth && temp.year === currentYear) {
        return i;
      }
    })
    weekData = attendanceData.filter(i => {
      const temp = getWeek(i.data);
      // console.log('time:', temp.time, temp.week, currentTime, currentWeek)
      if(temp.week <= currentWeek && temp.time >= (currentTime-sixDays)) {
        return i;
      }
    })
    console.log('All attendance data:', attendanceData);
    console.log('Filtered data:', filteredData);
    console.log('week data:', weekData);
    return {
      leaveAttendence: filteredData.length,
      leave: Math.round((filteredData.length/24)*100),
      week: weekData.length,
      weekPercentage: Math.round((weekData.length/6)*100),
    }
  } catch (error) {
    console.error('Error getting documents:', error);
  }
};

export const monthlyLeave = await getUserAttendanceByUserIdd();


export const getRoleName = async () => { 
  try {
   const docRef = doc(db, 'User Table', localStorage.getItem('userId'));
   const docSnapshot = await getDoc(docRef)
   if (docSnapshot.exists()) {
     const data = docSnapshot.data();
     const fieldValue = data.roleId; // Replace 'your_field_name' with the actual field name
     
     return fieldValue
   } else {
     console.log('No such document!');
   }
 } catch(e) {
   console.log('Error getting document:', e);
 }
}

export const roleId = await getRoleName()
