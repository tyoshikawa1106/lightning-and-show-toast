({
    doClickBtn: function(component, event, helper) {
        helper.getMessage(component);
    },
    doClickErrorBtn: function(component, event, helper) {
        helper.getErrorMessage(component);
    }
})