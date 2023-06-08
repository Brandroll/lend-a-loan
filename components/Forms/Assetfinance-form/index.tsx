import { useState } from "react";
import { motion } from "framer-motion";
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
    purchased_price: "",
    new_or_used: "",
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
    trading_period,
    registered_business,
    abn_acn,
    purchased_price,
    new_or_used,
  } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const data = [
    {
      step: 1,
      value: purpose,
      label: "Q. What is the loan for?",
      placeholder: "Select puropose",
      options: ["Car", "Motorcycle", "Carvan", "Boat"],
      name: "purpose",
    },
    {
      step: 2,
      value: purchased_price,
      label: "Q. What is the purchased price for the vehicle or asset?",
      placeholder: "e.g. $40000",

      name: "purchased_price",
    },
    {
      step: 3,
      value: new_or_used,
      label: `Q. Is this vehicle or asset new or used?
      `,

      options: ["New", "Used"],
      name: "new_or_used",
    },

    {
      step: 4,
      value: new_or_used,
      label: `Q. Is this vehicle or asset for business use or personal use?

      `,

      options: ["Business Use", "Personal Use"],
      name: "new_or_used",
    },
    {
      step: 5,
      value: abn_acn,
      label: `Q. What is your credit history (optional)?
      `,
      options: ["Excellent", "Average", "Fair", "I don't know"],

      name: "abn_acn",
    },
    {
      step: 6,
      value: abn_acn,
      label: `Q. What is your employment type?

      `,
      options: ["Employee", "Self Employed", "Other"],

      name: "abn_acn",
    },
    {
      step: 7,
      value: abn_acn,
      label: `Q. How many applicants will be involve for this loan application?

      `,
      options: ["One", "Two", "More"],

      name: "abn_acn",
    },
    {
      step: 8,
      value: property_value,
      label: `Q. What's your combined income? Total combined estimated income (Monthly):
      `,
      placeholder: "e.g. 40,000",
      name: "property_value",
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
          {props.label}
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
