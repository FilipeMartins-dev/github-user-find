import { input, searchButton, output } from "./components.mjs";

export function handleKey(event){
    if(event.key === "Enter"){
        search()
    }
}

export function search(){
    const user = input.value
    console.log(user)
    output.innerHTML = `
        <div class="card warn">
            Searching...
        </div>
    `

    fetch(`https://api.github.com/users/${user}`)
    .then((data)=>{
        // console.log(data)

        
        data.json().then((response)=>{
            if(data.status === 404){
                output.innerHTML = `
                <div class="card warn">
                    User not Found
                </div>
                `
                throw new Error("User Not Found by API")
            }
            if(data.status === 403){
                throw new Error("Error 403! Status: HTTP problem")
            }
            if(!data.ok){
                output.innerHTML = `
                <div class="card warn">
                    User not Found.
                </div>
                `
                throw new Error("Error")
            }
            if(data.ok){
                console.log("done!")
            }

            console.log(response)

            output.innerHTML = `
            <div class="card">
                <div class="card-user-info">
                    <img src="${response.avatar_url}" class="card-img">

                    <div class="card-title">
                        <span class="card-name">${response.name}</span>
                        <span>ID: ${response.id}</span>
                    </div>
                </div>
                    
                    
                <div class="card-body">
                <span class="card-item">
                        <span>User:</span>
                        <span>${response.login}</span>
                    </span>
                    <span class="card-item">
                        <span>Followers:</span>
                        <span>${response.followers}</span>
                    </span>
                    <span class="card-item">
                        <span>Following:</span>
                        <span>${response.following}</span>
                    </span>
                    <span class="card-item">
                        <span>Location:</span>
                        <span>${response.location}</span>
                    </span>
                    <span class="card-item">
                        <span>Public repositories:</span>
                        <span>${response.public_repos}</span>
                    </span>
                    <span class="card-item item-link">
                        <span>Perfil:</span>
                        <span> <a target="_blank" href="${response.html_url}">${response.html_url}</span>
                    </span>
                    
                </div>
            </div>
            `
        })
    })
}
