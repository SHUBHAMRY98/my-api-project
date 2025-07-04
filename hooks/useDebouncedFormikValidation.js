import { useRef, useCallback } from "react";

/**
 * useDebouncedFormikValidation
 * @param {Yup.ObjectSchema} schema - Yup validation schema
 * @param {number} delay - debounce delay in milliseconds (default: 300ms)
 * @returns {Function} - debounced validate function to use in Formik
 */
function useDebouncedFormikValidation(schema, delay = 300) {
  const timeoutRef = useRef(null);

  const validate = useCallback(
    (values) => {
      return new Promise((resolve) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(async () => {
          try {
            await schema.validate(values, { abortEarly: false });
            resolve({});
          } catch (err) {
            const errors = {};
            if (err.inner) {
              err.inner.forEach((e) => {
                if (e.path) {
                  errors[e.path] = e.message;
                }
              });
            }
            resolve(errors);
          }
        }, delay);
      });
    },
    [schema, delay]
  );

  return validate;
}

export default useDebouncedFormikValidation;
