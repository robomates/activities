const join1 = document.getElementById("arduino-join")
const loading = document.querySelector(".loading")
const errorsdiv = document.querySelector(".errors")
const errorJoining = document.querySelector(".error-join")
const joinMesssage = localStorage.getItem("joinMsg");

if (!join1) console.error("Javascript failed!");

function showLoading() {
    loading.style.display = "block";
}

function onloadLoading() {
    loading.style.display = "block";
    setTimeout(hideLoading, 1000);
}

function hideError(object) {
    if (!object) return console.error("Error object not found!");
    object.style.transition = "opacity 0.5s ease";
    object.style.opacity = "0";
    setTimeout(() => {
        object.style.display = "none";
        errorsdiv.style.display = Array.from(errorsdiv.children).some(child => child.style.display !== "none") ? "block" : "none";
        object.style.opacity = "1";
    }, 500);
}

function showError(object, text) {
    if (!object) return console.error("Error object not found!");
    errorsdiv.style.display = "block";
    object.style.display = "block";
    object.textContent = text;
}
function errorTP(type, activity) {
    if (type === "join") {
        showError(errorJoining, `You are already in the activity: ${activity}.`)
        setTimeout(() => hideError(errorJoining), 2000)
    }
}

function loadErrors() {
    if (joinMesssage == "1") {
        localStorage.setItem("joinMsg", "0")
        showError(errorJoining, `You are already in the activity: Arduino.`)
        setTimeout(() => hideError(errorJoining), 2000)
    }
}

function findID(id) {
    if (id === 1) {
        return "arduino-join";
    }
}

function joinActivity(id) {
    showLoading();
    setTimeout(hideLoading, 3000);
    const activity = findID(id)
    console.log(`Joining the activity: '${activity}'`)

    if (localStorage.getItem("in-arduino") === "true") {
        errorTP("join", "Arduino")
        hideLoading();
        return;
    }

    if (activity == "arduino-join") {
        window.location.href = "https://robomates.github.io/activities/9960423"
        return;
    }
    
}
function hideLoading() {
    loading.style.display = "none";
}


join1.addEventListener("click", function() {
    joinActivity(1);
});

window.onload = function() {
    onloadLoading();
    setTimeout(() => {
        loadErrors();
    }, 1000);
};
