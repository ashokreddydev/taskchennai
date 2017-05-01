var Alarm = angular.module('Alarm')
Alarm.controller('homecontroller',['$scope',  function($scope){
//localStorage.clear();
    //console.log(localStorage.getItem("alertAlarm"));
   // alert(localStorage.getItem("alertAlarm"))
   //  setInterval(function(){ 
    
    
 // var inputDate = new Date("April-26-2017");
// var todaysDate = new Date();

//if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
//{


//alert("equal")
//}
 
    
    
  //  }, 100);
    
    var listOfAlarms=[];
    if(localStorage.getItem("alertAlarm")==null)
        {
             
           
            
        }
    else
        {
            
           listOfAlarms=JSON.parse(localStorage.getItem("alertAlarm"));
            $scope.tableAlarmList= listOfAlarms;
            
        }
    
    
   
    
    $scope.alarmDateSet=function(alarm)
    {
    
        
        var listNew={
            date:alarm.date,
            time:alarm.time,
            repeate:alarm.repeate
            
        }
        $scope.data=alarm;
//        console.log(alarm);
//        this.setAlarmdata=alarm;
       listOfAlarms.push(listNew);
         $scope.data=listOfAlarms;
        localStorage.setItem("alertAlarm",  JSON.stringify(listOfAlarms));
      
           $scope.tableAlarmList= listOfAlarms;
    }


}]);
