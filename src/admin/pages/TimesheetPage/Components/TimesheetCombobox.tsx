import React, { useCallback } from "react";
import { Combobox, Field } from '@strapi/design-system';

interface TimesheetComboboxProps {
    value: string,
    onChange: ( value: string ) => void
};

const TimesheetCombobox: React.FC< TimesheetComboboxProps > = React.memo( 
    ( { value, onChange } ) => {

        const handleChange = useCallback(
            ( e: React.ChangeEvent< HTMLInputElement > ) => {
                onChange( e.target.value );
            },
            [ onChange ]
        );

        return (
            <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
                <Field.Label>Project:</Field.Label>
                <Combobox
                    value={ value }
                    onChange={ onChange }
                >
                    <option value="">- Please Select Project</option>
                </Combobox>
            </Field.Root>
        )
    }
);

export default TimesheetCombobox;        