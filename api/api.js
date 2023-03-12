// API là gì ?
// Application Programming Interface
// https://api.github.com/users/evondev
// JSON.parse(data)
const endpoint = "https://api.gihub.com/users";

// const userEl = document.querySelector(".username");
// fetch

const userEl = document.querySelector(".username");
async function displayName(username) {
  userEl.textContent = "Loading....";
  const promise = await fetch(`${endpoint}/${username}`);
  const data = await promise.json();
  userEl.textContent = data.login;
}
function handleErr(err) {
  console.log("err", err);
  userEl.textContent = "No data";
}
console.log(displayName("evondev").catch(handleErr));
// async function displayUser(username) {
//   userEl.textContent = "Loading...";
//   const promise = await fetch(`${endpoint}/${username}`);
//   const data = await promise.json();
//   userEl.textContent = `${data.login}`;
// }
// function handleError() {
//   console.log("Something wrong with your api");
//   userEl.textContent = "No data found";
// }
// // console.log(displayUser("evondev"));
// displayUser("asbc").catch(handleError);
// cors
