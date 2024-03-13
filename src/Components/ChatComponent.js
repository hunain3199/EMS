// import React, { useState } from 'react';

// function ChatComponent() {
//     const [isChatOpen, setChatOpen] = useState(false);

//     const toggleChat = () => {
//         setChatOpen(!isChatOpen);
//     };
//     const persons = [
//         { name: "ahmed raza", message: "hello, how are you?", time: "5 min", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", number: 3 },
//         { name: "ahmed raza", message: "hello, how are you?", time: "5 min", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", number: 3 },
//         { name: "ahmed raza", message: "hello, how are you?", time: "5 min", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", number: 3 },
//         { name: "ahmed raza", message: "hello, how are you?", time: "5 min", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", number: 3 },
//         { name: "ahmed raza", message: "hello, how are you?", time: "5 min", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", number: 3 }
//     ];
//     const chat = [
//         { person: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" },
//         { person: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp", time: "12:00 PM | Aug 13" }
//     ];

//     return (

//         <div class="container">

//             <div class="row">
//                 <div class="col-md-12">
//                     <div class="card" id="chat3" sx={{ borderRadius: "15px" }}>
//                         <div class="card-body">
//                             <div class="row">
//                                 <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 border-end">
//                                     <div class="p-3">

//                                         <div class="input-group rounded mb-3">
//                                             <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
//                                                 aria-describedby="search-addon" />
//                                             <span class="input-group-text border-0" id="search-addon">
//                                                 <i class="bi bi-search"></i>
//                                             </span>
//                                         </div>

//                                         <div data-mdb-perfect-scrollbar="true" sx={{ position: "relative", height: "400px" }}>
//                                             <ul class="list-unstyled mb-0">
//                                                 {
//                                                     persons.map((item, index) => {
//                                                         return (
//                                                             <li class="p-2 border-bottom" key={index}>
//                                                                 {/* {index} */}
//                                                                 <a href="#!" class="d-flex justify-content-between text-success">
//                                                                     <div class="d-flex flex-row">
//                                                                         <div>
//                                                                             <img
//                                                                                 src={item.image}
//                                                                                 alt="avatar" class="d-flex align-self-center me-3" width="50" />
//                                                                             <span class="badge bg-success badge-dot"></span>
//                                                                         </div>
//                                                                         <div class="pt-1">
//                                                                             <p class="fw-bold mb-0 ">{item.name}</p>
//                                                                             <p class="small text-muted">{item.message}</p>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div class="pt-1">
//                                                                         <p class="small text-muted mb-1">{item.time}</p>
//                                                                         <span class="badge bg-success rounded-pill float-end">{item.number}</span>
//                                                                     </div>
//                                                                 </a>
//                                                             </li>
//                                                         )
//                                                     })
//                                                 }
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="col-md-6 col-lg-7 col-xl-8">
//                                     <div class="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
//                                         sx={{ position: "relative", height: "400px" }}>
//                                         {
//                                             chat.map((item, index) => {
//                                                 return item.person == 1 ?
//                                                     <div class="d-flex flex-row justify-content-start">
//                                                         <img
//                                                             src={item.image}
//                                                             alt="avatar" class="d-flex align-self-center" width="25" />
//                                                         <div>
//                                                             <p class="small p-2 ms-3 mb-1 rounded-3 bg-success bg-opacity-10" >{item.message}</p>
//                                                             <p class="small ms-3 mb-3 rounded-3 text-muted float-end">{item.time}</p>
//                                                         </div>
//                                                     </div>
//                                                     :
//                                                     <div class="d-flex flex-row justify-content-end">
//                                                         <div>
//                                                             <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-success">{item.message}</p>
//                                                             <p class="small me-3 mb-3 rounded-3 text-muted">{item.time}</p>
//                                                         </div>
//                                                         <img
//                                                             src={item.image}
//                                                             alt="avatar" class="d-flex align-self-center" width="25" />
//                                                     </div>
//                                             })
//                                         }

//                                     </div>

//                                     <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
//                                         <img
//                                             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                             alt="avatar" class="d-flex align-self-center me-3" width="20" />
//                                         <input type="text" class="form-control form-control-lg" id="exampleFormControlInput2"
//                                             placeholder="Type message" />
//                                         <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
//                                         <a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
//                                         <a class="ms-3" href="#!"><i class="fas fa-paper-plane"></i></a>
//                                     </div>

//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// }

// export default ChatComponent;


import React from 'react'
import CrispChat from './CrispChat'
const ChatComponent = () => {
   
  return (
    <div>
      <CrispChat />
      
    </div>
  )
}

export default ChatComponent
