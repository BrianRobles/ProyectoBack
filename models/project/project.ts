import { Schema, model } from 'mongoose';
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from '../enums/enums';
import { UserModel } from '../user/user';

interface Project {
  nombre: string;
  presupuesto: number;
  fechaInicio: Date;
  fechaFin: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
}

const projectSchema = new Schema<Project>(
  {
    nombre: {
      type: String,
      required: true,
    },
    presupuesto: {
      type: Number,
      required: true,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
      enum: Enum_EstadoProyecto,
      default: Enum_EstadoProyecto.INACTIVO,
    },
    fase: {
      type: String,
      enum: Enum_FaseProyecto,
      default: Enum_FaseProyecto.NULA,
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

projectSchema.virtual('avances', {
  ref: 'Advance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscription',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('objetivos', {
  ref: 'Objective',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };
