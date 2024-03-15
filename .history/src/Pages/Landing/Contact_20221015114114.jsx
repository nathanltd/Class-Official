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
  const [openModal, setOpenModal] = useState(true);
  /*
  const submitHandler = async (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     "https://script.google.com/macros/s/AKfycbx_jGvvdg6NEhaPBgAtF5FQlcTgGuSReBgMBjS1J_YE7srs-QfrlcxcemfXgAFn2kVf/exec",
    //     formData
    //   )
    //   .then(() => console.log("done0"))
    //   .catch(() => console.log("