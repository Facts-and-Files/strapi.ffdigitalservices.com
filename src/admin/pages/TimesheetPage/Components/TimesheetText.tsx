import React, { useCallback } from "react";
import { Field } from '@strapi/design-system';

interface TimesheetTextProps {
    label: string,
    value: string,
    onChange: ( value: string ) => void
};

const TimesheetText: React.FC< TimesheetTextProps > = React.memo( 
    ( { label, value, onChange } ) => {

        const handleChange = useCallback(
            ( e: React.ChangeEvent< HTMLInputElement > ) => {
                onChange( e.target.value );
            },
            [ onChange ]
        );

        return (
            <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
                <Field.Label>{ label }</Field.Label>
                <Field.Input
                    type="text"
                    value={ value }
                    onChange={ handleChange }
                />
            </Field.Root>
        )
    }
);

export default TimesheetText;        