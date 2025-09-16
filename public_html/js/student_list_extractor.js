// Fetch the CSV file
fetch('js/582helvetica_students_a2024.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n'); // Split by lines

        // Assuming the first row contains headers, split the headers
        const headers = rows[0].split(',');

        // Initialize an array to hold the extracted data
        const extractedData = [];
        const regEx = /"|=|\\/g;
        const numEx = /^.{1,7}|"/g;
        // Loop through rows (starting from index 1 to skip headers)
        for (let i = 1; i < rows.length; i++) {
            const values = rows[i].split(',');
            const rowData = {};

            // Loop through headers and assign values to corresponding keys
            for (let j = 0; j < headers.length; j++) {
                //rowData[headers[j]] = values[j];
                stripped = values[3].matchAll(regEx);
                rowData["studentName"] = values[3].replace(regEx, '');
                rowData["studentNumber"]= values[0].replace(numEx,'');
                rowData["section"]= values[1].replace(regEx,'');
            }

            extractedData.push(rowData);
        }

        //console.log(extractedData);
        // jsonData to create a json file
        // const jsonData = JSON.stringify(extractedData, null, 2); // Add formatting for readability
        // are these the full steps? need to test!!
    //  cyberpanel createUser --firstName Peter --lastName Ngy --email ngy@vanier.college --userName PeterNg --password AGCkdPQ9 --websitesLimit 3 --selectedACL user --securityLevel HIGH
    //  cyberpanel createWebsite --package Default --owner PeterNg --domainName PeterNg.582multi.media --email ngy@vanier.college --php 8.2 --ssl 1

//## useradd -m?? -dir *** -group *** username
/*  useradd -m -d /home/PeterNg.582multi.media -g Peter1759 Peter1759
    chown -R Peter1759:nogroup /home/PeterNg.582multi.media */
        
        // create a bash command to create users

        
        console.log(jsonData);
    })
    .catch(error => {
        console.error('Error fetching or processing the CSV file:', error);
    });
    // {
    //     "Student number": "=\"2293658\"",
    //     "Section": "=\"00002\"",
    //     "Student name": "=\"Patel\"",
    //     "Student first name": "=\"Ritika\"",
    //     "\r": "\r"
    //   },