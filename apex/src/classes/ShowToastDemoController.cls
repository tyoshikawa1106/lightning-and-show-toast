public with sharing class ShowToastDemoController {
    
    @AuraEnabled
    public static String getMessage() {
        return 'Your report has been loaded successfully.';
    }
    
    @AuraEnabled
    public static String getErrorMessage() {
        // Exception
        Id targetId = 'Error';
        return 'Your report has been loaded successfully.';
    }
}