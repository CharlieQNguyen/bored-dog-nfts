import {
  Badge,
  Button,
  Card as MantineCard,
  Group,
  Image,
  Text,
} from "@mantine/core";

export const Card = () => {
  return (
    <MantineCard maw={400} shadow="lg">
      <MantineCard.Section>
        <Image src="https://enlightenment-series-2022.s3.amazonaws.com/dog-1.jpg" />
      </MantineCard.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={700}>Dog #0001</Text>
        <Badge color="blue" variant="light" size="lg">
          0.001 DTX
        </Badge>
      </Group>
      <Button variant="light" color="orange" fullWidth mt="md" radius="md">
        Buy Now
      </Button>
    </MantineCard>
  );
};
