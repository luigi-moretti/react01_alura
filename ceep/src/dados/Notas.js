export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        /*
            O Array de inscritos será iterado e para cada função dentro
            dele será passado a lista de categorias como parâmetro de forma a atualizar os inscritos.
        */
        this._inscritos.forEach(func => func(this.notas));
    }

    criarNota(categoria, titulo, texto){
        const novaNota = new Nota(categoria, titulo, texto);
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNotas(indice){
        this.notas.splice(indice,1);
        this.notificar();
    }
}

class Nota{
    constructor(categoria, titulo, texto){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}