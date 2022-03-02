import React from 'react';

const Ocorrencias = ({ ocorrencias, deleteOcorrencia }) => {
  const ocorrenciaList = ocorrencias.length ? (
    ocorrencias.map(ocorrencia => {
      return (
        <tbody className="striped" key={ ocorrencia.id }>
          <tr>
            <td>{ ocorrencia.type }</td>
            <td>{ ocorrencia.dtIni }</td>
            <td>{ ocorrencia.dtFim }</td>
            <td><a className="btn-floating btn-small waves-effect waves-light red" onClick={ () => deleteOcorrencia(ocorrencia.id) }><i className="material-icons">add</i></a></td>
          </tr>
        </tbody>
      )
    })
  ) : (
    <p className="center">Não há nenhuma ocorrência!</p>
  )

  return (
    <div className="ocorrencias striped">
      <thead>
          <tr>
              <th data-field="account_id">Tipo</th>
              <th data-field="event_id">Data Início</th>
              <th data-field="event_type">Data Fim</th>
          </tr>
      </thead>
      { ocorrenciaList }
    </div>
  )
}

export default Ocorrencias;