const {TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm i input
const fs = require('fs')
const stringSession = new StringSession(""); // fill this later with the value from session.save()
  (async () => {
    const apiId = await input.text('Enter your API ID: ');
    const apiHash = await input.text('Enter your API hash: ');
    console.log("Loading interactive example...");
    const client = new TelegramClient(stringSession, Number(apiId), apiHash, {
      connectionRetries: 5,
    });
    await client.start({
      phoneNumber: async () => await input.text("Numero de telefono: (Formato internacional, ex: +14124115874)"),
      password: async () => await input.text("Clave 2FA"),
      phoneCode: async () => await input.text("Codigo: "),
      onError: (err) => console.log(err),
    });
    console.log("Conectado!");    
  const data = {
    apiId: apiId,
    apiHash: apiHash,
    stringSession: client.session.save(),
  };
  
  const filePath = './botApp/file.json'; // change this to the desired path and file name
  
  fs.writeFile(filePath, JSON.stringify(data), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Data written to file successfully.');
      process.exit()
    }
  });
  })();