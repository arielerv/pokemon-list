import { getIn } from 'formik';

const getError = (name, { touched, errors, status }) => {
    const fieldTouched = getIn(touched, name);
    const backendError = getIn(status, name);
    const clientError = getIn(errors, name);
    if (clientError && fieldTouched) {
        return clientError;
    }
    if (backendError && !fieldTouched) {
        return backendError;
    }
    return undefined;
};

export default getError;
