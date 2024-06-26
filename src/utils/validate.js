
export const validate = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/.test(password);

    if (!isEmailValid && !isPasswordValid) return "Email and Password are not valid";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password should have at least 8 characters, one digit, one lowercase letter, one uppercase letter, one special character.";

    return null;
}