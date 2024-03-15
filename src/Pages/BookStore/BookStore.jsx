import Hero from "./Hero";
import Partner from "./Partner";
import Function from "./Function";
import App from "../../Components/DownloadApp/App";

const BookStore = () => {
  return (
    <div className="container mt-header">
      <Hero />
      <div className="max-cont">
        <Partner />
        <Function />{" "}
        <App
          bg={"var(--purple)"}
          img={"/assets/app3.png"}
          head1={"開啟你的閱讀之旅"}
          head2={"趕快來獲得更多你不知道的有趣知識吧！"}
          btnText={"立即前往"}
          btnColor={["#8C9EFF", null]}
        />
      </div>
    </div>
  );
};

export default BookStore;
