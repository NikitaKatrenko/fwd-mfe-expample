import { mount as listMount } from "list/ListIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Hello in Host !");

listMount(document.querySelector("#my-list"));
cartMount(document.querySelector("#my-cart"));
