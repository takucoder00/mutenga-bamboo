import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
  Title,
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  id: number;
  slug:string;
  image: string;
  title: string;
}

export function StoryCard({ id, slug, image, title }: BadgeCardProps) {
  const { classes, theme } = useStyles();

  let threeDots = title.length > 60 ? "..." : ""

  return (
    <Link href={`/stories/${slug}`}>
      <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Title order={4}>
            {title.substring(0, 60) + threeDots}
          </Title>
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button variant={"subtle"} className="w-full lg:mt-2 lg:ml-3 xl:mt-0 mt-3 text-green-500 border-0 py-2 px-6 focus:outline-none hover:text-green-600 rounded" radius="lg">
          Read More...
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
    
    </Link>
  );
}