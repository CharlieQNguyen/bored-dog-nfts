import {
  Badge,
  Button,
  Card as MantineCard,
  Group,
  Image,
  Text,
} from "@mantine/core";

export const Card = ({ title, price, url }) => {
  return (
    <MantineCard shadow="lg">
      <MantineCard.Section>
        <Image src={url} />
      </MantineCard.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={700}>{title}</Text>
        <Badge color="blue" variant="light" size="lg">
          {price}
        </Badge>
      </Group>
      <Button variant="light" color="orange" fullWidth mt="md" radius="md">
        Buy Now
      </Button>
    </MantineCard>
  );
};
