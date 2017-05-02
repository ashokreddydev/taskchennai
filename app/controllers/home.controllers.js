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

                $scope.alarmscedule=true; 
                        var listNew={
                            date:alarm.date,
                            time:alarm.time,
                            repeate:alarm.repeate

                        }
                        
                        
                          if((listOfAlarms==undefined)||(listOfAlarms==null)||(listOfAlarms.length==0))
                               {
                                    
                                                   $scope.data=alarm;
                                        //        console.log(alarm);
                                        //        this.setAlarmdata=alarm;
                                               listOfAlarms.push(listNew);
                                                 $scope.data=listOfAlarms;
                                                localStorage.setItem("alertAlarm",  JSON.stringify(listOfAlarms));

                                                   $scope.tableAlarmList= listOfAlarms; 

                               }
                        else
                                {
                                        var results=0;
                                    
                                     for(var i=0 ;i<listOfAlarms.length;i++)

                                        {

                                        var date = new Date(listOfAlarms[i].date);
                                        var y = date.getFullYear();
                                        var m = date.getMonth()+1;
                                        var d = date.getDate();

                                             var date1 = new Date(listNew.date);
                                        var y1 = date1.getFullYear();
                                        var m1 = date1.getMonth()+1;
                                        var d1 = date1.getDate();

                                        var inputDate = new Date(m+"-"+d+"-"+y);
                                        var todaysDate = new Date(m1+"-"+d1+"-"+y1);
                                            
                                            
                                             var now = new Date(listOfAlarms[i].time); 
                                            var str = now.toLocaleTimeString();
                                            var res = str.replace(/\.[0-9]{2,3}/, '');

                                            var now1 = new Date(listNew.time);
                                            var str1 = now1.toLocaleTimeString();
                                            var res1 = str1.replace(/\.[0-9]{2,3}/, '');

                                        if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0))&&(res==res1))
                                        {
                                            results++;
                                        }
                                      



                                }
                                    
                                    
                                    
                                    if(results==0)
                                        {
                                          
                                                   $scope.data=alarm;
                                        //        console.log(alarm);
                                        //        this.setAlarmdata=alarm;
                                               listOfAlarms.push(listNew);
                                                 $scope.data=listOfAlarms;
                                                localStorage.setItem("alertAlarm",  JSON.stringify(listOfAlarms));

                                                   $scope.tableAlarmList= listOfAlarms;  
                                            
                                            
                                        }

                        
                    
                        
                        
                        
                    
                        }
        }


    
    
    $scope.removeData=function(removeData)
        {
           
       
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
