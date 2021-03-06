(function(){
    //Declaring a module with Name LunchCheck
    angular.module('LunchCheck',[]).controller('LunchController',LunchController);

    //Injecting $scope to LunchController function to protect from minification
    LunchController.$inject = ['$scope'];

    //LunchController function
    function LunchController($scope){

	//lunchMenu to hold the comma separated values
	$scope.lunchMenu = "";

	//Message to display
	$scope.displayMessage = "";

	//MessageStatus
	$scope.messageStatus = "";

	//BoxStatus
	$scope.boxStatus = "";
	
	//On Clicking Check Button
	$scope.checkLunch = function(){
	    $scope.displayMessage = getLunchMessage();
	}

	function getLunchMessage(){
	    var itemCount = checkNumItems();

	    var message = "";
	    
	    //In case the menu contains blank or just , with no values
	    if(itemCount<=0){
		message = "Please enter data first";
		setStatus("danger","error");
	    }
	    else if(itemCount > 0 && itemCount <=3){
		message = "Enjoy!";
		setStatus("success","success");
	    } else {
		message = "Too Much!";
		setStatus("success","success");
	    }

	    return message;
	}


	/* Function to set the messages for messageStatus and boxStatus */
    	function setStatus(messageStatus,boxStatus){
	    $scope.messageStatus = messageStatus;
	    $scope.boxStatus = boxStatus;
	}


	/* Function to check the number of items in the lunch
	 * @param : void
	 * @return: number of items; -1 if field blank;
	 */
	
	function checkNumItems(){
	    //Get the lunch menu and trim it
	    var lunchmenu = $scope.lunchMenu.trim();

	    //In case the lunchmenu is blank
	    if(lunchmenu == ''){
		return -1;
	    }
	    
	    //Explode the string
	    var items = lunchmenu.split(",");

	    //Set numItems counter to 0
	    var numItems = 0;

	    //Iterate through all the items in the exploded string
	    //Check to see if there are blank
	    //If item is not blank, count as an item
	    
	    for(var num in items){
		if(items[num].trim()!=''){
		    numItems++;
		}
	    }

	    //Return the number of items
	    return numItems;
	}
	
    };



})();
