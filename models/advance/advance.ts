import { Schema, model } from 'mongoose';
import { ProjectModel } from '../project/project';
import { UserModel } from '../user/user';

interface Advance {
  fecha: Date;
  descripcion: string;
  observaciones: [string];
  proyecto: Schema.Types.ObjectId;
  creadoPor: Schema.Types.ObjectId;
}

const advanceSchema = new Schema<Advance>({
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

const AdvanceModel = model('Advance', advanceSchema);

export { AdvanceModel };
