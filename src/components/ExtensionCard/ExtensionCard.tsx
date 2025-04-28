import { memo } from 'react';
import { Button, Flex, Paper } from '@mantine/core';
import { Extension } from '@/pages/Home/Home.state';
import { ActiveSwitch } from './ActiveSwitch';
import { ExtensionInfo } from './ExtensionInfo';
import classes from './ExtensionCard.module.css';

type ExtensionCardProps = Pick<Extension, 'id' | 'logo' | 'name' | 'description' | 'isActive'> & {
  onRemove: (id: number) => void;
};

export const ExtensionCard = memo(
  ({ id, logo, name, description, isActive, onRemove }: ExtensionCardProps) => {
    return (
      <Paper className={classes.root} withBorder>
        <ExtensionInfo logo={logo} name={name} description={description} />

        <Flex className={classes.actions}>
          <Button variant="default" onClick={() => onRemove(id)}>
            Remove
          </Button>
          {isActive != null && <ActiveSwitch id={id} isActive={isActive} />}
        </Flex>
      </Paper>
    );
  }
);
