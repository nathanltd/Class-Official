//components
import ClassDownload from "../../Components/ClassDownloadApp/ClassDownload";
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
        <ClassDownload />
      </div>
    </div>
  );
};

export default Class;
