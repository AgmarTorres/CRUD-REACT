import React from "react";

import Main from "../template/main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
};

export default class UserCrud extends Component {

    constructor(props){
        super(props)
        this.state={}

    }
    
    ComponentWillMount(){

    }   
    
    render(){
        return(
            <Main { ...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}
