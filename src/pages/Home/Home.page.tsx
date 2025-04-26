import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { Flex, Tabs, Title } from '@mantine/core';
import { ExtensionCard } from '@/components/ExtensionCard';
import { FilterContainer } from '@/components/Filter';
import sampleExtensions from '@/data.json';
import { Filter, state } from './Home.state';
import classes from './Home.module.css';

export function HomePage() {
  const snap = useSnapshot(state);
  useEffect(() => {
    state.extensions = sampleExtensions;
  }, []);

  return (
    <>
      <Tabs
        value={snap.filter}
        onChange={(value) => (state.filter = (value as Filter) ?? 'all')}
        variant="pills"
        classNames={{
          list: classes.list,
          tab: classes.tab,
          tabLabel: classes.tabLabel,
          panel: classes.panel,
        }}
      >
        <Flex justify="space-between" align="center" className={classes.header}>
          <Title className={classes.title}>Extensions List</Title>
          <FilterContainer />
        </Flex>

        <Tabs.Panel value="all">
          {snap.extensions.map((e) => (
            <ExtensionCard key={e.id} {...e} />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="active">
          {snap.extensions
            .filter((e) => e.isActive)
            .map((e) => (
              <ExtensionCard key={e.id} {...e} />
            ))}
        </Tabs.Panel>
        <Tabs.Panel value="inactive">
          {snap.extensions
            .filter((e) => !e.isActive)
            .map((e) => (
              <ExtensionCard key={e.id} {...e} />
            ))}
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
