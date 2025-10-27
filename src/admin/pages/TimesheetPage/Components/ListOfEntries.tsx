import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Accordion,
    IconButton,
    Button,
    Loader
} from '@strapi/design-system';
import { Trash } from '@strapi/icons';
import { useFetchClient } from "@strapi/strapi/admin";
import TimesheetText from "./TimesheetText";
import TimesheetCombobox from "./TimesheetCombobox";
import TimesheetComment from "./TimesheetComment";
import TimesheetDate from "./TimesheetDate";
import TimesheetTime from "./TimesheetTime";

interface User {
    id: number,
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    isActive: boolean
};

interface Entry {
    id: number,
    documentId: string,
    comment: string,
    createdAt: string,
    date: string,
    startTime: string,
    endTime: string,
    name: string,
    project: string,
    user: User
};

const ListOfEntries = ( () => {
    const { get, put, del } = useFetchClient();
    const [ entries, setEntries ] = useState< Entry[] >( [] );
    const [ loading, setLoading] = useState< boolean >( false );

    const normalizeTimeVal = ( time: string ) => {
        let timeArr = time.split( ':' );
        let times = `${ timeArr[ 0 ] }:${ timeArr[ 1 ] }`;
        console.log( times );
        return times;
    }

    const fetchData = async () => {
        const response = await get( 'content-manager/collection-types/api::timesheet.timesheet' );
        if ( response && response.data ) {
            const formatted = response.data.results.map( ( entry: Entry ) => ( {
                ...entry,
                startTime: normalizeTimeVal( entry.startTime ),
                endTime: normalizeTimeVal( entry.endTime )
            } ) )
            setEntries( formatted )
            console.log( response.data );
        }
    }

    useEffect( () => {
        const fetchEntries = async () => {
            await fetchData();
        }

        fetchEntries();
    }, [] );

    const handleChange = ( id: number, fieldName: string, value: string ) => {
        setEntries( prevEntries =>
            prevEntries.map( entry => 
                entry.id === id ? { ...entry, [fieldName]: value } : entry
            )
        )
    };

    const handleFormSubmit = async ( e: React.FormEvent< HTMLFormElement >, index: number ) => {
        e.preventDefault();
        setLoading( true );

        const entry = entries[ index ];

        console.log( entry.startTime );

        const res = await put( `content-manager/collection-types/api::timesheet.timesheet/${ entry.documentId }`,{
            "name": entry.name,
            "comment": entry.comment,
            "date": entry.date,
            "project": entry.project,
            "startTime": `${ entry.startTime }:00.000`,
            "endTime": `${ entry.endTime }:00.000`,
            "user": { "id": Number( entry.user.id ) }
        });

        console.log( res );
        setLoading( false );
        return null;
    }

    const handleDelete = async ( id: string ) => {
        setLoading( true );
        const delReq = await del(
            `content-manager/collection-types/api::timesheet.timesheet/${ id }`
        );

        await fetchData();

        setLoading( false );
        console.log( delReq );
        return;
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
            <Typography>Timesheet: </Typography>
            <Accordion.Root>
            { entries?.map( ( entry: Entry, index: number ) => (
                <Accordion.Item value={ `${ entry.id }` } key={ entry.id }>
                    <Accordion.Header>
                        <Accordion.Trigger description="Show Entry">
                            { entry.name }
                        </Accordion.Trigger>
                        <Accordion.Actions>
                            <IconButton
                                label="Delete record"
                                aria-label="Delete record"
                                onClick={ () => handleDelete( entry.documentId ) }
                            >
                                <Trash />
                            </IconButton>
                        </Accordion.Actions>
                    </Accordion.Header>
                    <Accordion.Content>
                        <Box padding={ 4 }>
                            <form onSubmit={ ( e ) => handleFormSubmit( e, index ) } >
                                <TimesheetText
                                    label="Name:"
                                    value={ entry.name }
                                    onChange={ ( val ) => { handleChange( entry.id, 'name', val ) } }
                                />
                                <TimesheetCombobox
                                    value={ entry.project }
                                    onChange={ ( val ) => { handleChange( entry.id, 'project', val ) } }
                                />
                                <TimesheetDate
                                    name="timesheet-date"
                                    value={ entry.date }
                                    onChange={ ( val ) => { handleChange( entry.id, 'date', val ) } }
                                />
                                <TimesheetTime
                                    label="Start Time:"
                                    value={ entry.startTime }
                                    onChange={ ( val ) => { handleChange( entry.id, 'startTime', val ) } }
                                />
                                <TimesheetTime
                                    label="End Time:"
                                    value={ entry.endTime }
                                    onChange={ ( val ) => { handleChange( entry.id, 'endTime', val ) } }
                                />
                                <TimesheetComment
                                    value={ entry.comment }
                                    onChange={ ( val ) => { handleChange( entry.id, 'comment', val ) } }
                                />
                                <Button type="submit">Update</Button>
                            </form>
                        </Box>
                    </Accordion.Content>
                </Accordion.Item>
            ) ) }
            </Accordion.Root>
        </Box>
    )
    
} );

export default ListOfEntries;