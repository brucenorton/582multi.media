//use this to create file to add students
// ** micromedia_students.json uploaded above httpdocs **//
const studentsSection = document.querySelector('#students');
fetch('js/cyberpanel_a2024.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    //console.log(data);
    data.forEach(student => {
      console.log(student.first_name);
      let p = document.createElement('p');
      let password = generatePassword();
      let lowerFirst = student.first_name.toLowerCase();
      let student2num = student.number.slice(-2);

      //cyberpanel createUser --firstName Cyber --lastName Panel --email email@cyberpanel.net --userName cyberpanel --password securepassword --websitesLimit 10 --selectedACL user --securityLevel HIGH

      //cyberpanel createWebsite --package Default --owner admin --domainName cyberpanel.net --email support@cyberpanel.net --php 8.2
      
      p.innerHTML = `cyberpanel createUser --firstName "${student.first_name}" --lastName "${student.last_name}" --email	${student.number}@edu.vaniercollege.qc.ca --userName ${lowerFirst}${student2num} --password ${password} --websitesLimit 10 --selectedACL user --securityLevel HIGH<br> cyberpanel createWebsite --package Default --owner ${lowerFirst}${student2num} --domainName ${lowerFirst}${student2num}.582helvetica.com --email ${student.number}@edu.vaniercollege.qc.ca --php 8.2 --ssl 1`;
      
      //p.innerHTML = `sudo plesk bin customer --create ${lowerFirst}${student2num} -name "${student.first_name} ${student.last_name}" -email	"${student.number}@edu.vaniercollege.qc.ca" -passwd "${password}" -country CA -notify false -owner micromedia_reseller<br>
      //sudo plesk bin subscription --create ${lowerFirst}${student2num}.412micromedia.com -owner ${lowerFirst}${student2num} -service-plan "412_plan" -ip 138.197.137.132 -login ${lowerFirst}${student2num} -passwd "${password}"`
      studentsSection.append(p);
    })


  });

  function generatePassword() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#%^' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#%^';
 
    for (let i = 1; i <= 12; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    }
 
    return pass;
}

//add SSL certificates?
// https://support.plesk.com/hc/en-us/articles/12377525091863-How-to-secure-Plesk-and-mail-server-with-Let-s-Encrypt-certificate-via-CLI-

// plesk bin extension --exec letsencrypt cli.php --secure-plesk -m 2261738@edu.vaniercollege.qc.ca -w /var/www/vhosts/yousef38.412micromedia.com/httpdocs -d yousef38.412micromedia.com