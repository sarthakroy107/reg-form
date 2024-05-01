import { z } from 'zod'
export const loginFormSchema = z.object({
  id: z.string().min(1, { message: 'Student id is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
})

export const addCollegeSchema = z.object({
  college_name: z.string().min(1, { message: 'Name is required' }),
  hostname: z.string().min(1, { message: 'Hostname is required' }),
})

export const portalStatusSchema = z.object({
  opening_dates: z.string().min(1, { message: 'Opening date is required' }),
  openin_time: z.string().min(1, { message: 'Opening time is required' }),
  closing_dates: z.string().min(1, { message: 'Closing date is required' }),
  closing_time: z.string().min(1, { message: 'Closing time is required' }),
})


export const studentFullDetailsSchema = z.object({
  first_name: z.string().min(1, { message: 'First is required' }),
  middle_name: z.string().optional().default(''),
  last_name: z.string().min(1, { message: 'Last is required' }),
  date_of_birth: z.string().min(1, { message: 'Date of birth is required' }),
  aadhaar_number: z.coerce.string().min(12, { message: 'Adhaar number is required' }).max(12, { message: 'Adhaar number is required' }),
  blood_group: z.enum(['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-']),
  gender: z.enum(['male', 'female', 'other']),

  domicile: z.enum(['west_bengal', 'other']),
  marital_status: z.enum(['married', 'unmarried', 'other']),
  caste: z.enum(['gen', 'obc-b', 'obc-a', 'sc', 'st']),
  nationality: z.enum(['indian', 'other']),
  religion: z.enum(['brahmoism', 'buddhism', 'christianity', 'hinduism', 'islam', 'jainism', 'sikhism', 'zoroastrianism', 'other']),
  bpl: z.enum(['yes', 'no']),
  family_income: z.coerce.number().min(0, { message: 'Family income is required' }).positive({ message: 'Family income must be a positive number' }),

  disability: z.enum(['yes', 'no']),
  disability_type: z.enum(['visually_handicapped', 'hearing_impairment', 'orthopaedically_handicapped',]).optional(),
  disability_percentage: z.coerce.number().min(0, { message: 'Disability percentage is required' }).max(100, { message: 'Disability percentage must be less than 100' }).optional(),
  qualifying_exam_registration_number: z.string().min(1, { message: 'Higher secondary registration number is required' }),

  result_status: z.enum(['pass', 'fail']),
  board: z.enum(['cbse', 'icse', 'wbchse', 'other']),
  stream: z.enum(['science', 'commerce', 'arts']),
  year_of_passing: z.coerce.number().min(2020, { message: 'Year of passing is required' }).max(2024, { message: 'Year of passing is required' }),

  mobile_number: z.coerce.string().min(10, { message: 'Mobile number must be 10 digits' }).max(10, { message: 'Mobile number must be 10 digits' }),
  whatsapp_number: z.coerce.string().min(10, { message: 'Whatsapp number must be 10 digits' }).max(10, { message: 'Whatsapp number must be 10 digits' }).optional().or(z.literal('')),
  email: z.string().email({ message: 'Email is required' }),


  shift: z.enum(['evening', 'day']),

  //!Changed this to enum from stream for naming conflict
  degree_stream: z.enum(['ba_general', 'ba_honors', 'bsc_general', 'bsc_honors', 'bcom', 'bba']),
  major: z.enum(['bengali', 'english', 'sanskrit', 'history', 'geography', 'philosophy', 'political_science', 'economics', 'physics', 'chemistry', 'mathematics', 'zoology', 'economics', 'accountancy', 'business_studies', 'statistics']),
  minor_1: z.enum(['bengali', 'english', 'sanskrit', 'history', 'geography', 'philosophy', 'political_science', 'economics', 'physics', 'chemistry', 'mathematics', 'zoology', 'economics', 'accountancy', 'business_studies', 'statistics']),
  minor_2: z.enum(['bengali', 'english', 'sanskrit', 'history', 'geography', 'philosophy', 'political_science', 'economics', 'physics', 'chemistry', 'mathematics', 'zoology', 'economics', 'accountancy', 'business_studies', 'statistics']),

  //!Changed this to enum from stream for naming conflict

  mother_tongue: z.enum(['bengali', 'english', 'hindi', 'urdu', 'nepali', 'santali', 'odia', 'assamese', 'kannada', 'marathi', 'punjabi', 'other']),
  first_generation_learner: z.enum(['yes', 'no']),

  sports_representation: z.enum(['yes', 'no']),
  sports_level: z.enum(['state', 'national', 'international']).optional().or(z.literal('')),
  sports_name: z.string().min(1, { message: 'Sports name is required' }).optional().or(z.literal('')),


  university_registration_number: z.string().min(1, { message: 'University registration number is required' }).optional().or(z.literal('')),
  banglar_sikkha_id: z.string().min(1, { message: 'Banglar sikkha id is required' }).optional().or(z.literal('')),
  banglar_sikkha_portal_registed: z.enum(['yes', 'no']),

  father_name: z.string().min(1, { message: 'Father name is required' }),
  father_qualification: z.enum(['none', 'x_below', 'xii', 'graduate', 'post_graduate_above']),
  father_occupation: z.enum(['none', 'service', 'business', 'farmer', 'labourer', 'unemployed', 'retired', 'other']),
  father_mobile_number: z.coerce.string().min(10, { message: 'Mobile number must be 10 digits' }).max(10, { message: 'Mobile number must be 10 digits' }).optional().or(z.literal('')),

  mother_name: z.string().min(1, { message: 'Mother name is required' }),
  mother_qualification: z.enum(['none', 'x_below', 'xii', 'higher_secondary', 'graduate', 'post_graduate_above', 'doctorate', 'other']),
  mother_occupation: z.enum(['none', 'service', 'business', 'farmer', 'labourer', 'unemployed', 'retired', 'other']),
  mother_mobile_number: z.coerce.string().min(10, { message: 'Mobile number must be 10 digits' }).max(10, { message: 'Mobile number must be 10 digits' }).optional().or(z.literal('')),

  guardian_name: z.string().min(1, { message: 'Guardian name is required' }),
  guardian_qualification: z.enum(['none', 'x_below', 'xii', 'higher_secondary', 'graduate', 'post_graduate_above', 'doctorate', 'other']),
  guardian_occupation: z.enum(['none', 'service', 'business', 'farmer', 'labourer', 'unemployed', 'retired', 'other']),
  guardian_mobile_number: z.coerce.string().min(10, { message: 'Mobile number must be 10 digits' }).max(10, { message: 'Mobile number must be 10 digits' }).optional().or(z.literal('')),

  nearest_station: z.string().min(1, { message: 'Nearest station is required' }),
  family_member_count: z.coerce.number().min(0, { message: 'Family member count is required' }).positive({ message: 'Family member count must be a positive number' }),

  institution_name: z.string().min(1, { message: 'Institution name is required' }),
  institution_address: z.string().min(1, { message: 'Institution address is required' }),
  institution_district: z.string().min(1, { message: 'Institution district is required' }),
  institution_state: z.string().min(1, { message: 'Institution state is required' }),
  institution_country: z.string().min(1, { message: 'Institution country is required' }),
  institution_pincode: z.string().min(1, { message: 'Institution pincode is required' }).max(6, { message: 'Institution pincode must be 6 digits' }),
  institution_medium: z.enum(['bengali', 'english', 'hindi', 'urdu','other']),

})
.refine(data => {
  if(data.sports_representation === 'yes') {
    if(!data.sports_level) return false;
    if(data.sports_level === 'state' || data.sports_level === 'national' || data.sports_level === 'international') return true;
    else return false;
  }
  data.sports_level = undefined as any;
  return true;
}, { message: 'Sports level is required', path: ['sports_level'] })
.refine(data => {
  if(data.sports_representation === 'yes') {
    if(!data.sports_name) return false;
    return true;
  }
  data.sports_name = undefined as any;
  return true;
}, { message: 'Sports name is required', path: ['sports_name'] })
.refine(data => {
  if (data.disability === 'yes') {
    if(!data.disability_type) return false;
    if(data.disability_type === 'visually_handicapped') return true;
    else if(data.disability_type === 'hearing_impairment') return true;
    else if(data.disability_type === 'orthopaedically_handicapped') true;
    else false;
  }
  return true;
}, { message: 'Disability type is required', path: ['disability_type'] })