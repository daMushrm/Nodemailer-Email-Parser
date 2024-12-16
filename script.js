const nodemailer = require("nodemailer");

// Create a test transport that just validates
const transporter = nodemailer.createTransport({
  streamTransport: true,
  newline: "unix",
});

async function testEmail(email) {
  const mailOptions = {
    from: "test@test.com",
    to: email,
    subject: "Test",
    text: "Test",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Testing email: ${email}`);
    console.log("Parsed envelope:", info.envelope);
    return info.envelope;
  } catch (error) {
    console.error(`Error with ${email}:`, error.message);
    return null;
  }
}

// Test different email formats
const emailFormats = [
  '"test@email.htb" @interstellar.htb',
  '"test@email.htb"\u002c@interstellar.htb',
];

// Test each format
async function runTests() {
  for (const email of emailFormats) {
    console.log("\n-------------------");
    await testEmail(email);
  }
}

runTests();
