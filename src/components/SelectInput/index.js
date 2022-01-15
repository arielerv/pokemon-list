import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { getIn, useFormikContext } from 'formik';
import mapKeys from 'lodash/mapKeys';

import { optionPropTypes } from 'utils/propTypes';

const SelectInput = ({
    options,
    label,
    name,
    onChange,
    value,
    placeholder,
    getOptionValue,
    getOptionLabel,
    isRequired,
    saveName,
    onBlur,
    isDisabled,
    noFormik,
    ...props
}) => {
    const formik = noFormik ? {} : useFormikContext();
    const selectedValue = value || (name && !noFormik && getIn(formik.values, name));
    const indexed = mapKeys(options, (option) => getOptionValue(option));
    const valueToArray = Array.isArray(selectedValue) ? selectedValue : [selectedValue].filter(Boolean);
    const selectedOptions = valueToArray.map((option) => indexed[option] || { value: option, label: option })
        .filter(Boolean);

    const handleChange = (newValue) => {
        const valueOptions = Array.isArray(newValue)
            ? newValue.map((option) => getOptionValue(option))
            : getOptionValue(newValue);
        if (noFormik && onChange) {
            return onChange({ target: { id: name, value: valueOptions } });
        }
        if (saveName) {
            formik.setFieldValue(`${name}Name`, newValue.label);
        }
        if (Array.isArray(newValue) ? newValue?.length : newValue) {
            formik.setFieldTouched(name);
        }
        return onChange
            ? onChange({ target: { id: name, value: valueOptions } })
            : formik.handleChange({ target: { id: name, value: valueOptions } });
    };

    return (
        <FormControl
            id={name}
            mb={5}
            size={4}
            disabled={isDisabled}
            isRequired={isRequired}
        >
            {label && <FormLabel fontSize={14} htmlFor={name}>{label}</FormLabel>}
            <Select
                name={name}
                inputId={name}
                options={options}
                placeholder={placeholder}
                onChange={handleChange}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                value={selectedOptions}
                onBlur={() => onBlur && onBlur({ target: { id: name, value: selectedValue } })}
                isClearable
                isDisabled={isDisabled}
                {...props}
            />
        </FormControl>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(optionPropTypes),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    isDisabled: PropTypes.bool,
    noFormik: PropTypes.bool,
    isRequired: PropTypes.bool,
    saveName: PropTypes.bool,
    getOptionLabel: PropTypes.func,
    getOptionValue: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};

SelectInput.defaultProps = {
    options: [],
    placeholder: '',
    value: null,
    onBlur: undefined,
    onChange: undefined,
    label: undefined,
    isDisabled: false,
    noFormik: false,
    saveName: undefined,
    isRequired: undefined,
    getOptionLabel: (option) => option?.label,
    getOptionValue: (option) => option?.value,
};

export default SelectInput;
