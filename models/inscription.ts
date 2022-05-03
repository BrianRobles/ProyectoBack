import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from './enums';
import { ProjectModel } from './project';
import { UserModel } from './user';

interface Inscription {
  fechaIngreso: Date;
  fechaEgreso: Date;
  estado: Enum_EstadoInscripcion;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const inscriptionSchema = new Schema<Inscription>({
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: Enum_EstadoInscripcion,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: ProjectModel,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
});

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel };
