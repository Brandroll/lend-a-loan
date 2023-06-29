import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as yup from "yup";
import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "@/utils/capitalise-word";
import ThankyouForm from "@/components/UI/forms/ThankyouForm";

const schema = yup.object().shape({
  first_buyer: yup.string().required("Data is required"),
  when_to_buy: yup.string().required("When to buy is required"),
  purpose: yup.string().required("Purpose is required"),

  expected_purchase_price: yup
    .string()
    .required("Expected purchase price is required"),
  deposit: yup.string().required("Deposit is required"),
  credit_history: yup.string().required("Credit history is required"),
  empoloyment_type: yup.string().required("Employment type is required"),
  no_of_applicant: yup.string().required("Number of applicants is required"),
  regular_monthly_income: yup
    .string()
    .required("Regular monthly income is required"),
  rental_monthly_income: yup
    .string()
    .required("Rental monthly income is required"),
  regular_tax: yup.string().required("Regular tax is required"),
  dependants: yup.string().required("Dependants is required"),
  regular_monthly_expense: yup
    .string()
    .required("Regular monthly expense is required"),
  existing_lon_payment: yup
    .string()
    .required("Existing loan payment is required"),
  credit_card_limits: yup.string().required("Credit card limits is required"),
  current_home_status: yup.string().required("This is required"),
});
export default function RefinanceForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const initalValue = {
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
    current_home_status: "",
  };
  const [formData, setFormData] = useState({
    first_buyer: false,
    when_to_buy: "",

    regular_payment: "",

    purpose: "",

    property_value: "",

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
    current_home_status: "",
  });
  const {
    first_buyer,
    current_home_status,

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
      name: "purpose",
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
    {
      step: 16,
      value: current_home_status,
      label: `What will happen to your current home
      `,

      options: [
        "Planning to sell the property and will require a bridging loan",
        "We have sold the property and are awaiting settlement",
        "Planning to rent the property after our purchase",
        "The property will be used as a holiday home",
        "Still not sure",
      ],

      name: "current_home_status",
    },
  ];

  const handleSubmit = async (e) => {
    try {
      const validated = await schema.validate(formData);

      fetch("/api/forms/home-loan", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((resp) => {
          setFormData({ ...initalValue });
          setIsSubmitted(true);
          toast.success("Form Has Been Submitted");
          setStep(1);
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

  if (isSubmitted) {
    return <ThankyouForm />;
  }
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
        <label className="mb-6 text-[20px] font-isidorasans_medium">
          {capitalizeFirstLetter(props.label)}
        </label>
        {props.options ? (
          <div
            className={`grid ${
              props.options.length > 3 ? "grid-cols-2" : "grid-cols-2"
            }  gap-4`}
          >
            {props.options.map((opt) => (
              <button
                className={`flex
               text-[18px]
             flex-wrap flex-col justify-center border ${
               selectedValue === opt
                 ? "-translate-y-2 bg-brand-blue text-white font-bold"
                 : "  hover:-translate-y-2"
             }  p-4 rounded-xl shadow-xl
         transition-all delay-300 gap-4 items-center cursor-pointer  
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
                {capitalizeFirstLetter(opt)}
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
