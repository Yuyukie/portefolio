// ContactUs.tsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "shEuDtwn9bW0i0xsF"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-[1.5rem]"
    >
      <label className=" text-white">Name</label>
      <input type="text" name="user_name" className="" />
      <label className=" text-white">Email</label>
      <input type="email" name="user_email" />
      <label className=" text-white">Message</label>
      <textarea name="message" />
      <input
        type="submit"
        value="Send"
        className="bg-[#55e6a5] w-[25%] rounded-sm cursor-pointer"
      />
    </form>
  );
};

export default ContactForm;
