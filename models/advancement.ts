import { Schema, model } from 'mongoose';
import { ProjectModel } from './project';
import { UserModel } from './user';

interface Advancement {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
}

const advancementSchema = new Schema<Advancement>({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],

  proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: ProjectModel,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
});

const AdvancementModel = model('Advancement', advancementSchema);

export { AdvancementModel };
