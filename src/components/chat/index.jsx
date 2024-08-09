import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

export const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    // bu sayede endref yazılı olan yere ekran otomatik olarak kaydırılır
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  const handleEmoji = (e) => {
    console.log(e);
    setText((prev) => prev + e.emoji);
  };
  // console.log(text);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <span>Selmacan</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dignissimos laborum incidunt eum labore error aperiam sunt quae
              praesentium neque!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/16174520/pexels-photo-16174520/free-photo-of-cheetahs-in-field-in-wild-nature.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dignissimos laborum incidunt eum labore error aperiam sunt quae
              praesentium neque!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dignissimos laborum incidunt eum labore error aperiam sunt quae
              praesentium neque!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dignissimos laborum incidunt eum labore error aperiam sunt quae
              praesentium neque!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              dignissimos laborum incidunt eum labore error aperiam sunt quae
              praesentium neque!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="/emoji.png"
            alt=""
          />
          <div className="pickerContainer">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};
