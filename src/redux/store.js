import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts.slice";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filtersReducer } from "./filters/filters.slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineSlices({
  filters: filtersReducer,
  contacts: contactsReducer,
});

const persistedTAskReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedTAskReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
