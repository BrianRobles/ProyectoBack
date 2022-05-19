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
  },
};

export { projectResolvers };
