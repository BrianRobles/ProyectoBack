import { ObjectiveModel } from './objective';

const objectiveResolvers = {
  Query: {
    objetivos: async (parent, args) => {
      const objectives = ObjectiveModel.find().populate('proyecto');
      return objectives;
    },
  },

  Mutation: {
    crearObjetivo: async (parent, args) => {
      const createdObjective = ObjectiveModel.create({
        descripcion: args.descripcion,
        tipo: args.tipo,
        proyecto: args.proyecto,
      });
    },

    editarDescripcionObjetivo: async (parent, args) => {
      const editedObjective = ObjectiveModel.findByIdAndUpdate(
        args._id,
        {
          descripcion: args.descripcion,
        },
        { new: true }
      );
      return editedObjective;
    },

    eliminarObjetivo: async (parent, args) => {
      const deletedObjective = ObjectiveModel.findByIdAndDelete(args._id);
      return deletedObjective;
    },
  },
};

export { objectiveResolvers };
