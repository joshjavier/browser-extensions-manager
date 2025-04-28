import { useCallback, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { TabsPanel } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ExtensionCard } from '@/components/ExtensionCard';
import sampleExtensions from '@/data.json';
import { removeExtension, state } from '@/pages/Home/Home.state';
import { ConfirmationModal } from '../ConfirmationModal';

export function ExtensionsContainer() {
  const { extensions } = useSnapshot(state);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    state.extensions = sampleExtensions;
  }, []);

  const showModal = useCallback((id: number) => {
    const extension = state.extensions.find((e) => e.id === id);
    if (!extension) {
      throw new Error('Extension not found');
    }

    state.modal.title = `Remove ${extension.name}`;
    state.modal.extensionId = extension.id;

    open();
  }, []);

  const onRemoveExtension = () => {
    if (state.modal.extensionId == null) {
      throw new Error('Invalid extension id');
    }
    removeExtension(state.modal.extensionId);
    close();
  };

  return (
    <>
      {/* Confirmation modal */}
      <ConfirmationModal
        opened={opened}
        onClose={close}
        onConfirm={onRemoveExtension}
        confirmLabel="Remove"
      />

      {/* Extension cards */}
      <TabsPanel value="all">
        {extensions.map((e) => (
          <ExtensionCard key={e.id} {...e} onRemove={showModal} />
        ))}
      </TabsPanel>
      <TabsPanel value="active">
        {extensions
          .filter((e) => e.isActive)
          .map((e) => (
            <ExtensionCard key={e.id} {...e} onRemove={showModal} />
          ))}
      </TabsPanel>
      <TabsPanel value="inactive">
        {extensions
          .filter((e) => !e.isActive)
          .map((e) => (
            <ExtensionCard key={e.id} {...e} onRemove={showModal} />
          ))}
      </TabsPanel>
    </>
  );
}
