import type { NextApiRequest, NextApiResponse } from "next";
import addOAuthInterceptor from "axios-oauth-1.0a";
import axios from "axios";
const client = axios.create();

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
      first_name,
      last_name,
      email,
      phone,
      enquiry,
      contact,
      message,
      token,
    } = req.body.data;
    const data = {
      input_1: first_name,
      input_3: last_name,
      input_4: email,
      input_5: phone,

      input_7: contact,
      input_6: message,
    };

    const tokenRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    if (tokenRes.status == 200) {
      const formResp = await axios({
        method: "post",
        url: "https://cms.lendaloan.com.au/wp-json/gf/v2/forms/1/submissions",
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
}
