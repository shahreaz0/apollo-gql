export default `#graphql

type BranchDetails {
  uuid: String
  is_delete: Boolean
  deleted_at: String
  branch_name: String
  branch_manager_uuid: String
  branch_address: String
  branch_country: String
  branch_timezone: String
  latitude: String
  longitude: String
  radius: String
  status: String
  created_at: String
  updated_at: String
  company: String
}

type EmployeeDrivingLicense {
  upload_image: String
  date_of_issue: String
  date_of_expiry: String
  driving_license_number: String
}

type EmploymentInformation {
  professional_cv: String
  date_regularized: String
  official_start_date: String
}

type EmployeeNationalId {
  upload_image: String
  date_of_issue: String
  date_of_expiry: String
  national_id_number: String
}

type EmployeePassport {
  upload_image: String
  date_of_issue: String
  date_of_expiry: String
  passport_number: String
}

type EmployeeMetaData {
  employee_emergency_contanct: String
  employee_driving_license: EmployeeDrivingLicense
  employment_information: EmploymentInformation
  employee_national_id: EmployeeNationalId
  employee_passport: EmployeePassport
}

type TrainingImage {
  aws_image_id: String
  digitalocean_link: String
}

type Template {
  ID: Int
  CreatedAt: String
  UpdatedAt: String
  DeletedAt: String
  uuid: String
  title: String
  description: String
  saturday_in: String
  saturday_out: String
  sunday_in: String
  sunday_out: String
  monday_in: String
  monday_out: String
  tuesday_in: String
  tuesday_out: String
  wednesday_in: String
  wednesday_out: String
  thursday_in: String
  thursday_out: String
  friday_in: String
  friday_out: String
  status: Boolean
  branch_uuid: String
  company_uuid: String
  break_time: Int
  created_by: String
}

type ScheduleData {
  ID: Int
  CreatedAt: String
  UpdatedAt: String
  DeletedAt: String
  uuid: String
  employee_uuid: String
  branch_uuid: String
  company_uuid: String
  template_uuid: String
  status: Boolean
  is_modifyable: Boolean
  assigned_by: String
  Template: Template
  
}

type Role {
  uuid: String
  company_uuid: String
  role_name: String
}

type Designation {
  uuid: String
  job_title: String
}

type Department {
  uuid: String
  department_name: String
}

type Employee {
  uuid: String
  first_name: String
  middle_name: String
  last_name: String
  employee_code: String
  employee_type: String
  personal_email: String
  company_email: String
  date_of_birth: String
  gender: String
  marital_status: String
  phone: String
  permanent_address: String
  present_address: String
  status: String
  company_uuid: String
  branch_uuid: String
  avatar: String
  multiple_worklog: Boolean
  allow_app_attendance: Boolean
  branch_details: BranchDetails
  employee_meta_data: EmployeeMetaData
  training_image: [TrainingImage]
  schedule_data: ScheduleData
  role: Role
  designation: Designation
  department: Department
  leave_privileges: [String]
  worklogs: [Worklog]
}

`;
