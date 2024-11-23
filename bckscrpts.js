type="module"
// Firebase Configuration and Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAzK2xnwpUZVPSXTQPscOphtf-9PSyps04",
    authDomain: "cooperate-finance.firebaseapp.com",
    databaseURL: "https://cooperate-finance-default-rtdb.firebaseio.com",
    projectId: "cooperate-finance",
    storageBucket: "cooperate-finance.appspot.com",
    messagingSenderId: "785120987896",
    appId: "1:785120987896:web:9c97861dfd6f908112c90d"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

// References to DOM Elements
const username = document.getElementById('userInp');
const email = document.getElementById('emailInp');
const password = document.getElementById('passInp');
const fullname = document.getElementById('nameInp');
const submitBtn = document.getElementById('sub-btn');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const state = document.getElementById('state');
const invest = document.getElementById('investment');
const refer = document.getElementById('referrer');
const code = document.getElementById('code');
const otpInput = document.getElementById('otp'); // Assumes an input for OTP verification
let otpCode;

// Helper function to check empty inputs
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

// Validate form inputs
function Validation() {
    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let usernameRegex = /^[a-zA-Z0-9]{5,}$/;

    if (isEmptyOrSpaces(fullname.value) || isEmptyOrSpaces(username.value) || isEmptyOrSpaces(password.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(code.value)) {
        alert("You cannot leave any field empty");
        return false;
    }
    if (!nameRegex.test(fullname.value)) {
        alert('The name should only contain alphabets');
        return false;
    }
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email');
        return false;
    }
    if (!usernameRegex.test(username.value)) {
        alert('Username must be at least 5 alphanumeric characters with no spaces');
        return false;
    }
    return true;
}

// Register User to Firebase
function RegisterUser(event) {
    event.preventDefault();
    if (!Validation()) return;

    const dbRef = ref(db);
    get(child(dbRef, `UsersList/${username.value}`)).then((snapshot) => {
        if (snapshot.exists()) {
            alert("Account already exists!");
        } else {
            // Store user data in Firebase database
            set(ref(db, `UsersList/${username.value}`), {
                fullname: fullname.value,
                username: username.value,
                email: email.value,
                password: encPass(),
                phoneNumber: phone.value,
                country: country.value,
                state: state.value,
                invest: invest.value,
                refferer: refer.value,
                isAdmin: false,
                balance: 0,
                date: new Date().toISOString().slice(0, 10),
                last_date: new Date().toISOString().slice(0, 10),
                deposit: 0,
                withdrawal: 0,
                last_date: 0,
                bonus: 0,
                code: code.value
            }).then(() => {
                alert("User registered successfully. OTP sent for verification.");
                generateAndSendOtp(email.value);
            }).catch((error) => {
                alert("Error: " + error);
            });
        }
    });
}

// Encrypt Password
function encPass() {
    return CryptoJS.AES.encrypt(password.value, password.value).toString();
}

// OTP Generation and Sending
function generateAndSendOtp(userEmail) {
    otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

    // EmailJS configuration
    emailjs.init("YOUR_EMAILJS_USER_ID");
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        user_email: userEmail,
        otp_code: otpCode
    }).then(() => {
        alert("OTP has been sent to your email.");
    }).catch((error) => {
        console.error("Error sending OTP: ", error);
    });
}

// OTP Validation
function validateOtp() {
    if (otpInput.value === otpCode) {
        alert("OTP verified successfully. Redirecting to dashboard...");
        window.location = "userdashboard/index.html";
    } else {
        alert("Incorrect OTP. Please try again.");
    }
}

// Authenticate User Login
function AuthenticateUser(event) {
    event.preventDefault();
    const dbRef = ref(db);

    get(child(dbRef, `UsersList/${username.value}`)).then((snapshot) => {
        if (snapshot.exists()) {
            let dbpass = decPass(snapshot.val().password);
            if (dbpass === password.value) {
                login(snapshot.val());
            } else {
                alert("Invalid username or password!");
            }
        } else {
            alert("Invalid username or password!");
        }
    }).catch(error => {
        console.error("Error reading data: ", error);
    });
}

// Decrypt Password
function decPass(dbpass) {
    return CryptoJS.AES.decrypt(dbpass, password.value).toString(CryptoJS.enc.Utf8);
}

// Login and Session Management
function login(user) {
    const keepLoggedIn = document.getElementById('customSwitch1').checked;
    const storage = keepLoggedIn ? localStorage : sessionStorage;
    storage.setItem('user', JSON.stringify(user));
    window.location = "/index.html";
}

// Forgot Password - Sends reset link
function forgotPassword() {
    const userEmail = prompt("Enter your email to reset your password:");
    sendPasswordResetEmail(auth, userEmail)
        .then(() => alert("Password reset email sent!"))
        .catch((error) => console.error("Error sending password reset: ", error));
}

// Function to allow admin to update sign-up code in database
function updateAdminCode(newCode) {
    const dbRef = ref(db, "adminSettings");
    update(dbRef, { signupCode: newCode }).then(() => {
        alert("Signup code updated successfully.");
    }).catch((error) => {
        alert("Error updating signup code: " + error);
    });
}
