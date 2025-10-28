import {
    Pagination,
    PreviousLink,
    PageLink,
    Dots,
    NextLink
} from '@strapi/design-system';
import React from 'react';

interface TimesheetPaginationProps {
    pagination: {
        page: number,
        pageCount: number,
    },
    onChange: ( pageNr: number ) => void,
}

const TimesheetPagination: React.FC< TimesheetPaginationProps > = ( { pagination, onChange } ) => {
    const { page, pageCount } = pagination;

    const handleClick = async ( e: React.MouseEvent< HTMLAnchorElement >, page: number ) => {
        e.preventDefault();

        onChange( page )
    
        console.log( e );
    }
    // Determine which pages to show (example: first 2, last 2, current ±1)
    const pages: number[] = [];

    for (let i = 1; i <= pageCount; i++) {
        if (i <= 2 || i > pageCount - 2 || Math.abs(i - page) <= 1) {
            pages.push(i);
        }
    }

    return (
        <Pagination activePage={ page } pageCount={ pageCount }>
            <PreviousLink
                href={ `/${ Math.max( page - 1, 1 ) }` }
                disabled={ page === 1 }
                onClick={ ( e ) => handleClick( e, Math.max( page - 1, 1 ) ) }
            >
                Previous
            </PreviousLink>

            { pages.map((p, i) => {
                if ( i > 1 && pages[ i - 1 ] + 1 !== p ) {
                    return <Dots key={`dots-${p}`}>…</Dots>; // gap
                }
                return (
                    <PageLink
                        key={ p }
                        number={ p }
                        href={ `/${ p }` }
                        onClick={ ( e ) => handleClick( e, p ) }
                    >
                        {p}
                    </PageLink>
                );
            } ) }

            <NextLink
                href={ `/${ Math.min( page + 1, pageCount ) }` }
                disabled={ page === pageCount }
                onClick={ ( e ) => handleClick( e, Math.min( page + 1, pageCount ) ) }
            >
                Next
            </NextLink>
        </Pagination>
    );
};

export default TimesheetPagination;