(function(){

  var app = angular.module('ToDoList', []);

  app.controller('ToDoListController', function(ToDoService){
    this.tasks = ToDoService.list();

    this.add = function(){
      this.tasks.push({ text: this.task_name, completed: false });
      this.task_name = '';

      txtTaskName.focus();

      this.save();
    };

    this.save = function() {
      ToDoService.save(this.tasks);
    };

  });

  app.factory('ToDoService', function() {
      var service = {};

      service.list = function() {
        var tasks = JSON.parse(localStorage.getItem('Tasks'));
        return  tasks ? tasks : [];
      };

      service.save = function(tasks) {
        localStorage.setItem('Tasks', JSON.stringify(tasks));
      };

      return service;
  });

})();