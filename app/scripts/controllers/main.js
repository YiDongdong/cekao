'use strict';

/**
 * @ngdoc function
 * @name hhhhApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hhhhApp
 */
angular.module("hhhh",[]).directive('hhh',function(){
   return {
		restrict:"ECAM",
        template:'<div class="box" id="{{b}}"> <div class="left"> <p ng-repeat="i in data">{{i.title|sbustr}}</p> </div> <div class="centent"> <h3>新闻图片</h3> <img  ng-repeat="n in data2" ng-src="{{n.img}}" > </div> <div class="right"> <span class="r_t"> <h3>新闻资讯</h3><img  ng-repeat="n in data2" ng-src="{{n.img}}" ></span> <span class="r_b"> <h3>热门点击</h3> <p ng-repeat="j in data">{{j.title|sbustr}}</p></span>   </div></div>',
        replace :true,
        scope:{data:"=c",data2:"=d"}
        /*link:function(s,e,attr){
        	s.b=attr["b"]
        }*/
       

   }
}).service("getdata",function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method,
				
			}).success(function(e){
				callback(e)
			})
		}
		
	}
}).filter("sbustr",function(){
	return function(e){
		if(e.length>10){
			return e.slice(0,10)+"..."
		}else{
			return e
		}
	}
})
 



