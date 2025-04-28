import { useSnapshot } from 'valtio';
import { Button, Group, Modal, ModalProps } from '@mantine/core';
import { state } from '@/pages/Home/Home.state';
import classes from './ConfirmationModal.module.css';

type ConfirmationModalProps = ModalProps & {
  onConfirm: () => void;
  confirmLabel?: string;
};

export function ConfirmationModal({
  opened,
  onClose,
  onConfirm,
  confirmLabel,
  ...props
}: ConfirmationModalProps) {
  const { modal } = useSnapshot(state);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={modal.title}
      classNames={{ title: classes.title }}
      radius={20}
      padding={20}
      {...props}
    >
      {modal.description}
      <Group mt="lg" justify="flex-end">
        <Button variant="default" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="filled" onClick={onConfirm}>
          {confirmLabel ?? 'Confirm'}
        </Button>
      </Group>
    </Modal>
  );
}
