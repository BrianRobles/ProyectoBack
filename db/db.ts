import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://Admin:sJf0VmCsBjrgFJMP@cluster0.tvkid.mongodb.net/gestionProyectos?retryWrites=true&w=majority'
  ).then(()=>{
    console.log("BD conectada")
  }).catch((e) =>{
    console.error('error al conectar a la base de datos: ', e)
  })
};

export default conectarBD;
