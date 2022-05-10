import { ProjectModel } from '../models/project';
import { UserModel } from '../models/user';

const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const users = await UserModel.find();
      return users;
    },
    
    Usuario: async (parent,args) => {
      const user = await UserModel.findById(args._id);
      return user;
    },

    Proyectos:async (parent,args) => {
      const projects = await ProjectModel.find().populate('lider');
      return projects;
    }

  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const createdUser = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
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
          identificacion: args.identificacion,
          correo: args.correo,
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

    
    crearProyecto:async (parent,args) => {
      const createdProject = await ProjectModel.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        fase: args.fase,
        estado: args.estado,
        lider: args.lider,
        objetivos: args.objetivos
      });
      return createdProject;
    }
  },
};

export { resolvers };
