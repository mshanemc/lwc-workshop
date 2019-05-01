public with sharing class getContacts {

    @AuraEnabled(cacheable=true)
    public static list<contact> getContacts() {
        return [select id from contact];
    }

}
