import yargs from "yargs";
import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} from "./contact.js";

const invokeContacts = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      return console.table(contacts);
    case "get":
      const contact = await getContactById(id);
      return console.table(contact);
    case "remove":
      const removedContact = await removeContact(id);
      return console.table(removedContact);
    case "add":
      const addedContact = await addContact(name, email, phone);
      return console.table(addedContact);
    case "updateContact":
      const updatedContact = await updateContact(id, data);
      return console.log(updatedContact);
    default:
      console.log("Unknown action");
  }
};

// const { argv } = yargs(process.argv);
// const { _, $0, ...params } = argv;
// console.log(params);
// invokeContacts(params);

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const opt = program.opts();
invokeContacts(opt);
