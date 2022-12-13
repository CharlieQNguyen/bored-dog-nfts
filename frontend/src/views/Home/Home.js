import { Container, Grid, Loader } from "@mantine/core";
import { useNfts } from "../../api/nfts/useNfts";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

export const Home = () => {
  const { data: nfts, isLoading } = useNfts();

  return (
    <>
      <Header />
      <Hero />
      <Container my="xl" px="xl">
        {isLoading ? (
          <Loader />
        ) : (
          <Grid>
            {nfts.map((nft) => (
              <Grid.Col xs={12} sm={6} md={4}>
                <Card title={nft.name} price={nft.price} url={nft.url} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};
