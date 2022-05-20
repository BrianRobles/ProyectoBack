import { ProjectModel } from './project';

const projectResolvers = {
  Query: {
    Proyectos: async (parent, args) => {
      const projects = await ProjectModel.find()
        .populate('lider')
        .populate('avances')
        .populate('inscripciones')
        .populate('objetivos');
      return projects;
    },
  },

  Mutation: {
    crearProyecto: async (parent, args) => {
      const createdProject = await ProjectModel.create({
        nombre: args.nombre,
        presupuesto: args.presupuesto,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        fase: args.fase,
        estado: args.estado,
        lider: args.lider,
      });
      return createdProject;
    },

    editarProyecto: async (parent, args) => {
      const editedProject = ProjectModel.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          presupuesto: args.presupuesto,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          estado: args.estado,
          fase: args.fase,
          lider: args.fase,
        },
        { new: true }
      );
      return editedProject;
    },

    eliminarProyecto: async (parent, args) => {
      const deletedProject = ProjectModel.findByIdAndDelete(args._id);
      return deletedProject;
    },
  },
};

export { projectResolvers };
