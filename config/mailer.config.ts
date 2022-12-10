import nodemailer from 'nodemailer'

//nodemailer stuff
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAILSERVICE_EMAIL,
        pass: process.env.EMAILSERVICE_PASSWORD
    }
})

//testing success
export const emailConfig = () => {
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('email service connection established');
        }
    })
}


export default transporter