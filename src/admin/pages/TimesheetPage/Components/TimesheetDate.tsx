import React, { useCallback } from "react";
import { Field, DatePicker } from '@strapi/design-system';

interface TimesheetDateProps {
    name: string,
    value?: Date,
    onChange: ( name: string, value?: Date ) => void
};

const TimesheetDate: React.FC<TimesheetDateProps> = React.memo( ( { name, value, onChange } ) => {

    const handleChange = useCallback( ( d?: Date ) => {
        onChange( name ,d );
    }, [ name, onChange ] );

    const handleClear = useCallback( () => {
        onChange( name, undefined );
    }, [ name, onChange ] );

    return (
        <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
            <Field.Label>Date:</Field.Label>
            <DatePicker
                value={ value }
                onChange={ handleChange }
                onClear={ handleClear }
                locale="de-DE"
                size="M"
            />
        </Field.Root>
    )
} );

export default TimesheetDate;        
