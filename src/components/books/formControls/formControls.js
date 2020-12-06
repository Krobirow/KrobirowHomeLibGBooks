import React from 'react';
import { Field } from 'redux-form';
import "./formControls.scss";

export const FormControl = ({ input, meta: {touched, error}, children, ...props}) => {
	const hasError = touched && error;
	return (
        <>
            <div className={"position-relative formControl my-1 d-flex flex-column " + (hasError ? "error" : "")}>
            {hasError && <span className="error-message position-absolute text-danger">{error}</span>}
                {children}
            </div>
        </>
	);
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
	return (
		<FormControl {...props}>
			{" "}
			<input {...input} {...restProps} />
		</FormControl>
	);
};

export const createField = (type, placeholder, name, validators, component, className, value, valueSender) => (
	<>
		<Field
			type={type}
			placeholder={placeholder}
			name={name}
			component={component}
			validate={validators}
            className={className}
            value={value}
			onChange={(e) => {valueSender(e)}}
		/>
	</>
);