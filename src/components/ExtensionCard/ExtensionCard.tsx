import { IconPuzzle } from '@tabler/icons-react';
import { Avatar, Button, Flex, Paper, Text, Title } from '@mantine/core';
import { ActiveSwitch } from './ActiveSwitch';
import classes from './ExtensionCard.module.css';

export function ExtensionCard() {
  return (
    <Paper className={classes.root} withBorder>
      <Flex gap={16}>
        <Avatar size={60} radius={10}>
          <IconPuzzle size={32} />
        </Avatar>
        <div className={classes.details}>
          <Title order={2} fz="xl">
            SpeedBoost
          </Title>
          <Text>Optimizes browser resource usage to accelerate page loading.</Text>
        </div>
      </Flex>

      <Flex className={classes.actions}>
        <Button variant="default">Remove</Button>
        <ActiveSwitch />
      </Flex>
    </Paper>
  );
}
