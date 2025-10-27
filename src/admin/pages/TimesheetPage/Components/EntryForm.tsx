import React, { useState, useCallback } from "react";
import { useFetchClient } from "@strapi/strapi/admin";
import { Box, Button, Flex, Loader } from '@strapi/design-system';
import TimesheetDate from "./TimesheetDate";
import TimesheetTime from "./TimesheetTime";
import TimesheetComment from "./TimesheetComment";
import TimesheetText from "./TimesheetText";
import TimesheetCombobox from "./TimesheetCombobox";

const EntryForm = ( () => {
    const { get, post } = useFetchClient();

    const [ loading, setLoading] = useState< boolean >( false );
    const [ date, setDate ] = useState< string >( '' );
    const [ comment, setComment ] = useState< string >( '' );
    const [ startTime, setStartTime ] = useState< string >( '08:00' );
    const [ endTime, setEndTime ] = useState< string >( '17:00' );
    const [ name, setName ] = useState< string >( '' );
    const [ project, setProject ] = useState< string >( '' );

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

    const resetForm = () => {
        setComment( '' );
        setDate( '' );
        setStartTime( '08:00' );
        setEndTime( '17:00' );
        setName( '' );
        setProject( '' );
    }

    const handleFormSubmit = async ( e: React.FormEvent< HTMLFormElement > ) => {
        e.preventDefault();

        setLoading( true );

        const userReq = await get( '/admin/users/me' );
        const user = userReq?.data;

        console.log( user );

        if ( ! user || ! user.data ) {
            return;
        }

        const res = await post( 'content-manager/collection-types/api::timesheet.timesheet',{
            "name": name,
            "comment": comment,
            "date": date,
            "project": project,
            "startTime": `${ startTime }:00.000`,
            "endTime": `${ endTime }:00.000`,
            "user": { "id": Number( user.data.id ) }
        });

        setLoading( false );

        console.log( res );

        resetForm();

        return
    }

    if (loading) {
        return (
            <Loader style={{ display: 'flex', justifyContent: 'center' }}>
                Loading data...
            </Loader>
        );
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