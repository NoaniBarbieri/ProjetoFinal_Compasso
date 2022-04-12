
export const getUser = () => {
    const jsonData = require('../data/people.json'); 
    return jsonData.logins
}
