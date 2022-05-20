import { gql } from 'apollo-server-express';

const projectTypes = gql`

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Query {
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
    ): Proyecto

    editarProyecto(
      _id: String!
      nombre: String
      presupuesto: Float
      fechaInicio: Date
      fechaFin: Date
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String
    ): Proyecto

    eliminarProyecto(_id: String): Proyecto
  }
`;

export { projectTypes };
