import { Schema, model } from 'mongoose';
import { Enum_EstadoUsuario, Enum_Rol } from '../enums/enums';
import uniqueValidator from 'mongoose-unique-validator';

interface User {
  nombre: string;
  apellido: string;
  correo: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
}

const userSchema = new Schema<User>(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    rol: {
      type: String,
      required: true,
      enum: Enum_Rol,
    },
    estado: {
      type: String,
      required: true,
      enum: Enum_EstadoUsuario,
      default: Enum_EstadoUsuario.PENDIENTE,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.plugin(uniqueValidator);

userSchema.virtual('proyectos', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'lider',
});

userSchema.virtual('avances', {
  ref: 'Advance',
  localField: '_id',
  foreignField: 'creadoPor',
});

userSchema.virtual('inscripciones', {
  ref: 'Inscription',
  localField: '_id',
  foreignField: 'estudiante',
});

const UserModel = model('User', userSchema);

export { UserModel };
