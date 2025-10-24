import React, { useCallback } from "react";
import { Field, TimePicker } from '@strapi/design-system';

interface TimesheetTimeProps {
    label: string,
    value: string,
    onChange: ( value: string ) => void
};

const TimesheetTime : React.FC< TimesheetTimeProps > = React.memo(
    ( { label, value, onChange } ) => {

        const handleChange = useCallback( ( value: string) => {
            onChange( value );
        }, [ onChange ] );
    

        return (
            <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
                <Field.Label>{ label }</Field.Label>
                <TimePicker
                    value={ value }
                    onChange={ handleChange }
                />
            </Field.Root>
        )
    }
);

export default TimesheetTime;        
