import { useState } from 'react';
import { Flex, Tabs, Title } from '@mantine/core';
import { ExtensionCard } from '@/components/ExtensionCard';
import { FilterContainer } from '@/components/Filter';
import sampleExtensions from '@/data.json';
import classes from './Home.module.css';

export function HomePage() {
  const [activeTab, setActiveTab] = useState<string | null>('all');

  return (
    <>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
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
          {sampleExtensions.map((e) => (
            <ExtensionCard {...e} />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="active">
          {sampleExtensions
            .filter((e) => e.isActive)
            .map((e) => (
              <ExtensionCard {...e} />
            ))}
        </Tabs.Panel>
        <Tabs.Panel value="inactive">
          {sampleExtensions
            .filter((e) => !e.isActive)
            .map((e) => (
              <ExtensionCard {...e} />
            ))}
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
