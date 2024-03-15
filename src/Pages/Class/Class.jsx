//components
import App from "../../Components/DownloadApp/App";
import Feature from "./Feature";
import Hero from "./Hero";
import Provide from "./Provide";

const Class = () => {
  return (
    <div className="container mt-header">
      <Hero />
      <div className="max-cont">
        <Provide />
        <Feature />
        <App
          bg={"var(--green)"}
          img={"/assets/app.png"}
          head1={"減輕你的管理負擔"}
          head2={"釋放你在班級管理上的一切煩惱"}
          btnText={"企業版"}
          btnColor={["#13c2c2", "#037f9a"]}
        />
      </div>
    </div>
  );
};

export default Class;
