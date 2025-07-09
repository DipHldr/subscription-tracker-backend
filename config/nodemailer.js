import nodemailer from 'nodemailer'
import { EMAIL_PASS } from './env.js'

export const AccountEmail='hououinkyouma1123@gmail.com'

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'hououinkyouma1123@gmail.com',
        pass:EMAIL_PASS
    }
})

export default transporter;