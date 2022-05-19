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
    Avances: [Avance]
  }

  type Mutation {
    crearAvance(
      descripcion: String!
      proyecto: String!
      creadoPor: String!
    ): Avance

    editarDescripcion(
      _id: String!
      descripcion: String!
    ): Avance

    actualizarObservaciones(
      _id: String!
      observaciones: [String]!
    ): Avance

    eliminarAvance(
      _id: String
    ): Avance
  }
`;

export { advanceTypes };
