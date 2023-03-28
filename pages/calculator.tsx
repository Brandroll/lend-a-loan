import SimpleHero from "@/components/Common/SimpleHero";
import YoastNextSeo from "@/components/UI/YoastNextSeo";

export default function Calculator(props: any) {
  const { pageData } = props;

  const data = [
    {
      title: "Stamp duty calculator",
      desc: `Find out how much stamp duty you’ll have to pay on a home. Link to calculator to be embed:`,
      svgIcon: `  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-12 text-brand-blue"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>`,
      href: "",
    },
    {
      title: `Loan Repayment calculator`,
      desc: `Find out how much stamp duty you’ll have to pay on a home.
      Link to calculator to be embed:`,
      svgIcon: `<svg viewBox="0 0 192 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M192 208C192 210.122 191.157 212.157 189.657 213.657C188.157 215.157 186.122 216 184 216H8C5.87827 216 3.84344 215.157 2.34315 213.657C0.842856 212.157 0 210.122 0 208C0 205.878 0.842856 203.843 2.34315 202.343C3.84344 200.843 5.87827 200 8 200H184C186.122 200 188.157 200.843 189.657 202.343C191.157 203.843 192 205.878 192 208ZM192 128V168C192 172.243 190.314 176.313 187.314 179.314C184.313 182.314 180.243 184 176 184H16C11.7565 184 7.68687 182.314 4.68629 179.314C1.68571 176.313 0 172.243 0 168V128C0 123.757 1.68571 119.687 4.68629 116.686C7.68687 113.686 11.7565 112 16 112H72.43L56.72 38.71C55.7195 34.0449 55.7749 29.2151 56.8821 24.5742C57.9893 19.9333 60.1202 15.5987 63.1189 11.8877C66.1177 8.17666 69.9083 5.18316 74.2133 3.1263C78.5183 1.06944 83.2288 0.00128084 88 3.10439e-08H104C108.772 -0.000210151 113.484 1.06686 117.79 3.12307C122.096 5.17929 125.888 8.17258 128.888 11.8838C131.888 15.595 134.02 19.9301 135.127 24.5718C136.235 29.2134 136.291 34.0441 135.29 38.71L119.57 112H176C180.243 112 184.313 113.686 187.314 116.686C190.314 119.687 192 123.757 192 128ZM88.79 112H103.21L119.64 35.35C120.139 33.0178 120.111 30.6035 119.557 28.2836C119.003 25.9638 117.937 23.7972 116.438 21.9423C114.939 20.0874 113.044 18.5911 110.892 17.5629C108.74 16.5348 106.385 16.0008 104 16H88C85.6141 15.9993 83.2582 16.5322 81.1049 17.5597C78.9516 18.5872 77.0553 20.0833 75.555 21.9384C74.0546 23.7935 72.9881 25.9606 72.4335 28.2812C71.879 30.6018 71.8505 33.017 72.35 35.35L88.79 112ZM176 168V128H16V168H176Z" fill="#61C0CD"/>
      </svg>
      
      `,
      href: "",
    },

    {
      title: `Borrowing power calculator`,
      desc: `Use your details to estimate how much you could borrow.
      Link to calculator to be embed`,
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    
      
      `,
      href: "",
    },

    {
      title: `Loan comparison calculator`,
      desc: `Adjust rates and terms to compare different home loans.
      Link to calculator to be embed`,
      svgIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
    
      
      `,
      href: "",
    },
    {
      title: `Income annualisation calculator`,
      desc: `Work out your annual income from the money you’ve received so far this year.`,
      svgIcon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
    
    
      
      `,
      href: "",
    },
  ];

  const otherCalc = [
    {
      title: "Split Loan Calculator",
      href: "",
    },
    {
      title: "Savings Calculator",
    },
    {
      title: "Property Selling Cost Calculator",
      href: "",
    },
    {
      title: "Interest Only Mortgage Calculator",
      href: "",
    },
    {
      title: "Leasing Calculator",
      href: "",
    },
  ];
  return (
    <>
      <SimpleHero
        heading="Calculators"
        subHeading="We are more than just a broker."
      />
      <div className="max-w-site-full mx-auto">
        <YoastNextSeo {...pageData.yoast_head_json} />
      </div>

      <section className="grid lg:grid-cols-3 lg:px-40 bg-gray-bg py-16  ">
        {data.map((d) => (
          <CalculatorGrid {...d} />
        ))}
      </section>

      <section className="grid lg:grid-cols-2 lg:px-40 bg-gray-bg py-16  ">
        {otherCalc.map((t, idx) => (
          <div key={idx} className="my-4">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-brand-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                />
              </svg>
              <span>{t.title}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

const CalculatorGrid = (props: any) => {
  return (
    <div className="  p-6  ">
      <div
        className="w-12 h-12 text-brand-blue"
        dangerouslySetInnerHTML={{ __html: props.svgIcon }}
      ></div>
      <h5 className="font-isidorasans_semi_bold text-brand-blue text-24px ">
        {props.title}
      </h5>
      <p className="font-isidorasans_medium">{props.desc}</p>
      <button className="flex gap-2 py-4 px-4 text-16px font-isidorasans_medium bg-brand-blue text-white rounded-md hover:-translate-y-2 delay-200 transition-all my-4">
        Calculate Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};
export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/115`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      pageData: homePageData,
    },
  };
};
