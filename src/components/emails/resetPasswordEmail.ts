export const resetPasswordEmail = ({
    name,
    url,
}: {
    name: string;
    url: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password</title>
</head>

<body style="
    margin: 0;
    padding: 0;
    background-color: #f4f4f5;
    font-family: Arial, Helvetica, sans-serif;
">

    <div style="
        width: 100%;
        padding: 50px 20px;
        box-sizing: border-box;
    ">

        <div style="
            max-width: 520px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e4e4e7;
            border-radius: 16px;
            overflow: hidden;
        ">

            <!-- Header -->
            <div style="
                padding: 28px 30px;
                text-align: center;
                border-bottom: 1px solid #f0f0f0;
            ">
                <h1 style="
                    margin: 0;
                    font-size: 26px;
                    font-weight: 700;
                    color: #18181b;
                ">
                    BookHand
                </h1>
            </div>

            <!-- Content -->
            <div style="padding: 40px 32px;">

                <h2 style="
                    margin: 0 0 16px;
                    font-size: 26px;
                    color: #18181b;
                ">
                    Reset Your Password
                </h2>

                <p style="
                    margin: 0 0 16px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #3f3f46;
                ">
                    Hello ${name},
                </p>

                <p style="
                    margin: 0 0 28px;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #52525b;
                ">
                    We received a request to reset the password for your
                    BookHand account. Click the button below to create
                    a new password.
                </p>

                <!-- Button -->
                <div style="
                    text-align: center;
                    margin-bottom: 30px;
                ">
                    <a
                        href="${url}"
                        style="
                            display: inline-block;
                            padding: 14px 30px;
                            background-color: #18181b;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 8px;
                            font-size: 15px;
                            font-weight: 600;
                        "
                    >
                        Reset Password
                    </a>
                </div>

                <p style="
                    margin: 0 0 10px;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #71717a;
                ">
                    For security reasons, this password reset link will
                    expire soon.
                </p>

                <p style="
                    margin: 0;
                    font-size: 13px;
                    line-height: 1.6;
                    color: #71717a;
                ">
                    If you didn't request this password reset, you can
                    safely ignore this email.
                </p>

            </div>

            <!-- Footer -->
            <div style="
                padding: 22px 30px;
                text-align: center;
                background-color: #fafafa;
                border-top: 1px solid #f0f0f0;
            ">
                <p style="
                    margin: 0;
                    font-size: 12px;
                    color: #a1a1aa;
                ">
                    © ${new Date().getFullYear()} BookHand. All rights reserved.
                </p>
            </div>

        </div>

    </div>

</body>
</html>
`;