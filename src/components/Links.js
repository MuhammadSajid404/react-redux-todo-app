import React from 'react';
import FilterLink from './FilterLink';
import { viewFilters } from '../Slices/ViewSlice';

function Links() {
  return (
    <>
      <FilterLink filter={viewFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={viewFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={viewFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </>
  );
}

export default Links;
