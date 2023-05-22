const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
      console.table(contactsList);
      break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVP" });

// invokeAction({
//   action: "add",
//   name: "Yulia Rudenko",
//   email: "yulyarudenko88@gmail.com",
//   phone: "(050) 699-29-18",
// });

// invokeAction({ action: "remove", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({ action: "lis" });
