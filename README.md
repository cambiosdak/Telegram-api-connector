# Telegram Bot API Client

# Description:
This code is an example of how to use the TelegramClient library in Node.js to connect to the Telegram Bot API. It allows you to input your API ID, API hash, phone number, and 2FA password (if enabled) to authenticate and establish a connection with the Telegram API. Once connected, it saves the session information (API ID, API hash, and string session) to a JSON file for future use.

# Usage:

Install the required dependencies using npm:

```npm install telegram input fs```

Fill in the API ID and API hash values in the code, which are obtained by registering a bot on the Telegram website (https://my.telegram.org/auth).
Run the code using a Node.js runtime environment.
Follow the prompts to enter your phone number, 2FA password (if enabled), and verification code.
Upon successful connection, the session information will be saved to a JSON file specified in the filePath variable.
Note: Make sure to keep the apiId, apiHash, and stringSession values secure as they provide access to your Telegram Bot API. Do not share these values with anyone else.

# Contributors: 
LP

# License: 
[License MIT](https://opensource.org/license/mit/)

References:

- Telegram Bot API: https://core.telegram.org/bots/api
- TelegramClient Library: https://github.com/telegram-rs/telegram-client
- input Library: https://www.npmjs.com/package/input
- fs Library: https://nodejs.org/api/fs.html
