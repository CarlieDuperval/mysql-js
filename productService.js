import { getConnection } from "./db";

const getAllProducts = () => {
    const connection = getConnection();
    connection.query("SELECT * FROM products", (err, results) => {
        if (err) {

            console.log(err);
        }
            console.log(results);

            return results;

        });
    }