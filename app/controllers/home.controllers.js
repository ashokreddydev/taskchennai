var Alarm = angular.module('Alarm')
Alarm.controller('homecontroller',['$scope',  function($scope){
//localStorage.clear();
    
//   $scope.alarm.repeat="Daily";
    
 
 
      $scope.alarmscedule=false;
    var listOfAlarms=[];
    if(localStorage.getItem("alertAlarm")==null)
                {

                    $scope.alarmscedule=false;

                }
        else
                {

                   listOfAlarms=JSON.parse(localStorage.getItem("alertAlarm"));
                    $scope.tableAlarmList= listOfAlarms;
                    
                       if(listOfAlarms.length==0)
                    {
                        
                        $scope.alarmscedule=false; 
                    }
                    else{

                        $scope.alarmscedule=true; 
                    }
                     

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

    
    
    $scope.removeData=function(removeData)
        {
             $scope.alarmscedule=true;
       
                            for(var i=0 ;i<listOfAlarms.length;i++)
                                {
                                    
                                    if(listOfAlarms[i]==removeData)
                                        {
                                            
                                          listOfAlarms.splice(i, 1);
                                             localStorage.setItem("alertAlarm",  JSON.stringify(listOfAlarms));

                               $scope.tableAlarmList= listOfAlarms;
                                        }
                                    
                                }

          
                if(listOfAlarms.length==0)
                    {
                        
                        $scope.alarmscedule=false; 
                    }
                    else{

                        $scope.alarmscedule=true; 
                    }

        }


}]);
