import {
  Button,
  Container,
  createStyles,
  Header as MantineHeader,
} from "@mantine/core";

const useStyles = createStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));

export const Header = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={80}>
      <Container className={classes.header}>
        <div>
          <h1>Bored Dog NFTs</h1>
        </div>
        <div>
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
          >
            Subscribe
          </Button>
        </div>
      </Container>
    </MantineHeader>
  );
};
