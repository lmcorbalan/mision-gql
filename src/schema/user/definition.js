module.exports = `
  type LoginData {
    encryptedPassword: String
    resetPasswordToken: String
    resetPasswordSentAt: String
    rememberCreatedAt: String
    signInCount: Int
    currentSignInAt: String
    lastSignInAt: String
    currentSignInIp: String
    lastSignInIp: String
    confirmedAt: String
    confirmationToken: String
    confirmationSentAt: String
    unconfirmedEmail: String
  }

  type User
  {
    id: ID!
    type: String
    firstName: String
    lastName: String
    birthday: String
    dni: String
    address: Address
    phone: Phone
    email: String
    circle: ID
    nameIva: String
    zone: String
    login: LoginData
    codigoVendedor: String
    tipoOperacion: String
    inscripcionIva: String
    tipoIdentificacion: String
    numeroIdentificacion: String
    numeroIngresosBrutos: String
    codigoTransporte: String
    codigoClasificacion: String
    createdAt: String
    updatedAt: String
  }
`;
