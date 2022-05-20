import { gql } from 'apollo-server-express';

const inscriptionTypes = gql`
  type Inscripcion{
    _id: ID!
    fechaIngreso: Date
    fechaEgreso: Date
    estado: Enum_EstadoInscripcion!
    proyecto: Proyecto!
    estudiante: Usuario! 
  }

  type Query{
    inscripciones: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(
      _id: String!
    ): Inscripcion

    rechazarInscripcion(
      _id: String!
    ): Inscripcion

    eliminarInscripcion(
      _id: String!
    ): Inscripcion
  }
`;

export { inscriptionTypes };
