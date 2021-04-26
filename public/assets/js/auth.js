const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const auth = firebase.auth();
const authGoogle = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(providerGoogle);

    signIn(result);
  } catch (e) {
    console.log("Firebase Google Authentication Error", e);
  }
};
const authFacebook = async () => {
  try {
    const result = await firebase.auth().signInWithPopup(providerFacebook);
    signIn(result);
  } catch (e) {
    console.log("Firebase Facebook Authentication Error", e);
  }
};

const signIn = async (result) => {
  const credential = result.credential;
  const token = credential?.accessToken;
  const user = result.user;

  console.log("CREDENTIAL", credential);
  console.log("TOEKN", token);
  console.log("USER", user);
  console.log("ID TOKEN", user?.getIdToken());
};
