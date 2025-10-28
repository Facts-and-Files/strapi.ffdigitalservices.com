import React, { useCallback, useState } from "react";
import { Layouts } from '@strapi/admin/strapi-admin';
import {
    Box,
    Button,
    Tabs,
    Typography,
} from '@strapi/design-system';
import EntryForm from "./Components/EntryForm";
import ListOfEntries from "./Components/ListOfEntries";

const TimesheetPage: React.FC = () => {

    console.log( 'render' );

    const [ date, setDate ] = useState<Date | undefined>( undefined );
    const [ startTime, setStartTime ] = useState< string >( '09:00' );
    const [ endTime, setEndTime ] = useState< string >( '18:00' );
    const [ comment, setComment ] = useState< string >( '' );

    const onDateChange = useCallback(
        ( d?: Date ) => setDate(d),
        [setDate]
    );

    const onDateClear = useCallback(
        ( d?: Date ) => setDate( undefined ),
        [setDate]
    );

    const onStartTimeChange = useCallback(
        ( t: string ) => setStartTime( t ),
        [setStartTime]
    );

    const onEndTimeChange = useCallback(
        ( t: string ) => setEndTime( t ),
        [setEndTime]
    );

    const handleCommentChange = useCallback( ( e: React.ChangeEvent<HTMLInputElement>) => {
        if ( e ) {
            setComment( e.target.value || '' )
        }
    }, [setComment] );


    return (
    <Layouts.Root>
        <Layouts.Header
            title="Timesheet Page"
            subtitle="Work Hours Managment"
        />
      
        <Box padding={8}>
            <Box 
                background="neutral0" 
                hasRadius 
                shadow="tableShadow"
                padding={6}
            >
                <Tabs.Root defaultValue="newEntry">
                    <Tabs.List aria-label="Manage Views">
                        <Tabs.Trigger value="newEntry">New Entry</Tabs.Trigger>
                        <Tabs.Trigger value="allEntries">All Entries</Tabs.Trigger>
                    </Tabs.List>
                    
                    <Tabs.Content value="newEntry">
                        <Box
                            padding={ 4 }
                            marginTop={ {
                                initial: 1,
                                medium: 3,
                                large: 5
                            } }
                        >
                            <Typography tag="h2" variant="beta">Add new Entry</Typography>
                            <EntryForm
                                date={ date }
                                startTime={ startTime }
                                setStartTime={ onStartTimeChange }
                                endTime={ endTime }
                                setEndTime={ onEndTimeChange }
                                comment={ comment }
                                handleCommentChange={ handleCommentChange }
                                onDateChange={ onDateChange }
                                onDateClear={ onDateClear }
                            />
                        </Box>
                    </Tabs.Content>

                    <Tabs.Content value="allEntries">
                        <Box padding={4}>
                            <Typography tag="p">All Entries</Typography>
                            <ListOfEntries />
                        </Box>
                    </Tabs.Content>

                </Tabs.Root>
            </Box>
        </Box>
    </Layouts.Root>
  );
};

export default TimesheetPage;