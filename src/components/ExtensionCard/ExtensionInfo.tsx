import { memo } from 'react';
import { IconPuzzle } from '@tabler/icons-react';
import { Avatar, Flex, Text, Title } from '@mantine/core';
import { Extension } from '@/pages/Home/Home.state';
import classes from './ExtensionCard.module.css';

type ExtensionInfoProps = Pick<Extension, 'logo' | 'name' | 'description'>;

export const ExtensionInfo = memo(({ logo, name, description }: ExtensionInfoProps) => {
  return (
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
  );
});
