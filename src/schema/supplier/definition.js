module.exports = `
  type Supplier {
    id: ID!
    name: String
    nature: Int
    business_name: String
    address: Address,
    phone: Phone,
    contactMame: String
    email: String
    web: String
    latitude: Float
    longitude: Float
    errorCode: String
    description: String
    logo: String
    video: String
    active: Boolean
    operationType: String
    ivaCondition: String
    identityType: String
    identityNumber: String
    inscriptionNumber: String
  }
`;
