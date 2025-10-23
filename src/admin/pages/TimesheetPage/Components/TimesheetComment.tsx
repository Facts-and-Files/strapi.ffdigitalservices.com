import React, { useCallback } from "react";
import { Field } from '@strapi/design-system';

interface TimesheetCommentProps {
    value: string,
    onChange: ( value: string ) => void
};

const TimesheetComment: React.FC<TimesheetCommentProps> = React.memo( ( { value, onChange } ) => {

    const handleChange = useCallback( ( e: React.ChangeEvent<HTMLInputElement> ) => {
        onChange( e.target.value );
    }, [ onChange ] );

    return (
        <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
            <Field.Label>Comment:</Field.Label>
            <Field.Input type="text" value={ value } onChange={ handleChange } />
        </Field.Root>
    )

} );

export default TimesheetComment;        