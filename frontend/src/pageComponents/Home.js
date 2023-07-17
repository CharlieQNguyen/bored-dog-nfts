import { Container, Grid, Loader } from "@mantine/core";
import { useNfts } from "../api/nfts/useNfts";
import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { usePeople } from "../api/people/usePeople";
import { useNotifications } from "../hooks/useNotifications";

export const Home = () => {
  const { data: nfts, isLoading, isError } = useNfts();
  useNotifications();

  const { data: people, isLoading: loading, isError: error } = usePeople();

  return (
    <>
      <Header />
      <Hero />
      <Container my="xl" px="xl">
        {isLoading || isError ? (
          <Loader />
        ) : (
          <Grid>
            {nfts.map((nft) => (
              <Grid.Col xs={12} sm={6} md={4} key={nft.id}>
                <Card title={nft.name} price={nft.price} url={nft.url} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
      <Container my="xl" px="xl">
        {loading || error ? (
          <Loader />
        ) : (
          <Grid>
            {people.results.map((person) => (
              <Grid.Col xs={12} sm={6} md={4} key={person.name}>
                <div>
                  <h1>{person.name}</h1>
                </div>
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
