import React, { useState, useEffect } from "react";
import { Box, Typography } from '@strapi/design-system';
import { useFetchClient } from "@strapi/strapi/admin";

const ListOfEntries = ( () => {
    const { get } = useFetchClient();


    useEffect( () => {
        const fetchData = async () => {
            const response = await get( 'content-manager/collection-types/api::timesheet.timesheet' );
            console.log( response ); 
        }

        fetchData();
    }, [] );

    return (
        <Box padding={ 4 }>
            <Typography>Hello</Typography>
        </Box>
    )
    
} );

export default ListOfEntries;