/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-14-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class ComplaintController {
    @AuraEnabled(cacheable=true)
    public static List<Complaint__c> getComplaintRecords(String accountId){
        return [ SELECT Id, Name, Account__c, Comments__c
                FROM Complaint__c 
                WHERE Account__c=:accountId];
    }
}