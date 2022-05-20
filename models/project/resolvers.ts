import { ProjectModel } from './project';

const projectResolvers = {
  Query: {
    Proyectos: async (parent, args) => {
      const projects = await ProjectModel.find()
        .populate('lider')
        .populate('avances')
        .populate('inscripciones');
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
        objetivos: args.objetivos,
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
          objetivos: args.objetivos,
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
