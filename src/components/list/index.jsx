import "./list.css";
import UserInfo from "./userInfo/Userinfo";
import ChatList from "./chatList/ChatList";

export const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
};
