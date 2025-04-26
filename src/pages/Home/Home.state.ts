import { proxy } from 'valtio';

export type Status = 'active' | 'inactive';
export type Filter = Status | 'all';
export type Extension = {
  id?: number;
  logo?: string;
  name: string;
  description: string;
  isActive?: boolean;
};

export const state = proxy<{ filter: Filter; extensions: Extension[] }>({
  filter: 'all',
  extensions: [],
});

export const toggleActive = (id: Extension['id']) => {
  const extension = state.extensions.find((e) => e.id === id);
  if (extension) {
    extension.isActive = !extension.isActive;
  }
};

export const removeExtension = (id: Extension['id']) => {
  const index = state.extensions.findIndex((e) => e.id === id);
  if (index >= 0) {
    state.extensions.splice(index, 1);
  }
};
