import { memo } from 'react';
import { Button, Flex, Group, Modal, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Extension, removeExtension } from '@/pages/Home/Home.state';
import { ActiveSwitch } from './ActiveSwitch';
import { ExtensionInfo } from './ExtensionInfo';
import classes from './ExtensionCard.module.css';

type ExtensionCardProps = Pick<Extension, 'id' | 'logo' | 'name' | 'description' | 'isActive'>;

export const ExtensionCard = memo(
  ({ id, logo, name, description, isActive }: ExtensionCardProps) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <Paper className={classes.root} withBorder>
        <ExtensionInfo logo={logo} name={name} description={description} />

        <Flex className={classes.actions}>
          <>
            <Modal
              opened={opened}
              onClose={close}
              title={`Remove ${name}`}
              classNames={{ title: classes.modalTitle }}
              radius={20}
              padding={20}
            >
              Are you sure you want to remove this extension? This action cannot be undone.
              <Group mt="lg" justify="flex-end">
                <Button variant="default" onClick={close}>
                  Cancel
                </Button>
                <Button variant="filled" onClick={() => removeExtension(id)}>
                  Remove
                </Button>
              </Group>
            </Modal>
            <Button variant="default" onClick={open}>
              Remove
            </Button>
          </>
          {isActive != null && <ActiveSwitch id={id} isActive={isActive} />}
        </Flex>
      </Paper>
    );
  }
);
