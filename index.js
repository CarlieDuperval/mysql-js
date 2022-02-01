import mysql from 'mysql2'; 

// to create the connection to the database
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'Commerce',
        password: 'Aloulou0905',
      });


    //
    const query = `SELECT *  \
    FROM Products`
  
  // simple query
  connection.query(
     query,
      function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
      }
  );

         const insertQuery = 
        `INSERT INTO products (Id, Description, Sku)
         VALUES (?, ?, ?)`
        //connection.query(insertQuery, [],
        // (err, results) =>{
         //   if (err){
          //    console.log(err)
         //   }
         // console.log(results)
      // })
    
 
  
    let sql = "INSERT INTO ContactPersons (Id, Name, Email, Phone, Address) VALUES ?";
    let values = [
    [11, 'Maxo Jean', 'maxo@aol.com', '561-3062021', '9927 Boca Fl'],
    [22, 'Seneque Fleurilus', 'seneque@aol.com', '561-3062022', '9928 Boca Fl'],
    [33, 'Adrien Stephen', 'adrien@aol.com','561-3062023', '9929 Boca Fl'],
    [44, 'Davidson Demesier', 'davisdon@aol.com', '561-3062024', '9929 Boca Fl'],
    [55, 'Marie Nicolas', 'marie@aol.com', '561-3062025', '9930 Boca Fl'],
    ];

    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    connection.end();