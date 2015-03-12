@isTest
private class ShowToastDemoControllerTest {
    
    private static User testAdminUser  = new User(Id = UserInfo.getUserId());
    
    static testMethod void getMessageTest() {
        System.runAs(testAdminUser)  {
            Test.startTest();
            
            String result = ShowToastDemoController.getMessage();
            
            Test.stopTest();
            
            System.assertEquals(String.isNotEmpty(result), true);
        }
    }
    
    static testMethod void getErrorMessageTest() {
        System.runAs(testAdminUser)  {
            Test.startTest();

            Boolean isError = false;
            try {
                String result = ShowToastDemoController.getErrorMessage();
            } catch (Exception e) {
                isError = true;
            }
            
            Test.stopTest();
            
            System.assertEquals(isError, true);
        }
    }
}