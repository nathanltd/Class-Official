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
          btnDownload={[
            {
              text: '家教 APP',
              apple: 'https://apps.apple.com/at/app/class%E5%95%8F%E7%AD%94-%E5%AE%B6%E6%95%99%E7%89%88/id6449015702',
              play: 'https://play.google.com/store/apps/details?id=com.weclass.tutor.teacher'
            },
            {
              text: '學生 APP',
              apple: 'https://apps.apple.com/at/app/class%E5%95%8F%E7%AD%94/id6449015915',
              play: 'https://play.google.com/store/apps/details?id=com.weclass.tutor.student'
            }
          ]}
          actionUrl={"https://tutor.weclass.com.tw/column"}
        />
      </div>
    </div>
  );
};

export default Tutor;
