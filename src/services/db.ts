//import sql from 'mssql';

//const config = {
//    user: process.env.DB_USER,
//    password: process.env.DB_PASSWORD,
//    server: process.env.DB_SERVER,
//    database: process.env.DB_DATABASE,
//    options: {
//        encrypt: true,
//        trustServerCertificate: true, // Sertifika sorunu yaşarsanız bunu ekleyin.
//    },
//};

//export const connectToDatabase = async () => {
//    try {
//        const pool = await sql.connect(config);
//        console.log('Connected to MSSQL');
//        return pool;
//    } catch (error) {
//        console.error('Database connection error:', error);
//        throw error;
//    }
//};
