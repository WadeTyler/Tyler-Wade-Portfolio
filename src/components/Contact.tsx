"use client";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { Paragraph } from "./Paragraph";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const formRef = useRef(null);

  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here

    if (!formData.email.value || !formData.name.value || !formData.message.value) {
      toast.error("All fields are required");
      return;
    }

    if (formData.message.value.length < 20) {
      toast.error("A minimum of 20 characters is required for your message.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      })
      .then(
        () => {
          toast.success("Email Sent Successfully. Thank You.");
          setEmailSent(true);
        },
        (error) => {
          toast.error("Something went wrong. Please check your fields and try again.");
        }
      )

    console.log(formData);
  };
  if (!emailSent) return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          name="message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );

  if (emailSent) return (
    <div className="">
      <Paragraph>Email Sent! I will be in contact as soon as possible! Thank You.</Paragraph>
    </div>
  )
};
