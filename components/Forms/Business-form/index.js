import { useState } from "react";
import { motion } from "framer-motion";
import Radio from "@/components/UI/forms/radio/radio";
export default function RefinanceForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: "",
    interest: "",
    regular_payment: "",
    current_lender: "",
    purpose: "",
    repayment: "",
    address: "",
    property_value: "",
    annual_income: "",
    loan_term: "",
    trading_period: "",
    registered_business: "",
    abn_acn: "",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const data = [
    {
      step: 1,
      value: amount,
      label: "Q. How much do you want to borrow?",
      name: "amount",
      placeholder: "e.g. 40,000",
    },
    {
      step: 2,
      value: purpose,
      label: "Q. What is the loan for?",
      placeholder: "Select puropose",
      options: [
        "Buying or hiring equipment",
        "Expansion, growth or marketing",
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

  const handleSubmit = (e) => {
    console.dir(formData);
  };
  const getCorrectInputForm = (step) => {
    if (step === data.length + 1) {
      return;
    }
    return data.find((inp) => inp.step === step);
  };
  const nextStep = () => {
    if (step == data.length + 1) {
      handleSubmit();
      return;
    }
    setStep(step + 1);
  };
  return (
    <div>
      {step < data.length + 1 && (
        <InputGroup
          {...getCorrectInputForm(step)}
          onChange={handleInputChange}
        />
      )}

      {step === data.length + 1 && <FinalForm />}

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
    </div>
  );
}

const InputGroup = (props) => {
  const variants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    incoming: { x: "100%", opacity: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid "
    >
      <motion.div className="grid ">
        <motion.label className="mb-2 text-[20px] font-isidorasans_medium">
          {props.label}
        </motion.label>
        {props.options ? (
          <div className="grid grid-cols-4 gap-4">
            {props.options.map((opt) => (
              <button
                className="p-2 border rounded bg-yellow-500 text-white"
                value={opt}
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
      </motion.div>
    </motion.div>
  );
};

const FinalForm = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid">
          <label>Full name</label>
          <input
            className=" border-b outline-none  py-2"
            placeholder="Full name"
          />
        </div>
        <div className="grid">
          <label>Mobile</label>
          <input
            className=" border-b outline-none  py-2"
            placeholder="04XXX XXXX"
          />
        </div>
      </div>
      <div className="grid mt-4">
        <label>Email</label>
        <input
          className=" border-b outline-none  py-2"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
};
