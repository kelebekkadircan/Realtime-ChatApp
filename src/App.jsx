import { Chat } from "./components/chat";
import { List } from "./components/list";
import { Detail } from "./components/detail";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
    </div>
  );
};

export default App;
