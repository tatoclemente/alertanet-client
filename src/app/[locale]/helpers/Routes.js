
const ROUTES = {
    LANDING_PAGE: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    ADMIN: {
        ADMIN_HOME: '/admin',
        ADMIN_PROFILE: '/admin/profile',
        ADMIN_PATIENTS: '/admin/patients',
        ADMIN_DASHBOARD: '/admin/dashboard',
        ADMIN_DISPATCH: '/admin/dispatch',
        ADMIN_STAFF: '/admin/staff',  
        ADMIN_MANAGER: '/admin/manager',
    },
    OPERATOR: {
        OPERATOR_HOME: '/operator',
        OPERATOR_PROFILE: '/operator/profile',
        OPERATOR_TASK: '/operator/task',
        OPERATOR_TASK_ID: '/operator/task/:id',
    },
    PATIENTS: {
       PATIENT_HOME: '/patient',
       PATIENT_URGENCY: '/patient/urgency',
       PATIENT_EMERGENCY: '/patient/emergency',
       PATIENT_NURSING: '/patient/nursing',
       PATIENT_TRANSFER: '/patient/transfer',
       PATIENT_PROFILE: '/patient/profile',
    }
}

export default ROUTES;