export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        /*
            O Array de inscritos será iterado e para cada função dentro
            dele será passado a lista de categorias como parâmetro de forma a atualizar os inscritos.
        */
        this._inscritos.forEach(func => func(this.categorias));
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}