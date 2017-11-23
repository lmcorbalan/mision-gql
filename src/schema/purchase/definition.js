module.exports = `
  type DateStartEnd {
      start: String
      end: String
  }

  type Dates {
    purchase: DateStartEnd
    payment: DateStartEnd
    setup: DateStartEnd
    delivery: String
  }

  type Purchase {
    id: ID!
    name: String
    description: String
    type: Int
    dates: Dates
  }
`;
