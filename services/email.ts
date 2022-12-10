import transporter from "../config/mailer.config";

const email = async (to: string, subject: string, content: string) => {
    try {
        //mailoptions
        const mailOptions = {
            from: process.env.NODEMAILER,
            to: to,
            subject: subject,
            text: content
        }

        await transporter.sendMail(mailOptions)

    } catch (error) {

        console.log(error);

    }

}
export default email