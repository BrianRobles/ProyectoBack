import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(
    process.env.DB_URL
  ).then(()=>{
    console.log("BD conectada")
  }).catch((e) =>{
    console.error('error al conectar a la base de datos: ', e)
  })
};

export default conectarBD;
