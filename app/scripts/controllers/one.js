angular.module("hhhhApp").controller("one",function($scope,$http,getdata){
				getdata.ajax("http://www.somenote.cn:1510/test","GET",function(e){
					
					$scope.data=e;
				})
				getdata.ajax("http://www.somenote.cn:1510/aut","GET",function(e){
					
					$scope.data2=e;
				})
				getdata.ajax("http://www.somenote.cn:1510/test2","GET",function(e){
					
					$scope.data3=e;
				})
				
				
				
})