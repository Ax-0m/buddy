import { callModel } from "./model";

const reply = await callModel([
    {
        role: "user", content: "say hi in 5 words"
    },
])

console.log(reply);