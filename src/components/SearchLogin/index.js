import { getUser } from "../../helpers/getUsers"

export const Check = () => {
    const userSave = localStorage.getItem("user")
    const passSave = localStorage.getItem("pass")

    if(userSave){
        const found = getUser().find(item => item.login === userSave && item.password == passSave )
        if(found){
            return found
        }
    }
    
}