import React, { Component } from "react"

class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="título" />
                <textarea placeholder="Escreva sua nota" />
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;