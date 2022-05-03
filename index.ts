import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';
import { ProjectModel } from './models/project';

const main = async () => {
  await conectarBD();

  // ProjectModel.create({
  //   nombre: 'Proyecto3',
  //   presupuesto: 1100,
  //   fechaInicio: Date.now(),
  //   fechaFin: new Date('2022/11/10'),
  //   lider: '626f39ed6d023875f5cb8ab2',
  // })
  //   .then((p) => {
  //     console.log(p);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });

  // ProjectModel.find().populate('lider')
  //   .then((p) => {
  //     console.log(p);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });

  // ProjectModel.findByIdAndUpdate(
  //   { _id: '62704e158b79b86f15ae2289' },
  //   {
  //     nombre: 'Proyecto3',
  //     presupuesto: 1000,
  //   },
  //   { new: true }
  // )
  //   .then((p) => {
  //     console.log(p);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });

  // ProjectModel.findByIdAndDelete('62704e8266d6207654783286')
  //   .then((p) => {
  //     console.log(p);
  //   })
  //   .catch((e) => {
  //     console.error(e);
  //   });
};
main();

// CRUD USUARIO
// await userModel
//   .create({
//     correo: 'bs@g.com',
//     identificacion: '1121',
//     nombre: 'Brian',
//     apellido: 'Robles',
//     rol: Enum_Rol.administrador,
//   })
//   .then((u) => {
//     console.log('Usuario creado', u);
//   })
//   .catch((e) => {
//     console.error('Error al crear usuario ', e);
//   });

// await userModel
//   .find()
//   .then((u) => {
//     console.log(u);
//   })
//   .catch((e) => {
//     console.log('error consultando usuarios: ', e);
//   });

// await userModel
//   .findOneAndUpdate(
//     { correo: 'bs@g.com' },
//     {
//       identificacion: '2113',
//       nombre: 'Samuel',
//       apellido: 'Urueña',
//     },
//     { new: true }
//   )
//   .then((u) => {
//     console.log(u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// await userModel
//   .findByIdAndDelete('626f35f760d6ec9cccd32f6f')
//   .then((u) => {
//     console.log(u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
