import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/getContacts.getContacts';

export default class ContactList extends LightningElement {

    @wire(getContacts, {})
    contacts;
}