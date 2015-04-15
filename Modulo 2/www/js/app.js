var app = angular.module('MinhasTarefas', ['onsen']);

app.controller('TarefasController', function($filter, $rootScope){
    $rootScope.tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];

    this.totalTarefas = function(completa){
        return $filter('filter')($rootScope.tarefas, { Completa: completa }).length;
    };

    this.incluir = function(){
        $rootScope.tarefas.push({ Texto: this.tarefa, Completa: false});
        this.salvar();
        this.tarefa = "";
        nome_tarefa.focus();
    };

    this.excluir = function(tarefa){
        var index = $rootScope.tarefas.indexOf(tarefa);
        $rootScope.tarefas.splice(index, 1);
        this.salvar();
    };

    this.salvar = function(){
        localStorage.setItem("Tarefas", JSON.stringify($rootScope.tarefas));
    };
});