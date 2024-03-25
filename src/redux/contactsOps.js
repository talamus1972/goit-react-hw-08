import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65ffdc16df565f1a61456554.mockapi.io/"

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thankAPI) => {
try {
    const responce = await axios.get("/contacts")
    return responce.data
} catch (error) {
    return thankAPI.rejectWithValue(error)    
}   
    })

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContact, thankAPI) => {
try {
    const responce = await axios.post("contacts/", newContact)
    return responce.data
} catch (error) {
    return thankAPI.rejectWithValue(error)    
}   
})




export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactID, thankAPI) => {
try {
    const responce = await axios.delete(`contacts/${contactID}`)
    return responce.data
} catch (error) {
    return thankAPI.rejectWithValue(error)    
}   
})