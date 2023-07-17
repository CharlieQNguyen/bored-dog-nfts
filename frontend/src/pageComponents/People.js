import React from 'react'
import { Container, Grid, Loader } from "@mantine/core";
import { usePeople } from "../api/people/usePeople";
import { PeopleCard } from '../components/PeopleCard/PeopleCard';

export const People = () => {

  return (
    <div>
      <PeopleCard />
    </div>
  );
}
