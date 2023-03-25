'use client'
import { useQuery, gql } from '@apollo/client';
import client from '@lib/apolloClient';
import { Appointment } from '@/types/graphql';

const AGENDAMENTOS_QUERY = gql`
  query {
    getAllAppointments {
      id
      startTime
      endTime
      patient {
        id
        name
      }
      psychologist {
        id
        name
      }
    }
  }
`;

function Agendamento() {
  const { loading, error, data } = useQuery<{ getAllAppointments: Appointment[] }>(AGENDAMENTOS_QUERY, {
    client,
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message} {console.log(error)}</p>;

  return (
    <div>
      <h1>Agendamentos</h1>
      <ul>
        {data?.getAllAppointments.map((agendamento) => (
          <li key={agendamento.id}>
            <div>Paciente: {agendamento.patient?.name}</div>
            <div>Psicólogo: {agendamento.psychologist?.name}</div>
            <div>Início: {agendamento.startTime}</div>
            <div>Fim: {agendamento.endTime}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agendamento;
