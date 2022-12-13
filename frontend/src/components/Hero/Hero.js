import { Container, createStyles, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#1A1B1E",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(26, 27, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
    paddingTop: theme.spacing.xl * 6,
    paddingBottom: theme.spacing.xl * 6,
  },
}));

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Title>
          Welcome to the{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
          >
            Bored Dog NFT
          </Text>{" "}
          Collection!
        </Title>
        <Text mt={30} size="xl">
          A 100% guaranteed way to 100X your net worth.{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            fw={700}
          >
            No Cap. Straight Fax.
          </Text>{" "}
          🚀 🌕
        </Text>
      </Container>
    </div>
  );
};
