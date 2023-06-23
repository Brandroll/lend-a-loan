import { useState } from "react";
import { motion } from "framer-motion";
import { capitalizeFirstLetter } from "@/utils/capitalise-word";
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
  });
  const {
    amount,
    interest,
    regular_payment,
    current_lender,
    purpose,
    repayment,
    property_value,
    annual_income,
    loan_term,
    address,
  } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const data = [
    {
      step: 1,
      value: amount,
      label: "Q. Amount owing on your loan?",
      name: "amount",
      placeholder: "e.g. 40,000",
    },
    {
      step: 2,
      value: interest,
      label: "Q. Interest rate you're paying or best guess?",
      name: "interest",
      placeholder: "e.g.3.8",
    },
    {
      step: 3,
      value: regular_payment,
      label: "Q. Regular repayment amount (Monthly)?",
      name: "regular_payment",
      placeholder: "e.g. 40,000",
    },
    {
      step: 4,
      value: current_lender,
      label: "Q. Current lender?",
      placeholder: "Enter lender name",
      name: "current_lender",
    },
    {
      step: 5,
      value: purpose,
      label: "Q. Purpose of the property?",
      placeholder: "Select puropose",
      options: ["It’s for me to live in", "It’s an investment property"],
      name: "purpose",
    },
    {
      step: 6,
      value: repayment,
      label: "Q. Repayment type?",
      placeholder: "Select puropose",
      options: ["Principal and interest", "Interest only"],
      name: "repayment",
    },
    {
      step: 7,
      value: address,
      label: "Q. Property's address for a current valuation?",
      placeholder: "Address",
      name: "address",
    },
    {
      step: 8,
      value: property_value,
      label: "Q. Property value or best guess?",
      placeholder: "e.g. 40,333",
      name: "property_value",
    },
    {
      step: 9,
      value: annual_income,
      label: "Q. Total annual household income before tax?",
      placeholder: "e.g. 40,333",
      name: "annual_income",
    },
    {
      step: 10,
      value: loan_term,
      label: "Q. Loan terms (Years)?",
      placeholder: "e.g. 10",
      name: "loan_term",
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="grid "
    >
      <motion.div className="grid ">
        <motion.label className="mb-2 text-[20px] font-isidorasans_medium">
          {capitalizeFirstLetter(props.label)}
        </motion.label>
        {props.options ? (
          <select
            className="outline-none py-2 px-4 border-b"
            onChange={props.onChange}
            name={props.name}
          >
            {props.options.map((opt) => (
              <option className="p-2" value={opt}>
                {opt}
              </option>
            ))}
          </select>
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
