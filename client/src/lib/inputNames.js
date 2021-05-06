const names = {
    "userId": "ID", 
    "password": "비밀번호", 
    "passwordConform": "비밀번호 확인", 
    "nickname": "닉네임"
}

export const postposition = (name) => {
    const result = ["userId", "password"].includes(name) ? "를" : "을";
    return result;
};

export default names;