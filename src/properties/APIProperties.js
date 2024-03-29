export const api_properties =
  {
    "API_LOGIN" : "/api/v1/user/login/email",
    "API_REGISTER" : "/api/v1/user/email",
    "API_ADD_ROLES" : "/api/v1/user/role",
    "API_GET_USER_ROLES_USER_ID":"/api/v1/user/role/user_id",
    "API_GET_USER_ROLES" : "/api/v1/user/role",
    "API_CHANGE_PASSWORD" : "/api/v1/user/change/password",
    "API_ACTIVATE_USER" :"/api/v1/user/activate",
    "API_INACTIVATE_USER" :"/api/v1/user/inactivate",
    "API_GET_USER_PERSONAL_DETAILS": "/api/v1/users/personal_details/gts_user_id",
    "API_GET_RECOMMENDED_SERVICES" : "/api/v1/gts_user_recommended_job/gts_user_id" ,
    "API_GET_SC_COMPANY_DETAILS" : "/api/v1/employer_company_detail/employer_id" ,
    "API_SC_COMPANY_DETAILS" :"/api/v1/employer_company_detail",
    "API_GET_USER_LANGUAGES": "/api/v1/user/languages/gts_user_id",
    "API_USER_LANGUAGES" : "/api/v1/user/languages" ,
    "API_DELETE_USER_LANGUAGES": "/api/v1/user/languages/gts_user_language_id",
    "API_GET_ACTIVE_SKILLS" : "/api/v1/skills/active",
    "API_UPDATE_PRIMARY_CONTACT":"/api/v1/user/primary_contact/update",
    "API_GENERATE_OTP_PRIMARY_CONTACT":"/api/v1/user/primary_contact/generate_otp",
    "API_VALIDATE_PRIMARY_CONATCT":"/api/v1/user/validate_primary_contact",
    "API_GET_USER": "/api/v1/user/user_id",
    "API_GET_USER_PERSONAL_DETAILS": "/api/v1/users/personal_details/gts_user_id",
    "API_USER_PERSONAL_DETAILS": "/api/v1/users/personal_details",
    "API_POST_SERVICE_APPLICATIONS": "/api/v1/job/applications",
    "API_GET_ACTIVE_COMPANIES": "/api/v1/company/active",
    "API_GET_ACTIVE_SERVICE_TITLES" : "/api/v1/job/title/active",
    "API_GET_ACTIVE_COUNTRIES" : "/api/v1/countries/active",
    "API_GET_ACTIVE_DEGREES" : "/api/v1/degree/active",
    "API_GET_ACTIVE_CITIES" : "/api/v1/city/active",
    "API_GET_ACTIVE_INSTITUTES" :"/api/v1/institute/active",
    "API_GET_INSTITUTES_BY_CITY": "/api/v1/institute/city-id",
    "API_GET_LANGUAGES_ACTIVE" : "/api/v1/languages/active",
    "API_GET_ACTIVE_CURRENCIES" : "/api/v1/currencies/active",
    "API_GET_CITIES_BY_COUNTRY" : "/api/v1/city/country_id",
    "API_GET_STATES_BY_COUNTRY" : "/api/v1/states/country_id",
    "API_GET_CITIES_BY_STATE" : "/api/v1/city/state_id",
    "API_GET_SERVICE_APPLICATIONS_BY_APPLIED_ID" : "/api/v1/job/applications/applied_job_id",
    "API_GET_SERVICE_APPLICATIONS_BY_APPLICANT_ID" : "/api/v1/job/applications/applicant_id",
    "API_GET_SC_SERVICES_ACTIVE" : "/api/v1/employer/job_post/active/employer_id",
    "API_SC_SERVICES" :"/api/v1/employer/job_post",
    "API_GET_ACTIVE_INDUSTRIES" : "/api/v1/industry/active",
    "API_SEARCH_SC" : "/api/v1/search/service_consumer",
    "API_SEARCH_SERVICES" : "/api/v1/gts_job_search",
    "API_SEARCH_SERVICE_PROVIDER" :"/api/v1/search_service_provider",
    "API_GET_USER_EDUCATIONS" : "/api/v1/users/educations/user_id",
    "API_USER_EDUCATIONS" : "/api/v1/users/educations",
    "API_DELETE_USER_EDUCATIONS": "/api/v1/users/educations/user_education_id",
    "API_GET_SC_REQUIRED_LANGUAGES" : "/api/v1/sc/required/languages/user_id",
    "API_POST_SC_REQUIRED_LANGUAGES" : "/api/v1/sc/required/languages",
    "API_DELETE_SC_REQUIRED_LANGUAGES": "/api/v1/sc/required/languages/sc_required_language_id",
    "API_GET_USER_PROJECTS" : "/api/v1/user/project/user_id",
    "API_USER_PROJECTS" : "/api/v1/user/project",
    "API_DELETE_USER_PROJECTS": "/api/v1/user/project/user_project_id",
    "API_PROFILE_VIEWER":"/api/v1/user/profile/views",
    "API_GET_PROFILE_VIEWER":"/api/v1/user/profile/views/profile_owner_id",
    "API_SEND_RESUME": "/api/v1/user/resume/download/send/current/resume",
    "API_GET_SC_REQUIRED_SKILLS" :"/api/v1/employer/required_skill/employer_id",
    "API_POST_SC_REQUIRED_SKILLS": "/api/v1/employer/required_skill",
    "API_DELETE_SC_REQUIRED_SKILLS": "/api/v1/employer/required_skill/employer_required_skill_id",
    "API_UPDATE_PRIMARY_EMAIL": "/api/v1/user/primary_email/update",
    "API_GENERATE_OTP_PRIMARY_EMAIL": "/api/v1/user/primary_email/generate_otp",
    "API_VALIDATE_PRIMARY_EMAIL": "/api/v1/user/validate_primary_email",
    "API_UPDATE_ALTERNATE_EMAIL":  "/api/v1/users/personal_details/alternate_email/update",
    "API_GENERATE_OTP_ALTERNATE_EMAIL":"/api/v1/users/personal_details/alternate_email/generate_otp",
    "API_VALIDATE_ALTERNATE_EMAIL": "/api/v1/users/personal_details/alternate_email/validate",
    "API_UPDATE_ALTERNATE_CONTACT": "/api/v1/users/personal_details/alternate_mobile_number",
    "API_GENERATE_OTP_ALTERNATE_CONTACT": "/api/v1/users/personal_details/alternate_number/generate_otp",
    "API_VALIDATE_ALTERNATE_CONATCT": "/api/v1/users/personal_details/alternate_number/validate",
    "API_GET_ACTIVE_NATIONALITIES":"/api/v1/nationalities/active",
    "API_USER_PERSONAL_DETAILS": "/api/v1/users/personal_details",
    "API_GET_FIELD_OF_RECRUITMENT":"/api/v1/gts_field_of_recruitment/recruiter_id",
    "API_FIELD_OF_RECRUITMENT":"/api/v1/gts_field_of_recruitment",
    "API_CONTACT_US":"/api/v1/contact_us",
    "API_GET_USER_ADDRESSES" : "/api/v1/user/addresses/user_id",
    "API_USER_ADDRESSES" : "/api/v1/user/addresses",
    "API_GET_USER_WORK_EXP" : "/api/v1/user/work_experience/user_id",
    "API_USER_WORK_EXP": "/api/v1/user/work_experience",
    "API_DELETE_USER_WORK_EXP" :"/api/v1/user/work_experience/user_work_experience_id",
    "API_GET_SC_SERVICES_BY_SERVICE_ID" : "/api/v1/employer/job_post/job_id",
    "API_DELETE_SERVICE_APPLICATION_BY_JOB_APPL_ID": "/api/v1/job/applications/job_application_id",
    "API_GET_SERVICE_APPLICATIONS_BY_SERVICE" : "/api/v1/job/applications/applicant_id/job_title_id",
    "API_GET_SERVICE_APPLICATIONS_BY_SKILL" : "/api/v1/job/applications/applicant_id/job_skill_ids" ,
    "API_USER_RESUME_UPLOAD" : "/api/v1/user/resume/upload/user_id",
    "API_USER_RESUME_DOWNLOAD" : "/api/v1/resume/download/user-id",
    "API_USER_CURRENT_RESUME_DOWNLOAD" : "/api/v1/user/resume/download/current/user-id",
    "API_USER_PREVIOUS_RESUME_DOWNLOAD" : "/api/v1/user/resume/download/previous/user-id",
    "API_USER_CURRENT_RESUME_DELETE" :"/api/v1/user/resume/upload/current/user-resume-id",
    "API_USER_PREVIOUS_RESUME_DELETE": "/api/v1/user/resume/upload/previous/user-resume-id",
    "API_GET_USER_RESUMES" : "/api/v1/user/resume/download/user-id" ,
    "API_GET_USER_SALARY" : "/api/v1/user/salary/user_id",
    "API_USER_SALARY" : "/api/v1/user/salary",
    "API_GET_NOTICE_PERIOD"  :"/api/v1/user/notice_period/user_id",
    "API_NOTICE_PERIOD" : "/api/v1/user/notice_period",
    "API_GET_USER_SKILLS":"/api/v1/user/skill/user_id",
    "API_USER_SKILLS" : "/api/v1/user/skill",
    "API_DELETE_USER_SKILLS" : "/api/v1/user/skill/user_skill_id",
    "API_GET_SERVICE_POST_ACTIVITY" : "/api/v1/job_post_activity/job_employer_id",
    "API_GET_SC_SERVICES_INACTIVE" : "/api/v1/employer/job_post/inactive/employer_id",
    "API_SC_SERVICES_CHANGE_STATUS" : "/api/v1/employer/job_post/change_status",
    "API_GET_TOP_QUALIFIED_SP": "/api/v1/top_qualified_sp/gts_job_id",
    "API_NOTIFY_TOP_QUALIFIED_SP": "/api/v1/top_qualified_sp/notify",
  }