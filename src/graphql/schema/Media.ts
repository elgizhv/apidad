import { gql } from "apollo-server-core";

export default gql`
  enum MediaType {
    PHOTO
    VIDEO
    SOUND
  }
  type MediaPhoto {
    url: String
    ref: String
  }
`;
