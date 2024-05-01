"use client";
import FormCategoryContainer from "@/components/forms/form-category-contailer";
import NormalInput from "@/components/forms/normal-input";
import SelectInput from "@/components/forms/select-input";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { LucideArrowRight } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const form = useForm<TStudentDetailsSchema>();
  const disability = form.watch("disability");
  const stream = form.watch("degree_stream");
  const sportsRepresentation = form.watch('sports_representation')

  const onSubmit = (values: TStudentDetailsSchema) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-4/5 lg:w-2/3 h-fit z-0 space-y-5 bg-white shadow-md rounded-sm shadow-black/20 p-3 md:p-5 lg:p-8 md:min-w-[700px] lg:min-w-[900px]"
      >
        {/* Personal Details */}

        <FormCategoryContainer label="Personal Information">
          <div className="grid-formatter">
            <NormalInput
              label="First name"
              placeholder="Enter candidate's name"
              {...form.register("first_name")}
              error={form.formState.errors.first_name}
              required={true}
            />
            <NormalInput
              label="Middle name"
              placeholder="Enter candidate's middle name"
              {...form.register("middle_name")}
              error={form.formState.errors.middle_name}
              required={false}
            />
            <NormalInput
              label="Last name"
              placeholder="Enter candidate's last name"
              {...form.register("last_name")}
              error={form.formState.errors.last_name}
              required={true}
            />
            <NormalInput
              label="Date of birth"
              placeholder="Enter candidate date of birth"
              type="date"
              {...form.register("date_of_birth")}
              error={form.formState.errors.date_of_birth}
              required={true}
            />
            <FormField
              control={form.control}
              name="blood_group"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={2}
                  label="Blood Group"
                  error={form.formState.errors.blood_group}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={4}
                  label="Gender"
                  error={form.formState.errors.gender}
                  required={true}
                />
              )}
            />
          </div>
        </FormCategoryContainer>

        {/* Social Details */}

        <FormCategoryContainer label="Social Information">
          <div className="grid-formatter">
            <NormalInput
              label="Adhaar Number"
              placeholder="Enter candidate's Adhaar Number"
              type="number"
              {...form.register("aadhaar_number")}
              error={form.formState.errors.aadhaar_number}
              required={true}
            />
            <FormField
              control={form.control}
              name="caste"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={1}
                  label="Caste"
                  error={form.formState.errors.caste}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="domicile"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={6}
                  label="Domicile"
                  error={form.formState.errors.domicile}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="marital_status"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={7}
                  label="Marital status"
                  error={form.formState.errors.marital_status}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={8}
                  label="Nationality"
                  error={form.formState.errors.nationality}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="religion"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={9}
                  label="Religion"
                  error={form.formState.errors.religion}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="bpl"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={10}
                  label="BPL"
                  error={form.formState.errors.religion}
                  required={true}
                />
              )}
            />
            <NormalInput
              label="Annual Family Income"
              placeholder="In rupees"
              type="number"
              {...form.register("family_income")}
              error={form.formState.errors.family_income}
              required={true}
            />
          </div>
        </FormCategoryContainer>

        {/* Disability Details */}

        <FormCategoryContainer label="Disability Information">
          <div className="grid-formatter">
            <FormField
              control={form.control}
              name="disability"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={10}
                  label="Disable"
                  error={form.formState.errors.disability}
                  required={true}
                />
              )}
            />
            {disability === "yes" && (
              <FormField
                control={form.control}
                name="disability_type"
                render={({ field }) => (
                  <SelectInput
                    {...field}
                    select_id={11}
                    label="Disability type"
                    error={form.formState.errors.disability_type}
                    required={disability === "yes" ? true : false}
                  />
                )}
              />
            )}
            {disability === "yes" && (
              <NormalInput
                label="Disability Percentage"
                placeholder="Enter candidate's disability percentage"
                type="number"
                {...form.register("disability_percentage")}
                error={form.formState.errors.disability_percentage}
                required={disability === "yes" ? true : false}
              />
            )}
          </div>
        </FormCategoryContainer>

        {/* //!Qualifying Examination Details */}

        <FormCategoryContainer label="Qualifying Examination Information">
          <div className="grid-formatter">
            <FormField
              control={form.control}
              name="result_status"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={12}
                  label="Result Status"
                  error={form.formState.errors.result_status}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="board"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={3}
                  label="Board"
                  error={form.formState.errors.board}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="stream"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={13}
                  label="Stream"
                  error={form.formState.errors.stream}
                  required={true}
                />
              )}
            />
            <NormalInput
              label="10+2 Pass Year"
              placeholder="Between 2020 and 2024"
              type="number"
              {...form.register("year_of_passing")}
              error={form.formState.errors.year_of_passing}
              required={true}
            />
            <NormalInput
              label="10+2 Registration Number"
              placeholder="Enter candidate's 10+2 Reg. Number"
              {...form.register("qualifying_exam_registration_number")}
              error={form.formState.errors.qualifying_exam_registration_number}
              required={true}
            />
          </div>
        </FormCategoryContainer>

        {/* Contact Details */}

        <FormCategoryContainer label="Contact Information">
          <div className="grid-formatter">
            <NormalInput
              label="Mobile Number"
              placeholder="Enter candidate's Mobile Number"
              type="number"
              {...form.register("mobile_number")}
              error={form.formState.errors.mobile_number}
              required={true}
            />
            <NormalInput
              label="WhatsApp number"
              placeholder="Enter candidate's whatsapp number"
              type="number"
              {...form.register("whatsapp_number")}
              error={form.formState.errors.whatsapp_number}
              required={false}
            />
            <NormalInput
              label="Email"
              placeholder="Enter candidate's email"
              type="email"
              {...form.register("email")}
              {...form.register("email")}
              required={true}
            />
          </div>
        </FormCategoryContainer>
        <FormCategoryContainer label="Select Course" gridLayout={true}>
          <FormField
            control={form.control}
            name="shift"
            render={({ field }) => (
              <SelectInput
                {...field}
                select_id={19}
                label="Shift"
                error={form.formState.errors.shift}
                required={true}
              />
            )}
          />
          <FormField
            control={form.control}
            name="stream"
            render={({ field }) => (
              <SelectInput
                {...field}
                select_id={22}
                label="Stream"
                error={form.formState.errors.stream}
                required={true}
              />
            )}
          />
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <SelectInput
                {...field}
                select_id={
                  stream === "ba_general" || stream === "ba_honors"
                    ? 5
                    : stream === "bsc_general" || stream === "bsc_honors"
                    ? 20
                    : stream === "bba" || stream === "bcom"
                    ? 21
                    : 0
                }
                label="Major"
                error={form.formState.errors.major}
                required={true}
              />
            )}
          />
          <FormField
            control={form.control}
            name="minor_1"
            render={({ field }) => (
              <SelectInput
                {...field}
                select_id={
                  stream === "ba_general" || stream === "ba_honors"
                    ? 5
                    : stream === "bsc_general" || stream === "bsc_honors"
                    ? 20
                    : stream === "bba" || stream === "bcom"
                    ? 21
                    : 0
                }
                label="Minor 1"
                error={form.formState.errors.minor_1}
                required={true}
              />
            )}
          />
          <FormField
            control={form.control}
            name="minor_2"
            render={({ field }) => (
              <SelectInput
                {...field}
                select_id={
                  stream === "ba_general" || stream === "ba_honors"
                    ? 5
                    : stream === "bsc_general" || stream === "bsc_honors"
                    ? 20
                    : stream === "bba" || stream === "bcom"
                    ? 21
                    : 0
                }
                label="Minor 2"
                error={form.formState.errors.minor_2}
                required={true}
              />
            )}
          />
        </FormCategoryContainer>
        <FormCategoryContainer label="Other Personal Details">
          <div className="grid-formatter">
            <FormField
              control={form.control}
              name="mother_tongue"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={14}
                  label="Mother tongue"
                  error={form.formState.errors.mother_tongue}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="first_generation_learner"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={10}
                  label="First Generation Learner"
                  error={form.formState.errors.first_generation_learner}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="sports_representation"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={10}
                  label="Sports representation"
                  error={form.formState.errors.sports_representation}
                  required={true}
                />
              )}
            />
            {sportsRepresentation === "yes" && (
              <FormField
                control={form.control}
                name="sports_level"
                render={({ field }) => (
                  <SelectInput
                    {...field}
                    select_id={15}
                    label="Sports representation level"
                    error={form.formState.errors.sports_level}
                    required={sportsRepresentation === "yes" ? true : false}
                  />
                )}
              />
            )}
            {sportsRepresentation === "yes" && (
              <NormalInput
                label="Sports name"
                error={form.formState.errors.sports_name}
                placeholder="Sports name"
                {...form.register("sports_name")}
                required={sportsRepresentation === "yes" ? true : false}
              />
            )}
          </div>
          <Separator className="w-full my-5" />
          <div className="grid-formatter">
            <NormalInput
              label="University registration number(If registered)"
              error={form.formState.errors.university_registration_number}
              placeholder="If already registered"
              {...form.register("university_registration_number")}
            />
          </div>
          <Separator className="w-full my-5" />
          <div className="grid-formatter">
            <NormalInput
              label="Banglar Sikha ID"
              error={form.formState.errors.banglar_sikkha_id}
              placeholder="Banglar Sikha ID"
              {...form.register("banglar_sikkha_id")}
            />
            <FormField
              control={form.control}
              name="banglar_sikkha_portal_registed"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={10}
                  label="Banglar Sikha Portal registered"
                  error={form.formState.errors.banglar_sikkha_portal_registed}
                  required={true}
                />
              )}
            />
          </div>
        </FormCategoryContainer>

        {/* //!Gurdian Details */}

        <FormCategoryContainer label="Gurdian Details">
          <div className="grid-formatter">
            <NormalInput
              label="Father's name"
              error={form.formState.errors.father_name}
              placeholder="Father's name"
              {...form.register("father_name")}
              required={true}
            />
            <FormField
              control={form.control}
              name="father_qualification"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={16}
                  label="Father's Education Qualification"
                  error={form.formState.errors.father_qualification}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="father_occupation"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={18}
                  label="Father's Occupation"
                  error={form.formState.errors.father_occupation}
                  required={true}
                />
              )}
            />
            <NormalInput
              label="Father's mobile number"
              error={form.formState.errors.father_mobile_number}
              placeholder="Mobile number"
              {...form.register("father_mobile_number")}
              required={false}
            />
          </div>

          <Separator className="w-full my-5" />

          <div className="grid-formatter">
            <NormalInput
              label="Mother's name"
              error={form.formState.errors.mother_name}
              placeholder="Mother's name"
              {...form.register("mother_name")}
              required={true}
            />
            <FormField
              control={form.control}
              name="mother_qualification"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={16}
                  label="Mother's Education Qualification"
                  error={form.formState.errors.mother_qualification}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="mother_occupation"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={18}
                  label="Mother's Occupation"
                  error={form.formState.errors.mother_occupation}
                  required={true}
                />
              )}
            />
            <NormalInput
              label="Mother's mobile number"
              error={form.formState.errors.mother_mobile_number}
              placeholder="Mobile number"
              {...form.register("mother_mobile_number")}
              required={false}
            />
          </div>

          <Separator className="w-full my-5" />

          {/* //!Radio Group */}

          {/* <RadioGroup
            defaultValue="none"
            className="w-full flex gap-5 justify-center my-3 mb-5"
          >
            <div className="flex gap-1 items-center">
              <RadioGroupItem
                value="father"
                onClick={() => setGurdian("father")}
              />
              <Label>Same as Father</Label>
            </div>
            <div className="flex gap-1 items-center">
              <RadioGroupItem
                value="mother"
                onClick={() => setGurdian("mother")}
              />
              <Label>Same as Mother</Label>
            </div>
            <div className="flex gap-1 items-center">
              <RadioGroupItem value="none" onClick={() => setGurdian("none")} />
              <Label>None</Label>
            </div>
          </RadioGroup> */}

          {/* Gurdian Details */}

          <div className="grid-formatter">
            <NormalInput
              label="Guardian's name"
              error={form.formState.errors.guardian_name}
              placeholder="Guardian's name"
              {...form.register("guardian_name")}
              required={true}
            />
            <FormField
              control={form.control}
              name="guardian_qualification"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={16}
                  label="Guardian's Education Qualification"
                  error={form.formState.errors.guardian_qualification}
                  required={true}
                />
              )}
            />
            <FormField
              control={form.control}
              name="guardian_occupation"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={18}
                  label="Guardian's Occupation"
                  error={form.formState.errors.guardian_occupation}
                  required={true}
                />
              )}
            />
            <NormalInput
              label="Guardian's mobile number"
              error={form.formState.errors.guardian_mobile_number}
              placeholder="Mobile number"
              {...form.register("guardian_mobile_number")}
              required={false}
            />
          </div>

          <Separator className="w-full my-5" />
          <div className="grid-formatter">
            <NormalInput
              label="Nearest Police Station"
              error={form.formState.errors.nearest_station}
              placeholder="Nearest Station"
              {...form.register("nearest_station")}
              required={true}
            />
            <NormalInput
              label="Family member count"
              error={form.formState.errors.family_member_count}
              placeholder="Family member count"
              {...form.register("family_member_count")}
              required={true}
            />
          </div>
        </FormCategoryContainer>

        {/* //!Last Examination Details! */}

        {/* <LastExaminationDetails /> */}

        {/* //!Institution Details */}

        <FormCategoryContainer label="Institution Details">
          <div className="grid-formatter">
            <NormalInput
              label="Institution Name"
              error={form.formState.errors.institution_name}
              placeholder="Institution name"
              {...form.register("institution_name")}
              required={true}
            />
            <NormalInput
              label="Institution Address"
              error={form.formState.errors.institution_address}
              placeholder="Institution Address"
              {...form.register("institution_address")}
              required={true}
            />
            <NormalInput
              label="Institution District"
              error={form.formState.errors.institution_district}
              placeholder="Institution district"
              {...form.register("institution_district")}
              required={true}
            />
            <NormalInput
              label="Institution State"
              error={form.formState.errors.institution_state}
              placeholder="Institution state"
              {...form.register("institution_state")}
              required={true}
            />
            <NormalInput
              label="Institution Country"
              error={form.formState.errors.institution_country}
              placeholder="Institution country"
              {...form.register("institution_country")}
              required={true}
            />
            <NormalInput
              label="Institution Pincode"
              error={form.formState.errors.institution_pincode}
              placeholder="Institution pincode"
              {...form.register("institution_pincode")}
              type="number"
              required={true}
            />

            <FormField
              control={form.control}
              name="institution_medium"
              render={({ field }) => (
                <SelectInput
                  {...field}
                  select_id={17}
                  label="Institution medium"
                  error={form.formState.errors.institution_medium}
                  required={true}
                />
              )}
            />
          </div>
        </FormCategoryContainer>
        <div className="w-full flex justify-end">
          <Button type="submit" className="w-fit right-2">
            Next <LucideArrowRight className="h-5" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
