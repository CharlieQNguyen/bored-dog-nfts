import { Container, Grid } from "@mantine/core";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Container my={48}>
        <Grid>
          <Grid.Col span={4}>
            <Card />
          </Grid.Col>
          <Grid.Col span={4}>
            <Card />
          </Grid.Col>
          <Grid.Col span={4}>
            <Card />
          </Grid.Col>
          <Grid.Col span={4}>
            <Card />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
