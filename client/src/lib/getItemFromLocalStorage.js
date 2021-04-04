const checkItemInLocalStorage = (item) => {
    const data = localStorage.getItem(item);
    if (!data) return;
    return data;
}

export default checkItemInLocalStorage;