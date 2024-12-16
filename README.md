# Nodemailer Email Parser

A Node.js script that tests the parsing of different email formats in Nodemailer to observe how various characters, spaces, and encodings are handled in email addresses.

## Features
- Sends test emails to various email formats.
- Uses `nodemailer` with a stream transport to validate and analyze the parsing behavior.
- Logs the parsed envelope details for inspection.

## Prerequisites
- **Node.js** (v12 or higher recommended)

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/Nodemailer-Email-Parser
   ```
2. Navigate to the project directory:
   ```bash
   cd Nodemailer-Email-Parser
   ```
3. Install dependencies:
   ```bash
   npm install nodemailer
   ```

## Usage
1. Edit the `emailFormats` array in the script to include the email formats you want to test.
2. Run the script:
   ```bash
   node script.js
   ```
3. The script will log the parsed envelope details for each tested email format.

## Example Output
```
-------------------
Testing email: "test@email.htb" @interstellar.htb
Parsed envelope: { from: 'test@test.com', to: [ 'test@email.htb' ] }

-------------------
Testing email: "test@email.htb",@interstellar.htb
Parsed envelope: {
  from: 'test@test.com',
  to: [ 'test@email.htb', '@interstellar.htb' ]
}
```

## Customization
- **Modify email formats**: Add or edit entries in the `emailFormats` array to test specific email address formats.
- **Change transport options**: Update the `transporter` configuration to test different transport behaviors.

## Contributing
Feel free to fork this repository and submit pull requests for improvements or additional features.

## License
This project is licensed under the MIT License.

---

**Note:** This script is intended for testing purposes only and should not be used in production environments.
