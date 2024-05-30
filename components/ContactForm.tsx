import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    const formErrors = { name: "", email: "", message: "" };
    if (!form.current?.user_name.value) {
      formErrors.name = "Name is required";
    }
    if (!form.current?.user_email.value) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.current?.user_email.value)) {
      formErrors.email = "Email is invalid";
    }
    if (!form.current?.message.value) {
      formErrors.message = "Message is required";
    }
    setErrors(formErrors);
    return !formErrors.name && !formErrors.email && !formErrors.message;
  };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (validateForm() && form.current) {
      emailjs
        .sendForm(
          "service_f5xcier",
          "template_o5fgpod",
          form.current,
          "shEuDtwn9bW0i0xsF"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            // Clear the form fields and reset errors
            form.current?.reset();
            setErrors({ name: "", email: "", message: "" });
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
      <label className="text-[25px] mb-[0.2rem] font-semibold text-white">
        Name
      </label>
      <input
        type="text"
        name="user_name"
        className="h-[50px] bg-[#55e6a5] text-black"
      />
      {errors.name && <span className="text-red-500">{errors.name}</span>}

      <label className="text-[25px] mb-[0.2rem] font-semibold text-white">
        Email
      </label>
      <input
        type="email"
        name="user_email"
        className="h-[50px] bg-[#55e6a5] text-black"
      />
      {errors.email && <span className="text-red-500">{errors.email}</span>}

      <label className="text-[25px] mb-[0.2rem] font-semibold text-white ">
        Message
      </label>
      <textarea name="message" className="h-[8rem] bg-[#55e6a5] text-black" />
      {errors.message && <span className="text-red-500">{errors.message}</span>}
      <div className="flex  items-center justify-center">
        <input
          type="submit"
          value="Send"
          className="bg-yellow-400 w-[25%] h-[40px] rounded-sm cursor-pointer hover:bg-[#55e6a5]"
        />
      </div>
    </form>
  );
};

export default ContactForm;
