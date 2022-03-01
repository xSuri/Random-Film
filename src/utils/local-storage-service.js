export function getStorage(key){
    return localStorage.getItem(key)
}

export function storeStorage(key, value){
    localStorage.setItem(key, value);
}