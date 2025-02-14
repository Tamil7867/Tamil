/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-11-2025
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords(String rating){
        return [ SELECT Id, Name, Industry, Rating
                FROM Account 
                WHERE Rating=:rating];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        return [ SELECT Id, Name, Industry, Rating, AnnualRevenue
                FROM Account 
                ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountByName(String name){
        return [ SELECT Id, Name, AccountNumber, BillingState
                FROM Account 
                WHERE Name LIKE : name+'%'];
    }
}