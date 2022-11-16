import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Yoshi", "Web work", 250);
// docTwo = new Payment("Mario", "Plumbing work", 200);
// // let docs: HasFormatter[] = [];
// // docs.push(docOne);
// // docs.push(docTwo);
// const invOne = new Invoice("Ushh", "work on Ushh website", 300);
// const invTwo = new Invoice("Adebisi", "work on Adebisi website", 400);
// // console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// console.log(invoices);
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value;
    value = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...value);
    }
    else {
        doc = new Payment(...value);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//GENERIC
// interface Resources<T> {
//   name: string;
//   uid: number;
//   data: T;
// }
// const resOne: Resources<object> = {
//   name: "Ushh",
//   uid: 87,
//   data: {},
// };
