import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Table extends Component {
  // constructor(prop) {
  //   super(prop);
  // }

  render() {
    return (
      <section>
        <table>
          <tr>
            <th>
              Descrição
            </th>
            <th>
              Tag
            </th>
            <th>
              Método de pagamento
            </th>
            <th>
              Valor
            </th>
            <th>
              Moeda
            </th>
            <th>
              Câmbio
            </th>
            <th>
              Câmbio utilizado
            </th>
            <th>
              Valor convertido
            </th>
            <th>
              Moeda de conversão
            </th>
            <th>
              Editar/Excluir
            </th>
          </tr>
        </table>
      </section>
    );
  }
}
