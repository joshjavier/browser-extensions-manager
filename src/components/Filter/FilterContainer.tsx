import { TabsList } from '@mantine/core';
import { FilterTab } from './FilterTab';

export function FilterContainer() {
  return (
    <TabsList>
      <FilterTab value="all" />
      <FilterTab value="active" />
      <FilterTab value="inactive" />
    </TabsList>
  );
}
