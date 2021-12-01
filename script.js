fetch('https://random-data-api.com/api/users/random_user?size=10')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
    let cardName =  document.getElementById("person")
    let res_data = data;
    for (let i = 0; i < res_data.length; i++) {
        let optVal = document.createElement('option')
        optVal.innerHTML = res_data[i].first_name
        cardName.appendChild(optVal)     
    }
    let card = document.getElementById('card')
    let changeName = document.getElementById("person")

changeName.addEventListener('change', () =>{
    console.log(changeName.value);
    card.innerHTML = ''
    for (let i = 0; i < res_data.length; i++) {
        function createCardKey(user) {
            if (changeName.value == res_data[i].first_name) {
                let newName = document.createElement('p')
                newName.innerHTML = user;
                card.appendChild(newName) 
                let img = document.getElementById('imgsize')
                img.src = res_data[i].avatar
            }   
        }
        createCardKey(`First_name: ${res_data[i].first_name}`)
        createCardKey(`Last_name: ${res_data[i].last_name}`)
        createCardKey(`Date of birth: ${res_data[i].date_of_birth}`)
        createCardKey(`Phone number: ${res_data[i].phone_number}`)
        createCardKey(`Username: ${res_data[i].username}`)
        createCardKey(`Email: ${res_data[i].email}`)
        createCardKey(`Gender: ${res_data[i].gender}`)
    }
})    
})

// /////////////////////////////////////////////////////////////////////////////

let color = document.querySelector('.color');
color.addEventListener('click', () => {
    fetch( 'https://random-data-api.com/api/color/random_color')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let colorData = data
        color.style.backgroundColor = colorData.hex_value;
    })
})



      

