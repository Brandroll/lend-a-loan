import { useState } from "react";
import { motion } from "framer-motion";
export default function PurchaseForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_buyer: false,
    when_to_buy: "",
    interest: "",
    regular_payment: "",
    current_lender: "",
    purpose: "",
    repayment: "",
    address: "",
    property_value: "",
    annual_income: "",
    loan_term: "",
    expected_purchase_price: "",
    deposit: "",
    credit_history: "",
    empoloyment_type: "",
    no_of_applicant: "",
    regular_monthly_income: "",
    rental_monthly_income: "",
    regular_tax: "",
    dependants: "",
    regular_monthly_expense: "",
    existing_lon_payment: "",
    credit_card_limits: "",
  });
  const {
    first_buyer,

    purpose,

    when_to_buy,
    expected_purchase_price,
    deposit,
    credit_history,
    empoloyment_type,
    no_of_applicant,
    regular_monthly_income,
    rental_monthly_income,
    regular_tax,
    dependants,
    regular_monthly_expense,
    existing_lon_payment,
    credit_card_limits,
  } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const data = [
    {
      step: 1,
      value: first_buyer,
      label: `Q. Are you a first home buyer?`,
      name: "first_buyer",
      options: [`Yes`, `no`],
    },
    {
      step: 2,
      value: when_to_buy,
      label: `Q. How close are you to buying?
      `,
      name: "when_to_buy",
      placeholder: "e.g.3.8",
      options: [
        `I’m just starting to look around`,
        `I am still looking for the right place
      `,
        `

      I’ve found the property already`,
        `I’ve signed the contract`,
      ],
    },
    {
      step: 3,
      value: purpose,
      label: `Q. Will you live there, or will it be an investment property?
      `,
      options: [`I’ll live there`, `Investment property`],
    },
    {
      step: 4,
      value: expected_purchase_price,
      label: `Q. What is your expected purchase price?
      `,
      placeholder: "$e.g. 40,000",
      name: "expected_purchase_price",
    },
    {
      step: 5,
      value: deposit,
      label: `Q. How much deposit do you have?
      `,
      placeholder: "$e.g. 40,000",

      name: "deposit",
    },
    {
      step: 6,
      value: credit_history,
      label: `Q. What is your credit history (optional)?
      `,

      options: ["Excellent", "Average", "Fair", "I Don't Know"],
      name: "credit_history",
    },
    {
      step: 7,
      value: empoloyment_type,
      label: `Q. What is your employment type?
      `,
      options: ["Employee", "Self-Employed", "Other"],

      name: "empoloyment_type",
    },
    {
      step: 8,
      value: no_of_applicant,
      label: `Q. How many applicants will be involve for this loan application?
      `,
      options: ["One", "Two", "More"],

      name: "no_of_applicant",
    },
    {
      step: 9,
      value: regular_monthly_income,
      label: `Your (plus other applicant’s) income (Monthly):
      `,
      placeholder: "e.g. 40,333",
      name: "regular_monthly_income",
    },
    {
      step: 10,
      value: rental_monthly_income,
      label: `Any rental or other income (Monthly):
      `,
      placeholder: "e.g. 40,333",

      name: "rental_monthly_income",
    },
    {
      step: 11,
      value: regular_tax,
      label: `Before tax (Monthly):

      `,
      placeholder: "e.g. 40,333",

      name: "regular_tax",
    },

    {
      step: 12,
      value: dependants,
      label: `Q. How many dependants do you have? `,

      placeholder: "1 or 2 ",

      name: "dependants",
    },
    {
      step: 13,
      value: regular_monthly_expense,
      label: `Your (plus other applicant’s) household expenses (Monthly):
      `,

      placeholder: "e.g. 40,333",

      name: "regular_monthly_expense",
    },
    {
      step: 14,
      value: existing_lon_payment,
      label: `Your (plus other applicant’s) existing other monthly loan repayments (Monthly):

      `,

      placeholder: "e.g. 40,333",

      name: "existing_lon_payment",
    },
    {
      step: 15,
      value: credit_card_limits,
      label: `Your (plus other applicant’s) total credit card limits (Monthly):


      `,

      placeholder: "e.g. 40,333",

      name: "credit_card_limits",
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
