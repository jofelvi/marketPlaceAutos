export const getInfoProfile = () => {
    if(!localStorage.getItem('profile')){
        return null
    }
    const profile = JSON.parse(localStorage.getItem('profile'));

    return profile
}