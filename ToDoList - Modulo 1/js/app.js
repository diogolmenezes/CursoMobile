(function(){

  var app = angular.module('ToDoList', []);

  app.controller('ToDoListController', function(){
    this.tasks = [];
    this.Incluir = function(){
      this.tasks.push({ Text: this.task_name, Completed: false });
    };
  });

})();