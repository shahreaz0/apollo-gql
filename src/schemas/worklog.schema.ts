export default `#graphql

type Timestamp {
  month: Int
  year: Int
  day: Int
  date: String
}

type Worklog {
  _id: String
  body: String
  datetime: String
  employee_uuid: String
  branch_uuid: String
  company_uuid: String
  multiple_worklog: Boolean
  createdAt: String
  updatedAt: String
  timestamp: Timestamp
  employee: Employee
  }
`;
