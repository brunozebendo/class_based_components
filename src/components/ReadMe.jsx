/**Na seção 14 vai ser explicado os componentes de classe
 * que são uma forma anterior de se declarar componentes de função
 * e são a forma pura de se declarar no JS. A princípio tudo
 * o que se faz com um functional component é possível
 * fazer com um class component, mas a sintaxe é diferente
 * e não é possível usar os hooks.
 * Para explicar o conceito, esse programa gera um aplicativo simples
 * com um botão "show user" que quando clicado mostra uma lista
 * de usuários abaixo. 
 * */

/**Assim, foi feita a mudança abaixo de um functional component
 * - que está comentado - para um class que tem que usar
 * o extend Component e o this para usar o props.
 * Lembrando que é possível trabalhar com functional e class
 * components ao mesmo tempo, no mesmo projeto.
  */

import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  render () {
    return <li className={classes.user}>{this.props.name}</li>;
  }
  }

/*const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};*/

export default User;

/**Na aula 219 mais um componente foi convertido para class component,
 * primeiro, importa-se o Component
 */

import { Component, useState } from 'react';

/**para esse componente será controlado um estado e como não se usa useState */

/**Abaixo, a sintaxe básica para construir um componente, chama-se o método
 * construtor, como é uma classe que extende outra, tem que se chamar o método super
 * e o this.state (tendo que ser o nome state) e o estado do state sempre será um
 * objeto, ao contrátio do useState que pode ser outras coisas, como um boolean,
 * aqui sempre será um objeto, além disso, todos os estados tem que ser concentrados
 * nesse controlador de estado.
 */
class Users extends Component {
  constructor () {
    super();
    this.state = {
      showUsers: true
    };
  }
  /**o que era uma função - toggleUsersHandler, virou um método dentro da class.
   * Reparar na sintaxe necessária para mudar o estado do objeto, sendo o setState
   * um método fornecido pelo Component.
    */
  toggleUsersHandler () {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers}
    });
  }

/**Já para chamar o método dentro do onClick é preciso a sintaxe abaixo, inclusive com 
 * o bind, assim como o showusers (que é o objeto cujo estado é controlado) também precisa
 * do this.state
 */
  render () 
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }

  /**Aula 220 explica o esquivalente aos métodos de Side Effects - useEffect() já que
   * Class-based componets não usam hooks, assim, temos:
   * 
   * componenteDidMount() - > chamado assim que o componente é montado, equivale ao
   * useEffect (..., []) sem dependências
   * 
   * componentDidUpdate() -> chamdo quando o componente é atualizado, reavaliado e
   * re-renderizado pelo React, equivale ao useEffect(..., [someValue]) quando há
   * alguma dependência que deve ser controlada
   * 
   * componentWillUnmount() -> chamdo quando o componente é unmounted, logo antes
   * de ser removido do DOM, equivale a uma função cleanup,
   * useEffect(() => {
   *  return () => {...}
   * }, [])
   */

  /**Para exemplificar os conceitos acima, na aula 221, mais um componente
   * vai ser convertido para class based method. Primeiro, cria-se o construtor
   * e abaixo, o que seria um useState, com o devido estado inicial, aqui vira
   * this.state
   * 
   */

  class UserFinder extends Component {
    constructor () {
      super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: ''
        };
    }

  /**Não vou explicar toda a mudança aqui, mas a lógica abaixo é para verificar
   * se o valor digitado no input (searchTerm) já foi digitada antes, o importante
   * aqui é entender o componentDidUpdate que aqui é um método da classe, mas é o 
   * equivalente a uma função useEffect para verificar se o estado mudou, nesse caso
   * sendo necessário o if para verificar se o estado prévio do objeto é diferente
   * do atual e, se for, processa-se a lógica abaixo, o if check é necessário
   * para evitar um infinite loop 
    */

  componentDidUpdate (prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
            user.name.includes(this.state.searchTerm))});
    }

    /**Para explicar componentDidMount foi criado o código hipotético abaixo
     * onde os usários viriam de um Database quando o componente fosse montado
     * pela primeira vez 
     */

    componentDidMount(){
      //Send http request...
      this.setState({filteredUsers: DUMMY_USERS});
    }

    /**Já para o outro componente foi dado o exemplo abaixo que roda
     * quando os nomes dos usuários somem da tela
      */

    class User extends Component {
      componentWillUnmount(){
        console.log("User will unmount!")
      }

      /**Aula 222 vai explicar o equivalente ao creatContext que, lembrando,
       * é uma forma de compartilhar estados entre componentes evitando
       * o uso excessivo de props (props drilling). Assim, foi criado
       * um novo componente
       */

import React from 'react';

const UsersContext = React.createContext({
  users: []
});

export default UsersContext;

/**O return do App foi adapatado */

return (
  <UsersContext.Provider value={usersContext}>
    <UserFinder />
  </UsersContext.Provider>
);

/**Uma maneira de usar é importá-lo para dentro do return, o que funciona
 * para functional ou class based components
 */

<UsersContext.Consumer>

</UsersContext.Consumer>

/**Mas nesse caso, será usada a sintaxe abaixo, logo após a declaração da classe,
 * isso funciona quando se tem apenas um userContext sendo compartilhado entre os 
 * componentes, quando se tem mais de um, é preciso usar outro modo, que o curso não explica
 */

static contextType = UsersContext;

/**e os componentes que chama o usuário deverão ficar com a sintaxe abaixo */

componentDidMount(){
  //Send http request...
  this.setState({filteredUsers: this.context.users});
}

/**Na aula 224 é explicado o conceito de error boundaries, que é lidar com
 * possíveis erros, conceito para o qual não há um hook e é usada uma solução
 * class based
 * Assim, para fins de exemplo, foi incluída a linha abaixo no componente
 * Users, ele vai jogar um erro quando o comprimento do item 
 * a ser procurado for 0
 * Uma questão importante é que o try catch (usado no JS) não funciona
 * aqui porque é jsx code
 */

componentDidUpdate(){
  if(this.props.users.lenght === 0) {
    throw new Error ('No users provided!');
  }
}

/**Assim, foi criado um componente só para lidar com Error Boundaries, que vou copiar
 * inteiro aqui
 */

import { Component } from "react";

class ErrorBoundary extends Component {
constructor() {
    super ();
    this.state = { hasError: false};
}
    componentDidCatch (error) {
        console.log(error)
        this.setState({ hasError: true});
    }

    render () {
    if (this.state.hasError) {
        return <p> Something went wrong!</p>
    }
        return this.props.children;
    }
}

export default ErrorBoundary;

/**Assim, no lugar do try catch, pode-se envolver o componente no outro componente
 * como foi feito abaixo.
 */

<ErrorBoundary>
  <Users users={this.state.filteredUsers} />
</ErrorBoundary>