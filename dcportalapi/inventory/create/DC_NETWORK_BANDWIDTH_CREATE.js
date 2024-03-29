const oracledb = require('oracledb');
const Promise = require("bluebird");
const bodyParser = require('body-parser')



var password = 'Tm1m5u5R' 
module.exports = function (app) {
   
  // parse application/x-www-form-urlencoded

  app.use(bodyParser.urlencoded({
    extended: true
  }));
 // app.use(bodyParser.text({ type: 'text/html' }))
    const callapi = app.post('/api/DC_NETWORK_BANDWIDTH_CREATE',(req,res)=>{

      
     // res.send(req.body)
     result = req.body
     console.log(req.body)

      async function makeConnection() {
        try {
          connection = await oracledb.getConnection({
              user: "TMIMS",
              password: password,
              connectString: "127.0.0.1:1521/BQMDEV"
              //connectString: "10.54.8.162:1521/BQMDEV"
          });
          console.log('connected to database');
        } catch (err) {
          console.error(err.message);
        } finally {
          if (connection) {
           
           

            var query1p =  connection.execute(

                `insert into DC_Bandwidth 
                (
                NTW_SITE_ID,
                NTW_NAME,
                NTW_BANDWIDTH,
                NTW_STATUS,
                NTW_DESC,
                NTW_COMM_DT,
                NTW_DECOMM_DT,
                NTW_CREATED_BY
                )values(
                (select site_id from dc_site where site_name='`+result['SITE_NAME']+`'),
                '`+result['NTW_NAME']+`',
                '`+result['NTW_BANDWIDTH']+`',
                '`+result['NTW_STATUS']+`',
                '`+result['NTW_DESC']+`',
                to_date('`+result['NTW_COMM_DT']+`','DD/MM/YYYY'), 
                to_date('`+result['NTW_DECOMM_DT']+`','DD/MM/YYYY'),
                '`+result['NTW_CREATED_BY']+`'
                )` ,
                [],  
               
                );

                Promise.join(query1p).spread(function (result){

            
                  res.status(200).send("success");
                  console.log(req.body)
                 // return connection.close();
                })
                .catch(function (err){
                  console.log(err.message);
                  //return connection.close();
                });
             
              }
              
            
          }
        
        }
            
            
            
          makeConnection()
     
      
     } )
          
      
          
        
      }