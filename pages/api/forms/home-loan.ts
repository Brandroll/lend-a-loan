import type { NextApiRequest, NextApiResponse } from "next";
import addOAuthInterceptor from "axios-oauth-1.0a";
import axios from "axios";
const client = axios.create();
import second from "yup";
type Data = {
  name?: string;
  error?: string;
  message?: string;
};
addOAuthInterceptor(client, {
  algorithm: "HMAC-SHA1",
  key: "ck_d3dd139461b4e81a17b2e7b0f07b10e84d2a38e5",
  secret: "cs_79b35b1c01d485419694b70db4146408e7e3dd71",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Process a POST request
    const {
      first_buyer,
      when_to_buy,
      regular_payment,
      purpose,
      property_value,
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
      current_home_status,
      full_name,
      phone,
      email,
    } = JSON.parse(req.body);

    const data = {
      input_1: first_buyer,
      input_3: when_to_buy,
      input_4: purpose,
      input_5: expected_purchase_price,

      input_6: deposit,
      input_7: credit_history,
      input_8: empoloyment_type,
      input_9: no_of_applicant,

      input_10: regular_monthly_income,
      input_11: rental_monthly_income,
      input_12: regular_tax,
      input_13: dependants,
      input_14: regular_monthly_expense,
      input_15: existing_lon_payment,
      input_16: credit_card_limits,
      input_17: current_home_status,
      input_18: full_name,
      input_19: email,
      input_21: phone,
    };
    console.log({ data });
    const formResp = await axios({
      method: "post",
      url: "https://cms.lendaloan.com.au/wp-json/gf/v2/forms/6/submissions",
      data,
    });
    try {
      if (formResp.data.is_valid) {
        res.status(200).json({ message: "Form has been submitted" });
      } else {
        res
          .status(404)
          .json({ error: "Error while submitting", name: formResp.data });
      }
    } catch (err) {
      console.log({ err });
      res.status(404).json({ error: err });
    }
  }
}
