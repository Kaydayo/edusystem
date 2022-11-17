import { string } from "yup";
import { ISubCourse } from "../layouts/CompanyForms/SubscriptionCourse";

export interface AdminSignup {
  firstName: string;
  surnName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
}

export interface InputValue {
  key: CompanyFormEnum;
  value: string;
}
export interface InviteInput {
  key: InviteFormEnum;
  value: string;
}
export enum CompanyFormEnum {
  EMAIL = "email",
  FIRSTNAME = "firstName",
  SURNAME = "surnName",
  PHONENUMBER = "phoneNumber",
  COMPANYNAME = "companyName",
  EMPLOYEECOUNT = "employeeCount",
  MISSION = "mission",
  VISION = "vision",
  VALUES = "values",
  ABOUTCOMPANY="aboutCompany"
  // SUBSCRIOTION="subscription"
}

export enum InviteFormEnum {
  FULLNAME = "fullName",
  EMAIL = "email",
  JOB_ROLE = "jobRole",
  DEPARTMENT = "department",
  COURSE = "course",
}

export interface CompanyFInal {
  info: {
    firstName: string;
    surnName: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    employeeCount: string;
    mission: string;
    vision: string;
    values: string;
    aboutCompany:string
    // subscription: [],
  };
  errors: any;
  errorfound: boolean;
  showError: boolean;
  loading: boolean;
  error: boolean;
}

export interface InviteData {
  info: {
    fullName: string;
    email: string;
    jobRole: string;
    department: string;
    course: string;
  };
  errors: {
    fullName: boolean;
    email: boolean;
    jobRole: boolean;
    department: boolean;
    course: boolean;
  };
  errorfound: boolean;
  showError: boolean;
  loading: boolean;
  success: boolean;
  error: any;
}

export interface UserState {
  loading: boolean;
  userInfo: {
    email: string;
    password: string;
  };
  userToken: string | null;
  error: string | null;
  success: boolean;
  profileInfo: any;
}

export interface SubscriptionState {
  selections: ISubCourse[];
  subscriptions: ISubCourse[];
  coursesToPay: string[];
  loading: boolean;
  error: any;
  success: boolean;
}

export interface Course {
  constId: string;
  name: string;
  step: number;
  contents: Content[];
}

export interface CourseState {
  courses: Course[] | any[];
  activeCourse: any[];
  //   activeLesson: any;
  activeCourseIndex: number;
  loading: boolean;
  error: any;
  success: boolean;
}

export interface Content {
  id: string;
  subTopic: string;
  step: number;
  media: string;
  note: string;
  completed: boolean;
}


export enum SingUp{
    EMAIL = 'email',
    PASSWORD='password'
}

export enum SwitchModalTeam {
    DELETE = 'delete',
    ASSIGN = 'assign',
    RENAME='rename'
}
