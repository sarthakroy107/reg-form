import * as z from 'zod'
import { loginFormSchema, addCollegeSchema, studentFullDetailsSchema, portalStatusSchema } from '@/lib/resolver'
export { }

declare global {
  type TLoginFormSchema = z.infer<typeof loginFormSchema>
  type TAddCollegeSchema = z.infer<typeof addCollegeSchema>
  type TDummyAPIData = {
    success: boolean;
    message: string;
    total_users: number;
    offset: number;
    limit: number;
    users: {
      id: number;
      gender: string;
      first_name: string;
      last_name: string;
      email: string;
      country: string;
      zipcode: string;
    }[]
  }

  type TStudentDetailsSchema = z.infer<typeof studentFullDetailsSchema>
  type TPortalSchema = z.infer<typeof portalStatusSchema>
}