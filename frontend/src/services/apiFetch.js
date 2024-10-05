// import * as userService from "./user";

// const xsrfToken = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("XSRF-TOKEN="))
//     .split("=")[1];

// console.log(xsrfToken);

// const apiFetch = (method, path, body = null) => {
//     const options = {
//         method,
//         credentials: "include",
//         headers: {
//             "Content-Type": "application/json",
//             "XSRF-TOKEN": xsrfToken
//         },
//     };

//     // const sessionToken = userService.getSessionTokenStorage();
//     // if (sessionToken) {
//     //     options.headers["Capstone-Session"] = sessionToken;
//     // }

//     if (body) {
//         options.body = JSON.stringify(body);
//     }

//     return fetch(path, options);
// };

// export default apiFetch; 