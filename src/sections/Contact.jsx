import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_19p2z4d",
        "template_s7t5p5r",
        {
          from_name: form.name,
          to_email: "tauficabdallahwaziri@gmail.com",
          message: form.message,
        },
        "fTfUa3IF_mRYBH4BF",
      );
      setLoading(false);
      alert("Your message has been sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      alert("something went wrong");
    }
  };
  //service_19p2z4d
  return (
    <section className="c-space my-20" id="contact">
      <div className="flex relative min-h-screen items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="background"
          className="absolute inset-0 min-h-screen hidden md:block"
        />
        <div className="contact-container ">
          <h3 className="head-text">Lets Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Are you looking to build your website, improve your existing
            platform, or building your portfolio, I am here to help{" "}
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Taufic Abdallah"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="tauficabdallahwaziri@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi I am interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="uparrow"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
