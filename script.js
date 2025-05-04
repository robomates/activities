// const join1 = document.getElementById("arduino-join")
// const loading = document.querySelector(".loading")
// const errorsdiv = document.querySelector(".errors")
// const successdiv = document.querySelector(".success")
// const successJoining = document.querySelector(".success-join")
// const errorJoining = document.querySelector(".error-join")

// if (!join1) console.error("Javascript failed!");

// function showLoading() {
//     loading.style.display = "block";
// }

// function onloadLoading() {
//     loading.style.display = "block";
//     setTimeout(hideLoading, 1000);
// }

// function hideSuccess(object) {
//     if (!object) return console.error("Error object not found!");
//     object.style.transition = "opacity 0.5s ease";
//     object.style.opacity = "0";
//     setTimeout(() => {
//         object.style.display = "none";
//         successdiv.style.display = Array.from(successdiv.children).some(child => child.style.display !== "none") ? "block" : "none";
//         object.style.opacity = "1";
//         hideLoading();
//     }, 500);
// }

// function hideError(object) {
//     if (!object) return console.error("Error object not found!");
//     object.style.transition = "opacity 0.5s ease";
//     object.style.opacity = "0";
//     setTimeout(() => {
//         object.style.display = "none";
//         errorsdiv.style.display = Array.from(errorsdiv.children).some(child => child.style.display !== "none") ? "block" : "none";
//         object.style.opacity = "1";
//     }, 500);
// }

// function showSuccess(object, text) {
//     if (!object) return console.error("Error object not found!");
//     successdiv.style.display = "block";
//     object.style.display = "block";
//     object.textContent = text;
// }

// function showError(object, text) {
//     if (!object) return console.error("Error object not found!");
//     errorsdiv.style.display = "block";
//     object.style.display = "block";
//     object.textContent = text;
// }
// function errorTP(type, activity) {
//     if (type === "join") {
//         showError(errorJoining, `You are already in the activity: ${activity}.`)
//         setTimeout(() => hideError(errorJoining), 3000)
//     }
// }

// function successTP(type, activity) {
//     if (type === "join") {
//         showSuccess(successJoining, `Successfully joined the activity: ${activity}.`)
//         setTimeout(() => hideSuccess(successJoining), 3000)
//     }
// }

// function findID(id) {
//     if (id === 1) {
//         return "arduino-join";
//     }
// }

// function joinActivity(id) {
//     showLoading();
//     setTimeout(hideLoading, 3000);
//     const activity = findID(id)
//     console.log(`Joining the activity: '${activity}'`)

//     if (localStorage.getItem("in-arduino") === "true") {
//         errorTP("join", "Arduino")
//         hideLoading();
//         return;
//     }

//     if (activity == "arduino-join") {
//         successTP("join", "Arduino")
//         localStorage.setItem("in-arduino", "true")
//         return;
//     }
    
// }
// function hideLoading() {
//     loading.style.display = "none";
// }


// join1.addEventListener("click", function() {
//     joinActivity(1);
// });

// window.onload = onloadLoading;