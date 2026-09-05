import { betterAuth } from "better-auth";
import { Pool } from "pg";
import nodemailer from "nodemailer";
import { resetPasswordEmail } from "@/components/emails/resetPasswordEmail";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,

    trustedOrigins: [
        process.env.NEXT_PUBLIC_FRONTEND_URL!,
    ],

    database: new Pool({
        connectionString: process.env.DATABASE_URL,
    }),

    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
    },

    emailAndPassword: {
        enabled: true,

        sendResetPassword: async ({ user, url }) => {
            await transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: user.email,
                subject: "Reset your password",
                html: resetPasswordEmail({
                    name: user.name,
                    url,
                }),
            });
        },
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },

});