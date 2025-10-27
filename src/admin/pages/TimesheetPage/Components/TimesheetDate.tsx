import React, { useCallback } from "react";
import { Field, useTheme } from '@strapi/design-system';

interface TimesheetDateProps {
    name?: string,
    value: string,
    onChange: ( name: string, value?: Date ) => void
};

const dateInpStyle = {
    width: '100%',
    padding: '8px 12px',           // same as theme.spaces[3,4]
    border: '1px solid #dcdce4',   // neutral200
    borderRadius: '4px',
    backgroundColor: '#ffffff',    // neutral0
    color: '#32324d',              // neutral800
    fontSize: '14px',              // fontSizes[2]
    lineHeight: '1.5',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
}

const TimesheetDate: React.FC< TimesheetDateProps > = React.memo(
    ( { name, value, onChange } ) => {

        const handleChange = useCallback( ( e: React.ChangeEvent< HTMLInputElement > ) => {
            console.log( e.target.value );
            onChange( e.target.value );
        }, [ name, onChange ] );

        const handleClear = useCallback( () => {
            onChange( '' );
        }, [ name, onChange ] );

        return (
            <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
                <Field.Label>Date:</Field.Label>
                <input
                    type="date"
                    value={ value }
                    onChange={ handleChange }
                    style={ dateInpStyle }
                    onFocus={(e) => {
                        if (typeof e.target.showPicker === 'function') {
                            e.target.showPicker();
                        }
                        e.target.style.borderColor = '#4945ff'; // primary600
                        e.target.style.boxShadow = '0 0 0 2px #e0e0ff'; // primary100
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '#dcdce4';
                        e.target.style.boxShadow = 'none';
                    }}
                />
            </Field.Root>
        )
    }
);

export default TimesheetDate;        
