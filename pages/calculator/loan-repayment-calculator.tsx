import YoastNextSeo from "@/components/UI/YoastNextSeo";

export default function LoanPayemt(props: any) {
  const { pageData } = props;
  return (
    <div className="max-w-site-full mx-auto">
      <YoastNextSeo {...pageData.yoast_head_json} />
      <div className="my-32">
        <iframe
          className="w-full "
          height={800}
          src="https://www.visionabacus.net/Tools/B3/SuiteA/G100/Loan_Repayment_Calculator/FBAA"
        ></iframe>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const homepage_url = process.env.NEXT_WP_API_URL + `/custom-page/115`;

  const homePageData = await fetch(homepage_url).then((r) => r.json());

  return {
    props: {
      pageData: homePageData,
    },
  };
};
