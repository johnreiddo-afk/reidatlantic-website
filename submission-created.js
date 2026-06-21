// Netlify function: runs automatically whenever a form is submitted.
// Sends the branded email template at emails/form-submission/index.html
// via the Netlify Email Integration (Netlify + SendGrid).
//
// Required before this works:
//   1. Install the "Netlify Email Integration" extension (adds SendGrid).
//   2. Set env vars in Netlify → Site settings → Environment variables:
//        NETLIFY_EMAILS_DIRECTORY = ./emails
//        NETLIFY_EMAILS_SECRET    = (any long random string)
//        SENDGRID_API_KEY         = (your SendGrid key)
//   3. Verify your sender/domain in SendGrid.
//
// Change the `to` / `from` addresses below to your real addresses.

exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const payload = body.payload || {};
  const data = payload.data || {};

  // Only handle the "contact" form.
  if (payload.form_name && payload.form_name !== "contact") {
    return { statusCode: 200, body: "ignored" };
  }

  const role = data.role || "";
  const name = data.name || "Website visitor";

  await fetch(`${process.env.URL}/.netlify/functions/emails/form-submission`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
    },
    body: JSON.stringify({
      from: "connect@reidatlantic.com",
      to: "connect@reidatlantic.com",
      subject: `New ${role} enquiry — ${name}`,
      parameters: {
        role,
        name,
        email: data.email || "",
        org: data.org || "",
        message: data.message || "",
        file: data.file || "",
      },
    }),
  });

  return { statusCode: 200, body: "sent" };
};
