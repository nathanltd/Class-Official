import Function from "./Function";
import Help from "./Help";
import Hero from "./Hero";
import App from "../../Components/DownloadApp/App";

const Tutor = () => {
  return (
    <div className="container mt-header">
      <Hero />
      <Help />
      <div className="max-cont">
        <Function />
        <App
          bg={"var(--orange)"}
          img={"/assets/app2.png"}
          head1={"解決你的課業疑難雜症"}
          head2={"讓學生救星有效率地解答你心中的疑惑吧！"}
          btnText={"立即使用"}
          btnColor={["#FFA24D", "#DA6D09"]}
        />
      </div>
    </div>
  );
};

export default Tutor;
