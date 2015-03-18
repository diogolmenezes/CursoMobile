var app = angular.module('ToDoList', []);
debugger;
(function(){
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

})();