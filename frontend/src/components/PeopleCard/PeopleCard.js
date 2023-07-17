import React from "react";
import { usePeople } from "../../api/people/usePeople";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Grid,
  Loader,
} from "@mantine/core";

export const PeopleCard = () => {
  const { data: people, isLoading, isError } = usePeople();
  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Container my="xl" px="xl">
          {isLoading || isError ? (
            <Loader />
          ) : (
            <Card.Section>
              <Grid>
                {people.results.map((person) => (
                  <Grid.Col xs={12} sm={6} md={4} key={person.name}>
                    <Card.Section component="a" href="https://mantine.dev/">
                      <Image
                        src="https://lumiere-a.akamaihd.net/v1/images/image_24641330.jpeg?region=0,101,2160,1215&width=1536"
                        height={160}
                        alt="Norway"
                      />
                      <h1>{person.name}</h1>
                      <h1>{person.height}</h1>
                    </Card.Section>
                  </Grid.Col>
                ))}
              </Grid>
            </Card.Section>
          )}
        </Container>
      </Card>
    </div>
  );
};
