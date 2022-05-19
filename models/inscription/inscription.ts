import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/enums';
import { ProjectModel } from '../project/project';
import { UserModel } from '../user/user';

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
  },
  fechaEgreso: {
    type: Date,
  },
  estado: {
    type: String,
    required: true,
    enum: Enum_EstadoInscripcion,
    default: Enum_EstadoInscripcion.PENDIENTE,
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
