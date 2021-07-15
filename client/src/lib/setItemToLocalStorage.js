const setItemToLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
        alert('로컬스토리지에서 오류가 발생했어요!');
        console.error('LocalStorage ERROR occured');
    }
}

export default setItemToLocalStorage;