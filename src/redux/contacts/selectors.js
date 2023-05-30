import { createSelector } from '@reduxjs/toolkit';

export const selectContactsList = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactsFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectContactsFilter],
  (contactItems, contactFilter) => {
    return contactItems.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(contactFilter.toLowerCase()) ||
        number.includes(contactFilter)
    );
  }
);
