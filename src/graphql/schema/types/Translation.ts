import { gql } from "apollo-server-core";
import { languages } from "../../../config";

const langs = Object.keys(languages);
let gLangs = langs.map((lang: string) => `${lang}: String`);

export default gql`
  type FieldTranslation {
    ${gLangs.join("\n")}
  }
  input InputTranslation {
    ${gLangs.join("\n")}
  }
`;
