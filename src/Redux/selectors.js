// import { nanoid } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.data;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters;

export const filters = (state) => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

// export const selectContactsBook = (state) => {
//   const contacts = selectContacts(state);
//   return contacts.reduce((prepare, { name, number }) => {
//     prepare.push({
//       id: nanoid(),
//       name,
//       number,
//     });
//     return prepare;
//   }, []);
// };

