export const selectContacts = state => state.contacts.data;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const filters = (state) => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    if(!contacts) return
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
