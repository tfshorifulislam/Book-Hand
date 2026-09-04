export const resetPasswordEmail = ({ name, url, }: { name: string; url: string; }) =>
    `
    <h2>Reset Your Password</h2>
    <p>Hello ${name},</p>
    <p>Click the button below to reset your password.</p>

    <a href="${url}">
        Reset Password
    </a>
`;