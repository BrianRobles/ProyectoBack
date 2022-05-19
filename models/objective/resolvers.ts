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
  },
};

export { objectiveResolvers };
