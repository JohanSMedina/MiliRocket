import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getDatabase, ref, get, onValue } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKJh6nG5BeYBxLFaQdCQ4--h9liPqVoz4",
    authDomain: "vteumilitar.firebaseapp.com",
    databaseURL: "https://vteumilitar-default-rtdb.firebaseio.com",
    projectId: "vteumilitar",
    storageBucket: "vteumilitar.appspot.com",
    messagingSenderId: "220052190913",
    appId: "1:220052190913:web:1867b25ed33a24268c4640",
    measurementId: "G-YCXMCTDYMK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth;

export class ManageAccount {
    register(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((_) => {
                //window.location.href = "login.html";
                alert("Registro exitoso")
            })
            .catch((error) => {
                console.error(error.message);
                alert("Error al registrar: " + error.message);
            });
    }

    autheticate(email, password) {
        singWithEmailAndPassword(auth, email, password
            .then(() => {
                //window.location.href = "index.html";
                alert("Inicio de sesion exitoso");
            })
            .catch((error) => {
                console.error(error.message);
                alert("Error al Iniciar sesion: " + error.message);
            })
        )
    }

    singOut() {
        singOut(auth)
            .then((_) => {
                //window.location.href = "index.html";
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
}