import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8Lb_O1qCoZnMn1c7QQ0Wl8KX7WbPBSz0",
    authDomain: "testproject-8b07d.firebaseapp.com",
    projectId: "testproject-8b07d",
    storageBucket: "testproject-8b07d.appspot.com",
    messagingSenderId: "182497705938",
    appId: "1:182497705938:web:f7ba802d2c50d923af520b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Lai panāktu, ka strādā, nācās uninstallēt firebase un instalēt 9.6.11 versiju, jo jaunākajai versijai
// tā ir zināma problēma, ka kaut kas līdz galam neiet
