import { gql } from 'apollo-server-express';

const objectiveTypes = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
    proyecto: Proyecto!
  }

  type Query {
    objetivos: [Objetivo]
  }

  type Mutation {
    crearObjetivo(
      descripcion: String!
      tipo: Enum_TipoObjetivo!
      proyecto: ID!
    ): Objetivo

    editarDescripcionObjetivo(_id: String!, descripcion: String!): Objetivo

    eliminarObjetivo(_id: String!): Objetivo
  }
`;

export { objectiveTypes };
