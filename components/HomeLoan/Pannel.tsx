export default function Pannel() {
  const info = [
    `I want to buy my first home`,
    `I want to buy an investment`,
    `I want to refinance my home loan`,
    `I want to buy my next home`,
    `I want to consolidate all my loans into one`,
    `All other lending solutions`,
  ];
  return (
    <div className=" my-8 px-4 ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {info.map((i) => (
          <Box info={i} />
        ))}
      </div>
    </div>
  );
}
const Box = ({ info }: { info: string }) => {
  return (
    <div className="bg-brand-blue gap-8 lg:gap-0 hover:shadow-lg delay-150 hover:shadow-brand-blue-light py-2 flex justify-between px-6 items-center rounded-2xl text-white">
      <p className="font-isidorasans_semi_bold text-left text-19px lg:text-25px ">
        {info}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-12 lg:w-16 h-12 lg:h-16 flex-shrink-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
