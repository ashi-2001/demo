function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    

    const Name = data.get("firstname") + data.get("lastname");
    //const dateOfBirth = data.get("dob");
    const dob = new Date(data.get("dob.value"));
    console.log(dob)
    const mobile = data.get("mobile");
    const place = data.get("place");
    const email_id = data.get("email");
    const Aadhar_Number = data.get("aadhar");
    const PAN = data.get("PAN");
    const file = data.get("file");

    const today = new Date();
    console.log(today);
    //const age = today.getFullYear() - dateOfBirth.getFullYear();
    // console.log(age);
    // if(age < 18){
    //     alert("Minimum age is 18 years");
    //     return;
    // }


    
    
    
    document.getElementById('result-paragraph').innerHTML = 
    `<h6>Name:-</h6>${Name}<br>
    <h6>Date of Birth:-</h6>${dateOfBirth} <br>
    <h6>Mobile:-</h6>${mobile}<br>
    <h6>Place:-</h6>${place}<br>
    <h6>Email ID:-</h6>${email_id}<br>
    <h6>Aadhar Number:-</h6>${Aadhar_Number}<br>
    <h6>PAN:-</h6>${PAN}<br>
    <h6>Attached file:-</h6>${file[0]}<br>`;
}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
