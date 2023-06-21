import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Radio from "@/components/UI/forms/radio/radio";
import * as yup from "yup";
import { Form } from "@/components/UI/forms/Form";
import Input from "@/components/UI/forms/Input";
import Button from "@/components/UI/button";
import { toast } from "react-toastify";
const isGibberish = (value) => {
  const gibberishPattern = /[a-zA-Z]{4,}/;
  return !gibberishPattern.test(value);
};
const schema = yup.object().shape({
  amount: yup
    .number()
    .min(5000, "Amount must be at least 5000")
    .required("Amount is required"),
  purpose: yup
    .string()

    .required("Purpose is required"),
  address: yup
    .string()

    .required("Address is required"),
  trading_period: yup
    .string()

    .required("Trading period is required"),
  registered_business: yup
    .string()

    .required("Registered business is required"),
  abn_acn: yup
    .string()

    .required("ABN/ACN is required"),
  full_name: yup
    .string()

    .required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
});
export default function RefinanceForm() {
  const [step, setStep] = useState(1);
  const [formError, setFormError] = useState("");
  const initalValue = {
    amount: "",
    purpose: "",
    full_name: "",
    email: "",
    phone: "",
    trading_period: "",
    registered_business: "",
    abn_acn: "",
    full_name: "",
    email: "",
    phone: "",
  };
  const [formData, setFormData] = useState({
    amount: "$",
    purpose: "",
    full_name: "",
    email: "",
    phone: "",
    trading_period: "",
    registered_business: "",
    abn_acn: "",
    full_name: "",
    email: "",
    phone: "",
  });
  const {
    amount,
    purpose,
    address,
    trading_period,
    registered_business,
    abn_acn,
  } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.replace("$", ""),
    });
    setFormError("");
    // setFinalFormData({ ...finalFormData, [e.target.name]: e.target.value });
  };
  const data = [
    {
      step: 1,
      value: amount,
      label: "Q. How much do you want to borrow?",
      name: "amount",
      type: "number",
      placeholder: "e.g. $ 40,000",
    },
    {
      step: 2,
      value: purpose,
      label: "Q. What is the loan for?",
      placeholder: "Select puropose",
      options: [
        "Equipment Purchase",
        "Expansion and Growth",
        "Pay suppliers",
        "Purchasing inventory ",
        "Renovation",
        "Working capital",
        "Pay off non-tax debt",
        "Pay off tax debt",
        "other",
      ],
      name: "purpose",
    },
    {
      step: 3,
      value: trading_period,
      label: `Q. How long have you been trading?`,
      placeholder: "Select puropose",
      options: ["Less then 6 months", "6-12 Months", "12 month+"],
      name: "trading_period",
    },

    {
      step: 4,
      value: registered_business,
      label: "Q. What is your registered business name?",
      placeholder: "What is your registered business name",
      name: "registered_business",
    },
    {
      step: 5,
      value: abn_acn,
      label: "Q. ABN or ACN number?",
      placeholder: " ABN or ACN number?",

      name: "abn_acn",
    },
    {
      step: 6,
      value: address,
      label: "Q. What is your business trading address?",
      placeholder: "Address",
      name: "address",
    },
  ];

  const handleSubmit = async (e) => {
    try {
      const validated = await schema.validate(formData);

      fetch("/api/forms/business", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((resp) => {
          console.log(resp);
          setFormData({ ...initalValue });
          setStep(1);
          toast.success("Form Has Been Submitted");
        })
        .catch((err) => {
          toast.error("There is some issue");
          console.log(err);
        });
    } catch (err) {
      toast.error(err.message);
    }
    return;
  };
  const getCorrectInputForm = (step) => {
    if (step === data.length + 1) {
      return;
    }
    return data.find((inp) => inp.step === step);
  };
  const nextStep = async () => {
    if (step == data.length + 1) {
      handleSubmit();
      return;
    }
    //check if the current step data is filled
    const currentData = isFilled(step);
    const isValidated = await isNotFilled(currentData);

    if (isValidated && formError.length === 0) {
      setStep(step + 1);
    } else {
      isNotFilled(currentData);
    }
    return;
  };
  const isNotFilled = async (currentData) => {
    try {
      const validation = await schema.validateAt(currentData.name, {
        [currentData.name]: currentData.value,
      });
      return true;
    } catch (err) {
      setFormError(err.message);
      return false;
    }
  };

  const isFilled = (step) => {
    const crtData = data.find((field) => field.step === step);

    return crtData;
  };

  return (
    <>
      <AnimatePresence>
        {step < data.length + 1 && (
          <InputGroup
            {...getCorrectInputForm(step)}
            onChange={handleInputChange}
          />
        )}
      </AnimatePresence>
      <div>
        {formError.length > 0 && (
          <div>
            <p className="font-isidorasans leading-7 tracking-wider text-xs my-2 text-red-600">
              {formError}
            </p>
          </div>
        )}
      </div>

      {step === data.length + 1 && (
        <FinalForm value={formData} onChange={handleInputChange} />
      )}

      <div className="flex justify-start">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="py-2 bg-brand-blue text-white font-isidorasans_medium border px-6 text-[20px] my-4"
          >
            {step > 1 ? "Previous" : null}
          </button>
        )}

        <button
          onClick={nextStep}
          className="py-2 bg-brand-blue text-white font-isidorasans_medium border px-6 text-[20px] my-4"
        >
          {step < data.length + 1 ? "Continue" : "Submit"}
        </button>
      </div>
    </>
  );
}

const InputGroup = (props) => {
  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    incoming: { x: "100%", opacity: 0 },
    outgoing: { x: "-100%", opacity: 0 },
  };
  const selectedValue = props.value;

  return (
    <motion.div
      initial="incoming"
      animate="center"
      exit="outgoing"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="grid "
    >
      <div className="grid ">
        <label className="mb-2 text-[20px] font-isidorasans_medium">
          {props.label}
        </label>
        {props.options ? (
          <div className="grid grid-cols-4 gap-4">
            {props.options.map((opt) => (
              <button
                className={`flex
                text-[18px]
              flex-wrap flex-col justify-center border ${
                selectedValue === opt
                  ? "-translate-y-2 bg-brand-blue text-white font-bold"
                  : "  hover:-translate-y-2"
              }  p-8 rounded-xl shadow-xl
          transition-all delay-300 gap-4 items-center cursor-pointer capitalize
           `}
                // className={`p-2 border capitalize rounded bg-emerald-600/70 ${
                //   selectedValue === opt ? "bg-emerald-800" : ""
                // }  text-white `}
                value={opt}
                onClick={() => {
                  props.onChange({
                    target: {
                      name: props.name,
                      value: opt,
                    },
                  });
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <input
            className=" border-b outline-none px-4 py-2"
            value={[props.value]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
          />
        )}
      </div>
    </motion.div>
  );
};

const FinalForm = (props) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid">
          <label>Full name</label>
          <input
            value={[props.value.full_name]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={"full_name"}
            className=" border-b outline-none  py-2"
          />
        </div>
        <div className="grid">
          <label>Mobile</label>
          <input
            className=" border-b outline-none  py-2"
            value={[props.value.phone]}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={"phone"}
          />
        </div>
      </div>
      <div className="grid mt-4">
        <label>Email</label>
        <input
          className=" border-b outline-none  py-2"
          value={[props.value.email]}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={"email"}
        />
      </div>
    </div>
  );
};
