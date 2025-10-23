import React, { useCallback } from "react";
import { Field, Textarea } from '@strapi/design-system';

interface TimesheetCommentProps {
    value: string,
    onChange: ( value: string ) => void
};

const TimesheetComment: React.FC< TimesheetCommentProps > = React.memo( 
    ( { value, onChange } ) => {

        const handleChange = useCallback(
            ( e: React.ChangeEvent< HTMLTextAreaElement > ) => {
                onChange( e.target.value );
            },
            [ onChange ]
        );

        return (
            <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
                <Field.Label>Comment:</Field.Label>
                <Textarea
                    value={ value }
                    onChange={ handleChange }
                />
            </Field.Root>
        )
    }
);

export default TimesheetComment;        