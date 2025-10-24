import React, { useCallback, useEffect, useState } from "react";
import { Combobox, ComboboxOption, Field } from '@strapi/design-system';

interface TimesheetComboboxProps {
    value: string,
    onChange: ( value: string ) => void
};

interface Project {
    id: number,
    title: string
}

const TimesheetCombobox: React.FC< TimesheetComboboxProps > = React.memo( 
    ( { value, onChange } ) => {

        const [ allProjects, setAllProjects ] = useState< any | null>( null );

        useEffect( () => {
            console.log( 'fetching projects' );
            const fetchData = async () => {
                try {

                    const req = await fetch( '/api/project-posts' );
                    if ( ! req.ok ) {
                        throw new Error( `HTTP error! status: ${req.status}` )
                    }
                    const res = await req.json();
                    
                    setAllProjects( res.data );

                } catch ( error ) {
                    console.log( `Error fetching data: ${ error }`);
                }
            };

            fetchData();
        }, [] );

        const handleChange = useCallback(
            ( value: string ) => {
                onChange( value );
            },
            [ onChange ]
        );

        return (
            <Field.Root paddingTop={ 4 } paddingBottom={ 4 }>
                <Field.Label>Project:</Field.Label>
                <Combobox
                    value={ value }
                    onChange={ handleChange }
                >
                    <ComboboxOption value="">
                        - Please Select Project
                    </ComboboxOption>
                    { allProjects?.map( ( project: Project ) => (
                        <ComboboxOption key={ project.id } value={ project.title }>
                            { project.title }
                        </ComboboxOption>
                    ) ) }
                </Combobox>
            </Field.Root>
        )
    }
);

export default TimesheetCombobox;        