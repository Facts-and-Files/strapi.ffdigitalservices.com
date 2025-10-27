import React, { useState, useCallback } from "react";
import { useFetchClient } from "@strapi/strapi/admin";
import { Box, Button } from '@strapi/design-system';
import TimesheetDate from "./TimesheetDate";
import TimesheetTime from "./TimesheetTime";
import TimesheetComment from "./TimesheetComment";
import TimesheetText from "./TimesheetText";
import TimesheetCombobox from "./TimesheetCombobox";

const EntryForm = ( () => {
    const { post } = useFetchClient();
    const [ date, setDate ] = useState< string >( '' );
    const [ comment, setComment ] = useState< string >( '' );
    const [ startTime, setStartTime ] = useState< string >( '' );
    const [ endTime, setEndTime ] = useState< string >( '' );
    const [ name, setName ] = useState< string >( '' );
    const [ project, setProject ] = useState< string >( '' );

    console.log( 'render entry form ');

    const handleDateChange = useCallback( ( value: string ) => {
        setDate( value );
    }, [] );

    const handleCommentChange = useCallback( ( comment: string ) => {
        setComment( comment );
    }, [] );

    const handleStartTimeChange = useCallback( ( time: string ) => {
        setStartTime( time );
    }, [] );

    const handleEndTimeChange = useCallback( ( time: string ) => {
        setEndTime( time );
    }, [] );

    const handleNameChange = useCallback( ( name: string ) => {
        setName( name );
    }, [] );

    const handleProjectChange = useCallback( ( project: string ) => {
        setProject( project );
    }, [] );

    const handleFormSubmit = async ( e: React.FormEvent< HTMLFormElement > ) => {
        e.preventDefault();

        const data = {
            "name": name,
            "date": date,
            "startTime": startTime,
            "endTime": endTime,
            "project": project,
            "comment": comment
        };

        console.log( data );

        const res = await post( 'content-manager/collection-types/api::timesheet.timesheet',{
            "name": name,
            "comment": comment,
            "date": date,
            "project": project,
            "startTime": startTime,
            "endTime": endTime,
        });

        console.log( res );

        return
    }


    return (
        <Box padding={ 4 }>
            <form onSubmit={ handleFormSubmit } >
                <TimesheetText
                    label="Name:"
                    value={ name }
                    onChange={ handleNameChange}
                />
                <TimesheetCombobox value={ project } onChange={ handleProjectChange} />
                <TimesheetDate
                    name="timesheet-date"
                    value={ date }
                    onChange={ handleDateChange }
                />
                <TimesheetTime
                    label="Start Time:"
                    value={ startTime }
                    onChange={ handleStartTimeChange }
                />
                <TimesheetTime
                    label="End Time:"
                    value={ endTime }
                    onChange={ handleEndTimeChange }
                />
                <TimesheetComment
                    value={ comment }
                    onChange={ handleCommentChange }
                />
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    )
    
} );

export default EntryForm;