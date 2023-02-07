# Indian-Banks
 Methods Used: <br><br>
 <h3> Task1: To get all branch details of specific bank </h3>
 1. User enters the bankName in the query. Like "/api/v1/banks?bankName=HDFC BANK" with "/api/v1/banks" as the root URL<br>
2. Branch details are present in the Branches table. Which does not contain a bank name but does contain a bank id which is common in banks and branches tables.<br>
3. If i compute bank id from bank name then branch details can be easily computed associated with that bank id<br>
4. Bank id can be easily computed by running `<b>select bank.id from banks where bank.name = bankNameEnteredByuser</b>`<br>
5. Then <b>select * from branches where branches.id = idComputed</b><br>
6. can be written as <b>WITH id AS (select id from banks where name = '${bankName}') 
        SELECT * FROM branches WHERE branches.bank_id = (select id from banks where name = '${bankName}')</b><BR>
7. Gives Following result in Postman:<BR><br>
<img width="641" alt="TASK1" src="https://user-images.githubusercontent.com/78600829/216925110-f805cc1f-e5f8-4b36-bb1e-d7ddfcc1dd78.png"><br>

        
<h3> Task2: To get branch details of specific branch </h3><br>
1. User enters bank name and branch name. As in "/api/v1/banks?bankName=ABHYUDAYA COOPERATIVE BANK LIMITED&branchName=BAIL BAZAR" with "/api/v1/banks" as the root URL
<br>
2. Branches table does not contain banks name. But bank_id is common in both branches and banks tables.<br> 
3. Inner Join on common ids would help in combining both tables so that the new table contains bank name along with associated branches and its details.<br>
4. Then further chain the inner join query with WHERE clause mentioning that we only want that bank and branch details which are entered by the user.<br>
5. Inner Join code would be: <b>select banks.name, branches.name, branches.branch, branches.address, branches.city, branches.district, branches.state from branches INNER JOIN banks ON branches.bank_id = banks.id</b><br>
6. For further as per user entered bank name and request, adding <b>WHERE name = ‘${bankName}’ AND branch = ‘${branchName}’</b> would work.<br>
7. Gives Following result in Postman:<BR><br>
<img width="644" alt="TASK2" src="https://user-images.githubusercontent.com/78600829/216929410-fb171a91-d97b-4ad8-924e-65e4fccd86f3.png">


<h2>Time Taken: 5-6 Days</h2>
