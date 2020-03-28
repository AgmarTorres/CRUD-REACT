import React from "react";

import Main from "../template/main";

import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: []
};

export default class UserCrud extends React.Component {
  state = initialState;

  componentDidMount() {
    axios(baseUrl).then(resp => {
      this.setState({
        list: resp.data
      });
    });
  }

  clear() {
    this.setState({ user: initialState });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then(resp => {
      const list = this.getUpdateList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  }

  getUpdateList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id);
    if(add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <label>Nome:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.user.name}
              onChange={e => this.updateField(e)}
              placeholder="Digite o nome..."
            />
            <label>E-mail:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.user.email}
              onChange={e => this.updateField(e)}
              placeholder="Digite o email..."
            />
            <hr />

            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary " onClick={e => this.save(e)}>
                  Salvar
                </button>
                &nbsp;
                <button
                  className="ml-5 btn btn-secondary "
                  onClick={e => this.clear(e)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="btn btn-danger ml-t"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.getUpdateList(user, false);
      this.setState({ list });
    });
    this.renderRows()
  }

  render() {
    return (
      <Main {...headerProps}>
        Cadastro de Usuário
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
