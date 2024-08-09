import React, { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./addUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
      console.log("Current data: ", doc.data());
      setChats(doc.data());
    });

    return () => {
      unsub();
    };
  }, [currentUser.id]);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "/minus.png" : "/plus.png"}
          className="add"
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Kadircan </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Kadircan </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Kadircan </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Kadircan </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Kadircan </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Kadircan </span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
