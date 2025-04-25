import { IconPuzzle } from '@tabler/icons-react';
import { Avatar, Button, Flex, Paper, Text, Title } from '@mantine/core';
import { ActiveSwitch } from './ActiveSwitch';
import classes from './ExtensionCard.module.css';

interface ExtensionCardProps {
  logo?: string;
  name: string;
  description: string;
  isActive?: boolean;
}

export function ExtensionCard({ logo, name, description, isActive }: ExtensionCardProps) {
  return (
    <Paper className={classes.root} withBorder>
      <Flex gap={16}>
        <Avatar size={60} radius={10} src={logo}>
          <IconPuzzle size={32} />
        </Avatar>
        <div className={classes.details}>
          <Title order={2} fz="xl">
            {name}
          </Title>
          <Text>{description}</Text>
        </div>
      </Flex>

      <Flex className={classes.actions}>
        <Button variant="default">Remove</Button>
        {isActive && <ActiveSwitch active={isActive} />}
      </Flex>
    </Paper>
  );
}
