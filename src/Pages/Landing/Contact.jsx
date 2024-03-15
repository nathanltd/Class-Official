import { useState } from "react";
import MailModal from "../../Components/MailModal/MailModal";
import "./styles/Contact.css";
import { Fade } from "react-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    school: "",
    service: "",
    content: "",
  });
  //const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [service, setService] = useState("");
  const [content, setContent] = useState("");

  /*
  const submitHandler = async (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     "https://script.google.com/macros/s/AKfycbx_jGvvdg6NEhaPBgAtF5FQlcTgGuSReBgMBjS1J_YE7srs-QfrlcxcemfXgAFn2kVf/exec",
    //     formData
    //   )
    //   .then(() => console.log("done0"))
    //   .catch(() => console.log("error"));
  };
  */
  //input field handler ------------------------------------
  /*
  const changeHandler = (e) => {
    const inputName = e.target.name;
    setFormData((prev) => {
      return { ...prev, [inputName]: e.target.value };
    });
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const element = formData[key];
        if (element === "") {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }
    }
  };
  */
  return (
    <div id="contact" className="contact">
      {openModal && <MailModal closeModal={setOpenModal} />}
      <div className="max-cont">
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        <Fade>
          <form
            action="https://script.google.com/macros/s/AKfycbx_jGvvdg6NEhaPBgAtF5FQlcTgGuSReBgMBjS1J_YE7srs-QfrlcxcemfXgAFn2kVf/exec"
            //
            method="post"
            target="hidden_iframe"
          //onSubmit={submitHandler}
          ><div className="input-div">
              {name !== "" ? <span className="input-title">姓名</span> : ""}
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                //value={formData.name}
                className={name !== "" ? "text-black" : ""}

                type="text"
                placeholder="姓名"
              />
            </div>
            <div className="input-div">
              {phone !== "" ? <span className="input-title">電話</span> : ""}
              <input
                //onChange={changeHandler}
                //value={formData.phone}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={phone !== "" ? "text-black" : ""}
                name="phone"
                type="text"
                placeholder="電話"
              />
            </div>
            <div className="input-div">
              {email !== "" ? <span className="input-title">Email</span> : ""}

              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={email !== "" ? "text-black" : ""}
                name="email"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="input-div">
              {school !== "" ? <span className="input-title">學校／補習班名稱</span> : ""}
              <input
                onChange={(e) => setSchool(e.target.value)}
                value={school}
                className={school !== "" ? "text-black" : ""}
                name="school"
                type="text"
                placeholder="學校／補習班名稱"
              />
            </div>
            <div className="input-div">
              {service !== "" ? <span className="input-title">服務</span> : ""}
              <select name="service" value={service}
                onChange={(e) => setService(e.target.value)}
                className={service !== "" ? "text-black" : ""}
              >
                <option value="" disabled="true">服務</option>
                <option value="all">所有平台服務</option>
                <option value="class">CLASS班級</option>
                <option value="teach">CLASS家教</option>
                <option value="book">CLASS書店</option>
              </select>
            </div>
            <div className="input-div">
              {content !== "" ? <span className="input-title">描述</span> : ""}
              <input
                onChange={(e) => setContent(e.target.value)}
                value={content}                
                name="content"
                className={content !== "" ? "text-black" : ""}
                type="text"
                placeholder="描述"
              />

            </div>
            <div className="button-div">

              <button
                className={` ""  `}
                type="submit"
                value="提交"
                onClick={() => setOpenModal(true)}
              >
                送出
              </button>
            </div>
          </form>
        </Fade>
        <div className="contact-info">
          <Fade top>
            <h2>想要數位化經營，提供三位一體的服務給學生家長嗎？</h2>
          </Fade>
          <div className="contacts">
            <Fade bottom cascade>
              <a href="mailto:class@gmail.com">
                <img src="/assets/mail.png" alt="" /> classup101@gmail.com
              </a>

              <a href="tel:(03)3568371">
                <img src="/assets/phone.png" alt="" /> 03-3568371
              </a>
              <a href="#">
                <img src="/assets/location.png" alt="" />{" "}
                桃園市桃園區同德二街1號6樓
              </a>
            </Fade>
          </div>
        </div>
      </div>
      <img src="/assets/girl.png" alt="" className="girl" />
    </div>
  );
};

export default Contact;
