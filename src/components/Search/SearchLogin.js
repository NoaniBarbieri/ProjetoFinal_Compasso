import { getUser } from "../../helpers/getUsers"

export const Check = () => {
    const userSave = localStorage.getItem("user")
    console.log(userSave)
    if(userSave){
        const teste = getUser().find(item => item.login === userSave)
        console.log(teste)
    }
    
}
