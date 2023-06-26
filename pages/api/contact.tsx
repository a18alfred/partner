import {NextApiRequest, NextApiResponse} from 'next';

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        name: string;
        phone: string;
    };
}

export default function (req: ExtendedNextApiRequest, res: NextApiResponse) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailData = {
        from: 'a18alfred@yahoo.com',
        to: 'a18alfred@yahoo.com',
        subject: `Запрос на звонок с сайта`,
        text: req.body.phone + ' | ' + req.body.name,
        html: `<b>${req.body.phone} | ${req.body.name}</b>`
    }
    transporter.sendMail(mailData)
    res.status(200)
}