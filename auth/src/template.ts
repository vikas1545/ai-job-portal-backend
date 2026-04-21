export const forgetPasswordTemplate = (resetLink: string): string => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Password</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
      }
      .button {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 20px;
        font-size: 16px;
        color: #ffffff !important;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #888;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Password Reset Request</h2>
      <p>You requested to reset your password.</p>
      <p>Click the button below to reset it:</p>

      <a href="${resetLink}" class="button">Reset Password</a>

      <p>If the button doesn’t work, copy and paste this link into your browser:</p>
      <p>${resetLink}</p>

      <div class="footer">
        <p>If you didn’t request this, you can safely ignore this email.</p>
        <p>© HireFast</p>
      </div>
    </div>
  </body>
  </html>
  `;
};