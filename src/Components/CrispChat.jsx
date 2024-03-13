import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { namee } from "../db/user";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d44aede2-4935-46ba-bffe-1a189561fe5a");
    console.log(window.location.pathname,"hunain")
    // Open the chatbox and set the nickname if on the chat page
    if (window.location.pathname === "/") {
      Crisp.chat.show();
      Crisp.user.setNickname(namee);
    } else {
      // Hide or close the chatbox on other pages
      Crisp.chat.show();
    }

    // Cleanup function (equivalent to componentWillUnmount in class component)
    return () => {
      // Close the chatbox when the component is unmounted
      Crisp.chat.show();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      Chat with Admin
    </div>
  );
};

export default CrispChat;
