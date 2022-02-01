import mysql from 'mysql2';
import creds from 'dbCreds'


const connection;

export const getConnection = () => {
    if (!connection){
        connection = mysql.createConnection(creds)
    }
return connection;
}