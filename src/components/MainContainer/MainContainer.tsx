import { useState } from 'react';
import { Container, Flex, Tabs, Title } from '@mantine/core';
import { ExtensionCard } from '../ExtensionCard';
import { FilterContainer } from '../Filter';
import classes from './MainContainer.module.css';

export function MainContainer() {
  const [activeTab, setActiveTab] = useState<string | null>('all');

  return (
    <Container variant="wrapper">
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        variant="pills"
        classNames={{ list: classes.list, tab: classes.tab, tabLabel: classes.tabLabel }}
      >
        <Flex justify="space-between" align="center" className={classes.header}>
          <Title className={classes.title}>Extensions List</Title>
          <FilterContainer />
        </Flex>

        <Tabs.Panel value="all">
          <ExtensionCard
            name="DevLens"
            description="Quickly inspect page layouts and visualize element boundaries."
            isActive
            logo="/images/logo-devlens.svg"
          />
        </Tabs.Panel>
        <Tabs.Panel value="active">Active Extensions</Tabs.Panel>
        <Tabs.Panel value="inactive">Inactive Extensions</Tabs.Panel>
      </Tabs>
    </Container>
  );
}
