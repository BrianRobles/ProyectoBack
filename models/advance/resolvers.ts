import { AdvanceModel } from './advance';

const advanceResolvers = {
  Query: {
    Avances: async (parent, args) => {
      const advances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
      return advances;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const createdAvance = await AdvanceModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return createdAvance;
    },
  },
};

export { advanceResolvers };
