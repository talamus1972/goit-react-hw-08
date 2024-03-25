import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps"; 
import { selectNameFilter } from "./filtersSlice";

  
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  
  extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
      state.error=false
      state.loading = true
     })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false
      state.items=action.payload
     })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false
      state.error=true
     })
   .addCase(deleteContact.pending, (state) => {
      state.error=false
      state.loading = true
     })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false
      state.items = state.items.filter(contact => contact.id !== action.payload.id);

     })
    .addCase(deleteContact.rejected, (state) => {
      state.loading = false
      state.error=true
     })
.addCase(addContact.pending, (state) => {
      state.error=false
      state.loading = true
     })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false
     state.items.push(action.payload);

     })
    .addCase(addContact.rejected, (state) => {
      state.loading = false
      state.error=true
     })  

});
export default contactsSlice.reducer

export const selectLoading = (state) => state.contacts.loading
export const selectError = (state) => state.contacts.error
export const selectContacts = (state) => state.contacts.items

export const selectVisibleContacts = createSelector([selectContacts, selectNameFilter],
  (contacts, filterName) => { 
  return contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
  })


      
        



