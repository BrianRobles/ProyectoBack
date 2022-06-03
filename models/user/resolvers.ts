import { UserModel } from './user';

const userResolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const users = await UserModel.find()
        .populate('proyectos')
        .populate('avances')
        .populate('inscripciones');
      return users;
    },

    Usuario: async (parent, args) => {
      const user = await UserModel.findById(args._id);
      return user;
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const createdUser = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        rol: args.rol,
      });
      return createdUser;
    },

    editarUsuario: async (parent, args) => {
      const editedUser = await UserModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          apellido: args.apellido,
          rol: args.rol,
          estado: args.estado,
        },
        { new: true }
      );
      return editedUser;
    },

    eliminarUsuario: async (parent, args) => {
      const deletedUser = await UserModel.findByIdAndDelete(args._id);
      return deletedUser;
    },
  },
};

export { userResolvers };
