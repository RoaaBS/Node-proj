import nodemailer from "nodemailer";

export async function SendEmail(to,subject,html) { 
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: "roaa.sabbarini@gmail.com",
      pass: "lpyx hvsj yfsq oqxj",
    },
  });

  const info = await transporter.sendMail({
    from: '"Node 👻" <roaa.sabbarini@gmail.com>', 
    to, 
    subject,
    html,
  });
}
