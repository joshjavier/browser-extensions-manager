import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { TabsPanel } from '@mantine/core';
import { ExtensionCard } from '@/components/ExtensionCard';
import sampleExtensions from '@/data.json';
import { state } from '@/pages/Home/Home.state';

export function ExtensionsContainer() {
  const { extensions } = useSnapshot(state);

  useEffect(() => {
    state.extensions = sampleExtensions;
  }, []);

  return (
    <>
      <TabsPanel value="all">
        {extensions.map((e) => (
          <ExtensionCard key={e.id} {...e} />
        ))}
      </TabsPanel>
      <TabsPanel value="active">
        {extensions
          .filter((e) => e.isActive)
          .map((e) => (
            <ExtensionCard key={e.id} {...e} />
          ))}
      </TabsPanel>
      <TabsPanel value="inactive">
        {extensions
          .filter((e) => !e.isActive)
          .map((e) => (
            <ExtensionCard key={e.id} {...e} />
          ))}
      </TabsPanel>
    </>
  );
}
