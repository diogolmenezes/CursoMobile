var app = angular.module('MinhasTarefas', []);

app.controller('TarefasController', function($filter){
    this.tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];

    this.totalTarefas = function(completa){
        return $filter('filter')(this.tarefas, { Completa: completa }).length;
    };

    this.incluir = function(){
        this.tarefas.push({ Texto: this.tarefa, Completa: false});
        this.salvar();
        this.tarefa = "";
        nome_tarefa.focus();
    };

    this.excluir = function(tarefa){
        var index = this.tarefas.indexOf(tarefa);
        this.tarefas.splice(index, 1);
        this.salvar();
    };

    this.salvar = function(){
        localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
    };
});