module.exports = `
  type Identity {
    id: ID!
    user: ID!
    provider: String
    uid: String
    token: String
    secret: String
    refreshToken: String
    name: String
    email: String
    nickname: String
    image: String
    phone: String
    urls: String
    expiresAt: String
    createdAt: String
    updatedAt: String
  }
`;
