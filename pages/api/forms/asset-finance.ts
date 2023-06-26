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
      purchased_price,
      purpose,

      address,
      trading_period,
      registered_business,
      abn_acn,
      full_name,
      email,
      phone,
      new_or_used,
      type_of_use,
      credit_history,
      employment_type,
      no_of_applicant,
      property_value,
    } = JSON.parse(req.body);

    const data = {
      input_1: purpose,
      input_3: purchased_price,
      input_4: new_or_used,
      input_9: type_of_use,
      input_5: credit_history,
      input_6: employment_type,
      input_7: no_of_applicant,
      input_8: property_value,

      input_10: full_name,
      input_11: email,
      input_12: phone,
    };

    const formResp = await axios({
      method: "post",
      url: "https://cms.lendaloan.com.au/wp-json/gf/v2/forms/5/submissions",
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
