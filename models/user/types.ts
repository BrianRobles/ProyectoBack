import { gql } from 'apollo-server-express';

const userTypes = gql`

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
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String
      apellido: String
      correo: String
      identificacion: String
      rol: Enum_Rol
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String!): Usuario
  }
`;

export { userTypes };
