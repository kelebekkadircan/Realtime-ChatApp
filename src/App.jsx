import Chat from "./components/chat";
import { List } from "./components/list";
import { Detail } from "./components/detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (e) => {
      fetchUserInfo(e?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  // console.log(currentUser, isLoading);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <>
      <div className="container">
        {currentUser ? (
          <>
            <List />
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </>
  );
};

export default App;
