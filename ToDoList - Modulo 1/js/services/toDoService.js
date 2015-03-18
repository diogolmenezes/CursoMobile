(function(){
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
