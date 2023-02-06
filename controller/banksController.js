const client = require("../server");
client.connect();

exports.getBanks = (req, res) => {
    //<----- NO BANK NAME IS MENTIONED=> SHOW ALL BANKS IN LIST ----->
    if (!req.query.bankName) {
        const query = `select * from banks`

        client.query(query, (err, result) => {
            if (!err) {
                res.status(200).json({
                    totalRows: result.rowCount,
                    data: result.rows
                })
            }
        });

    } //<----- BRANCH DETAILS OF SPECIFIC BANK ENTERED BY USER IN BANK NAME AND BRANCH NAME FORM ----->
    else if (req.query.bankName && req.query.branchName) {
        const {bankName, branchName} = req.query;

        const getBranchDetails = `select banks.name, branches.branch, branches.address, branches.city, 
        branches.district, branches.state from branches INNER JOIN banks ON branches.bank_id = banks.id 
        WHERE name = '${bankName}' AND branch = '${branchName}'`

        client.query(getBranchDetails, (err, result) => {
            if (!err) {
                res.status(200).json({
                    totalRows: result.rowCount,
                    data: result.rows
                })
            }
        })
        
    }//<------ GET ALL BRANCH DETAILS OF A SPECIFIC BANK ----->  
    else if (req.query.bankName) {
        const {bankName} = req.query;
        
        const getBankAllBranch = `WITH id AS (select id from banks where name = '${bankName}') 
        SELECT * FROM branches WHERE branches.bank_id = (select id from banks where name = '${bankName}')`
        
        client.query(getBankAllBranch, (err, result) => {
            if (!err) {
                res.status(200).json({
                    totalRows: result.rowCount,
                    data: result.rows
                })
            }
        })
     }//<-----WHEN NO ABOVE REQUEST MATCHES, SHOW ALL THE BANKS---> 
     else {
        const query = `select * from banks`

        client.query(query, (err, result) => {
            if (!err) {
                res.status(200).json({
                    totalRows: result.rowCount,
                    data: result.rows
                })
            }
        });
    }
    client.end;
}