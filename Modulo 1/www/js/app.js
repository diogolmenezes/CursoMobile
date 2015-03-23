(function(){
    var app = angular.module('MinhasTarefas', []);

    app.controller('TarefasController', function($filter){
        this.tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];

        this.incluir = function(){
            this.tarefas.push({ texto: this.tarefa, completa: false });
            this.tarefa = '';
            this.salvar();
        };

        this.salvar = function(){
            localStorage.setItem('Tarefas', JSON.stringify(this.tarefas));
        };

        this.totalCompletas = function(){
            return $filter('filter')(this.tarefas, {completa : true }).length;
        };

        this.totalPendentes = function(){
            return $filter('filter')(this.tarefas, {completa : false }).length;
        };
    });

})();