// let user = [{
//     name: "Sayan",
//     email: "sayan@gmail",
//     phone: "1234567890",
// },
// {
//     name: "Dayan",
//     email: "dayan@gmail",
//     phone: "12434567890",
// }
// ]

// localStorage.setItem("name", JSON.stringify(user)); //array to string "JSON.stringify"

// console.log(JSON.parse(localStorage.getItem("name"))); //string to array "JSON.parse"

let form = document.querySelector("form");
let main = document.querySelector(".main");
let clear = document.querySelector("#clear");


form.addEventListener("submit", (event) => {
  let name = event.target.name.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let checkStatus = 0;

  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? []; // "??" null handle operator or leave empty array "[]"
  for(let v of userData){
    if(v.email === email || v.phone === phone){
        checkStatus = 1;
        break;
    }  
  }
  if(checkStatus === 1){
    alert("Email or Phone Number already exists");
  }
  else{
  userData.push({
    name: name,
    email: email,
    phone: phone,
  });
  localStorage.setItem("userDetails", JSON.stringify(userData));
  event.target.reset();
  displatdata();

  event.preventDefault();
}
});

 let displatdata = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
  let finaldata = '';
  userData.forEach((element,i) => {

    
    finaldata+= ` <div class="item">
            <span onclick="removeData(${i})">&times;</span>
            <h5>Name</h5>
            <div>${element.name}</div>

            <h5>Email</h5>
            <div>${element.email}</div>

            <h5>Phone no.</h5>
            <div>${element.phone}</div>
        </div>`
  });

  main.innerHTML = finaldata;
 
};
let removeData = (index) => {
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.splice(index, 1);
    localStorage.setItem("userDetails", JSON.stringify(userData));
    displatdata();
}
clear.addEventListener("click", () => {
    localStorage.clear("userDetails");
    displatdata();
})

displatdata();
