import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required!')
    .min(2, 'name must be at least 2 characters'),

    size: yup
    .string(),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    cheese: yup.boolean(),

    special: yup
    .string()
    .trim()

})




export default formSchema;