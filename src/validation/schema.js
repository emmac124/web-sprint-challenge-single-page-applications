import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('Name is required for order')
    .min(2, 'Name must be 2 characters long'),
    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xl'], 'Size is required'),
    pepperoni: yup.boolean(),
    feta: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
    spinach: yup.boolean(),
    special: yup
    .string()
    .required('This section is required, if no special instructions type n/a')
})
