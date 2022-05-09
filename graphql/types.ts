import { gql } from 'apollo-server-express';

const typeDefs = gql`
  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  type Usuario {
    _id: ID!
    correo: String!
    identificacion: String!
    nombre: String!
    apellido: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ): Usuario

    eliminarUsuario(_id: String!): Usuario

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: ID!
      objetivos: [inputObjetivo]
    ): Proyecto
  }

  scalar Date

  type Objetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input inputObjetivo {
    descripcion: String!
    tipo: String!
  }

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
  }

  enum Enum_EstadoProyecto{
    ACTIVO
    INACTIVO
  }
  
  enum Enum_FaseProyecto{
    INICIADO
    DESARROLLO
    TERMINADO
    NULA
  }

  enum Enum_TipoObjetivo{
    GENERAL
    ESPECIFICO
  }
`;

export { typeDefs };
