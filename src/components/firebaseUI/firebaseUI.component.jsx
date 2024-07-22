import { useEffect } from "react";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";

import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { app } from "../../utils/firebase/firebase.utils";

function Login() {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(getAuth(app)
      
    const uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
        FacebookAuthProvider.PROVIDER_ID, // Using the correct import
        // ... other providers (e.g., GoogleAuthProvider.PROVIDER_ID)
      ],
      // ... other configuration options
    };

    ui.start("#firebaseui-auth-container", uiConfig);

    return () => ui.delete();
  }, []);

  return <div id="firebaseui-auth-container"></div>;
}

export default Login;
