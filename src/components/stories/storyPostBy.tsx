import {
    UnstyledButton,
    UnstyledButtonProps,
    Group,
    Avatar,
    Text,
    createStyles,
  } from '@mantine/core';
  import { IconChevronRight } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    user: {
      display: 'block',
      width: '100%',
      padding: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },
  }));
  
  interface UserButtonProps extends UnstyledButtonProps {
    date: string;
    icon?: React.ReactNode;
  }
  
  export function StoryPostBy({ date, ...others }: UserButtonProps) {
    const { classes } = useStyles();
  
    return (
      <UnstyledButton className={classes.user} {...others}>
        <Group>
          <Avatar src={"https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2022/09/bamboo.jpg"} radius="xl" />
  
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Mutenga Bamboo
            </Text>
  
            <Text color="dimmed" size="xs">
              Posted on {date}
            </Text>
          </div>
  
        </Group>
      </UnstyledButton>
    );
  }