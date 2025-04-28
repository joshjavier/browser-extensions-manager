import { useSnapshot } from 'valtio';
import { Flex, Tabs, Title } from '@mantine/core';
import { ExtensionsContainer } from '@/components/ExtensionsContainer';
import { FilterContainer } from '@/components/Filter';
import { Filter, state } from './Home.state';
import classes from './Home.module.css';

export function HomePage() {
  const { filter } = useSnapshot(state);

  return (
    <>
      <Tabs
        value={filter}
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

        <ExtensionsContainer />
      </Tabs>
    </>
  );
}
