import { configureStore } from "@reduxjs/toolkit";
import { persistStore} from "redux-persist";
import { contactsReducer } from "./contactsReducer";
import { filterReducer } from "./filterReducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
