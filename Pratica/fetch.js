const url = "https://dummyjson.com/users";

async function chamarUsuarios() {
    const response = await fetch(url)
    if(response.status === 200){
        const obj = await response.json()
        console.log(obj)
    }
}

chamarUsuarios()