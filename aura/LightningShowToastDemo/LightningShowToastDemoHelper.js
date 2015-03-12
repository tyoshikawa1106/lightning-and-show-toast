({
    getMessage: function(component) {
        var action = component.get("c.getMessage");
        var self = this;
        action.setCallback(self, function(a){
            // Display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if(action.getState() ==='SUCCESS'){
                toastEvent.setParams({
                    "title": "Success! ",
                    "message": a.getReturnValue()
                });
            } else {
                toastEvent.setParams({
                    "title": "Error! ",
                    "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    },
    getErrorMessage: function(component) {
        var action = component.get("c.getErrorMessage");
        var self = this;
        action.setCallback(self, function(a){
            // Display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if(action.getState() ==='SUCCESS'){
                toastEvent.setParams({
                    "title": "Success! ",
                    "message": a.getReturnValue()
                });
            } else {
                toastEvent.setParams({
                    "title": "Error! ",
                    "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
        $A.enqueueAction(action);
    }
})