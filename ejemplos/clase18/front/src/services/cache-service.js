export const get = (search) => {
    const result = localStorage.getItem(search);
    return result ? JSON.parse(result) : [];
}

export const set = (text, content) => {
    localStorage.setItem(text, JSON.stringify(content))
}
