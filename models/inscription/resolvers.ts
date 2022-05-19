import { Enum_EstadoInscripcion } from '../enums/enums';
import { InscriptionModel } from './inscription';

const inscriptionResolvers = {
  Query: {
    inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find()
        .populate('proyecto')
        .populate('estudiante');
      return inscripciones;
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const createdInscription = await InscriptionModel.create({
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return createdInscription;
    },

    aprobarInscripcion: async (parent, args) => {
      const approvedInscription = await InscriptionModel.findByIdAndUpdate(
        args._id,
        {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return approvedInscription;
    },
  },
};

export { inscriptionResolvers };
