import * as yup from "yup";
import { Form } from "@/components/UI/forms/Form";
import { CreateContactUsInput } from "@/types";

import React, { TextareaHTMLAttributes, useState } from "react";
import Input from "./ContactInput";
import { toast } from "react-toastify";
import axios from "axios";

const contactFormSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone: yup.number().required("Phone is required"),
  email: yup
    .string()
    .email("Incorrect email format")
    .required("E-mail is required"),

  message: yup.string().required("Message is required"),
});

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  shadow?: boolean;
  variant?: "normal" | "solid" | "outline";
}
const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    className,
    label,
    name,
    error,
    variant = "normal",
    shadow = false,
    inputClassName,
    ...rest
  } = props;
  return (
    <div className={"grid col-span-2  "}>
      {label && (
        <label
          htmlFor={name}
          className="  block text-left mb-3 text-18px font-semibold leading-none text-body-dark"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className="p-4 border   rounded-md outline-none"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        rows={4}
        ref={ref}
        {...rest}
      />
      {error && <p className="my-2 text-xs text-red-500">{error}</p>}
    </div>
  );
});
export default function ContactForm(props: any) {
  const [resetForm, setResetForm] = useState({});
  const [selectedTime, setSelectedTime] = useState("");

  const resetValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    enquiry: "",
    contact: "",
    message: "",
  };
  function onSubmit(values: CreateContactUsInput) {
    const data = {
      ...values,
      contact: selectedTime,
    };
    console.log({ data });
    const url = props.apiUrl ? "/api/" + props.apiUrl : "/api/contact";
    // axios
    //   .post(url, {
    //     data: { ...values, contact: selectedTime },
    //   })
    //   .then((res) => {
    //     if (res.data.message) {
    //       toast.success(res.data.message);
    //       setResetForm(resetValues);
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.error);
    //   });
  }
  return (
    <>
      <Form<CreateContactUsInput>
        onSubmit={onSubmit}
        validationSchema={contactFormSchema}
        resetValues={resetForm}
      >
        {({ register, formState: { errors } }) => (
          <div className="grid grid-cols-2 py-4 font-isidorasans_medium    gap-8 font-normal">
            <Input
              label="First name"
              {...register("first_name")}
              type="text"
              error={errors.first_name?.message!}
            />

            <Input
              label="Last name"
              {...register("last_name")}
              type="text"
              error={errors.last_name?.message!}
            />

            <Input
              label="Email address"
              {...register("email")}
              type="email"
              error={errors.email?.message!}
            />
            <Input
              label="Contact Number"
              {...register("phone")}
              type="number"
              error={errors.phone?.message!}
            />
            <div className={"grid col-span-2 lg:col-span-1"}>
              <label className=" text-18px block text-left mb-3  font-isidorasans_semi_bold leading-none text-gray-800">
                When is the best time to contact you?
              </label>

              <TimeToContact
                setSelectedTime={setSelectedTime}
                selectedTime={selectedTime}
              />
            </div>

            <TextArea
              label={`How can we help you?`}
              error={errors.message?.message}
              {...register("message")}
            />

            <button className="py-2 uppercase px-8 bg-brand-blue rounded-3xl text-white max-w-fit">
              Submit
            </button>
          </div>
        )}
      </Form>
    </>
  );
}

const TimeToContact = ({ setSelectedTime, selectedTime }: any) => {
  const time = ["Morning", "Noon", "Afternoon", "Evening", "Anytime"];
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 items-center">
      {time.map((t, y) => (
        <div className="flex gap-1 items-center" key={y}>
          <input
            type="radio"
            value={t}
            checked={selectedTime === t ? true : false}
            onChange={(e) => setSelectedTime(t)}
            id={t}
          />
          <label className="cursor-pointer" htmlFor={t}>
            {t}
          </label>
        </div>
      ))}
    </div>
  );
};
