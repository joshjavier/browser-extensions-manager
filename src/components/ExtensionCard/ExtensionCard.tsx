import { memo } from 'react';
import { IconPuzzle } from '@tabler/icons-react';
import { Avatar, Button, Flex, Group, Modal, Paper, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Extension, removeExtension } from '@/pages/Home/Home.state';
import { ActiveSwitch } from './ActiveSwitch';
import classes from './ExtensionCard.module.css';

type ExtensionCardProps = Pick<Extension, 'id' | 'logo' | 'name' | 'description' | 'isActive'>;

export const ExtensionCard = memo(
  ({ id, logo, name, description, isActive }: ExtensionCardProps) => {
    const [opened, { open, close }] = useDisclosure(false);

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
