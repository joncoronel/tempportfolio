import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const templateParams = {
    name,
    email,
    message,
  };

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY;
  console.log("serviceID", serviceID);

  try {
    emailjs
      .send(serviceID, templateID, templateParams, {
        publicKey: publicKey,
        privateKey: privateKey, // optional, highly recommended for security reasons
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          return new NextResponse("Email sent", { status: 200 });
        },
        (err) => {
          console.log("FAILED...", err);
          return new NextResponse("Error sending email", { status: 500 });
        },
      );

    return new NextResponse("Email sent", { status: 200 });
  } catch (error) {
    console.error("Error sending email", error);
    return new NextResponse("Error sending email", { status: 500 });
  }
}
