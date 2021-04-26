import * as firebase from "../../../services/firebase";
import { generateToken } from "../../../services/jwt";
import { IUser, User, UserModel, UserRole } from "../../../database/model/User";

const { validateAuthToken, getUser } = firebase.user;

const auth = async (parent: any, args: any, context: any, info: any) => {
  const { authToken } = args;
  let user: User | null = null;
  let result: any = await validateAuthToken(authToken).catch((e) => false);

  if (!result) throw new Error("token is not valid");

  let firebaseUser = await getUser(result.uid);

  user = await UserModel.findOne({ firebaseId: result.uid });
  if (!user) {
    let userData: IUser = {
      name: firebaseUser.displayName || result.uid,
      firebaseId: firebaseUser.uid,
      role: UserRole.USER,
      profilePicture: firebaseUser.photoURL,
    };
    user = await UserModel.create(userData);
  }

  const token = generateToken({ userId: user?._id.toString() });

  return { token, user };
};

export default {
  auth,
};
