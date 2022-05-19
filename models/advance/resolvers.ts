import { AdvanceModel } from './advance';

const advanceResolvers = {
  Query: {
    Avances: async (parent, args) => {
      const advances = await AdvanceModel.find()
        .populate('proyecto')
        .populate('creadoPor');
      return advances;
    },
  },
  Mutation: {
    crearAvance: async (parent, args) => {
      const createdAvance = await AdvanceModel.create({
        fecha: Date.now(),
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return createdAvance;
    },

    editarDescripcion: async (parent, args) => {
      const editedAdvance = AdvanceModel.findByIdAndUpdate(
        args._id,
        {
          descripcion: args.descripcion,
        },
        { new: true }
      );
      return editedAdvance;
    },

    actualizarObservaciones: async (parent, args) => {
      const editedAdvance = AdvanceModel.findByIdAndUpdate(
        args._id,
        {
          observaciones: args.observaciones,
        },
        { new: true }
      );
      return editedAdvance;
    },

    eliminarAvance: async (parent, args) => {
      const deletedAdvance = AdvanceModel.findByIdAndDelete(args._id);
      return deletedAdvance;
    },
  },
};

export { advanceResolvers };
