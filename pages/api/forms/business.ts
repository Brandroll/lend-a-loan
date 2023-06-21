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
      amount,
      purpose,
      address,
      trading_period,
      registered_business,
      abn_acn,
      full_name,
      email,
      phone,
    } = JSON.parse(req.body);

    const data = {
      input_1: amount,
      input_3: purpose,
      input_4: trading_period,
      input_5: registered_business,
      input_6: abn_acn,
      input_8: address,
      input_12: full_name,
      input_10: email,
      input_11: phone,
    };

    const formResp = await axios({
      method: "post",
      url: "https://cms.lendaloan.com.au/wp-json/gf/v2/forms/4/submissions",
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
