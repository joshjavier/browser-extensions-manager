import { TabsTab } from '@mantine/core';

interface FilterTabProps {
  value: string;
  label?: string;
}

export function FilterTab({ value, label }: FilterTabProps) {
  return <TabsTab value={value}>{label ?? value}</TabsTab>;
}
