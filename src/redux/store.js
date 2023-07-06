import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";


// export const initialContacts =
//     [
//         { id: "id-111", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-211", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-311", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-411", name: "Annie Copeland", number: "227-91-26" },
//     ];

const store = configureStore({
    reducer,
});

export default store;