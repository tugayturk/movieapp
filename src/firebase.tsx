import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import toast from "react-hot-toast";
import { firebaseConfig } from "./enivorenment";
import store from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email:string, password:string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (e:any) {
    toast.error(e.message);
  }
};
export const login = async (email:string, password:string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e:any) {
    console.log(e)
    toast.error(e.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (e:any) {
    toast.error(e.message);
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginHandle(user));
  } else {
    store.dispatch(logoutHandle());
  }
});

export default app;
