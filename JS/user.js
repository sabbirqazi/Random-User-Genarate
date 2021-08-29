const url = 'https://randomuser.me/api/?results=${user}';

const getUser = ()=>{
 fetch(url)
 .then(res => res.json())
 .then(data =>displayUser(data.results))
    
}
getUser()

const displayUser = (users) =>{
    const userResult = document.getElementById('user-result')
    users.forEach(user =>{
        console.log(user)
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="text-center">
      <img src="${user.picture.medium}" class="rounded" alt="...">
      <p> Hi My Name is </p>
        <h4>${user.name.first} ${user.name.last}</h4>
        <div class="d-flex flex-column justify-content-center" > </div>
        <p>City: ${user.location.city}</p>
        <p>Street: ${user.location.street.name} ,Number: ${user.location.street.number}</p>
        <p>Timezone: ${user.location.timezone.offset} , ${user.location.timezone.description}</p>
    </div>
     `
        userResult.appendChild(div)
    })
}