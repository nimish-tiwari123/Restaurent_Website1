
function fetchData(){
    const fname = document.getElementById('inputfname').value;
    const lname = document.getElementById('inputlname').value;
    const email = document.getElementById('inputEmail3').value;
    const password = document.getElementById('inputPassword3').value;
    const address = document.getElementById('inputAddress').value;
    const city = document.getElementById('inputCity').value;
    const state = document.getElementById('inputState').value;
    const zipCode = document.getElementById('inputZip').value;
    console.log(fname , lname, email, password, address, city, state, zipCode);
   };
   export default fetchData;