import "./styles/Provide.css";
import { Fade } from "react-reveal";

const ProvideRow = ({ img, head, desc }) => {
  return (
    <div className="provide-row">
      <Fade duration={1000} delay={500} left>
        <img src={img} alt="" />
      </Fade>
      <div className="text-col">
        <Fade duration={1000} delay={500} collapse bottom>
          <h3>{head}</h3>
          <p>{desc}</p>
        </Fade>
      </div>
    </div>
  );
};

const Provide = () => {
  const DATA = [
    {
      img: "/assets/provide-ico (3).png",
      head: "點名出勤",
      desc: "直接點名或請假",
    },
    {
      img: "/assets/provide-ico (1).png",
      head: "班級相簿紀錄",
      desc: "建立班級回憶相簿",
    },
    {
      img: "/assets/provide-ico (5).png",
      head: "成績紀錄",
      desc: "各科目成績紀錄",
    },
    {
      img: "/assets/provide-ico (2).png",
      head: "收費財務",
      desc: "方便老師快速且彈性建立課表",
    },
    {
      img: "/assets/provide-ico (6).png",
      head: "數位聯絡簿",
      desc: "重要待辦、考試項目紀錄",
    },
    {
      img: "/assets/provide-ico (4).png",
      head: "人事管理",
      desc: "所有班級歷史紀錄皆留存於系統",
    },
    {
      img: "/assets/kitchen-utensils 1.png",
      head: "點餐系統",
      desc: "餐點紀錄、餐費儲值，以班級為單位分類訂單",
    },
    {
      img: "/assets/image 2.png",
      head: "班級通訊",
      desc: "整合家長師生聯絡，不必再使用私人通訊",
    },
    {
      img: "/assets/Frame 3358.png",
      head: "線上繳費",
      desc: "家長繳費，馬上入帳，自動通知到帳及沖銷訂單",
    },
    {
      img: "/assets/Frame 3390.png",
      head: "接送通知",
      desc: "清楚掌握每位家長的抵達時間",
    },
  ];
  return (
    <div className="provide">
      <Fade duration={1000} collapse top>
        <h1 className="heading">提供教師所需教育溝通以及數位化經營工具</h1>
        <h2 className="sub">
          Class 班級在師生溝通及內部控管方面，提供校方或補教業者，更直觀便利的整合程式，大幅減少管理成本。
        </h2>
      </Fade>
      <div className="provide-box">
        <hr />
        {DATA.map((elem, idx) => {
          return <ProvideRow {...elem} key={"provide" + idx} />;
        })}
      </div>
    </div>
  );
};

export default Provide;
