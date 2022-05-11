import { gql } from 'apollo-server-express';

const advanceTypes = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avances]
  }

  type Mutation {
    crearAvance(
      fecha: Date!
      descripcion: String!
      proyecto: String!
      creadoPor: String!
    ): Avance
  }
`;

export {advanceTypes};
