import type { Meta, StoryObj } from '@storybook/react';
import MyFantasyMovieForm from '../components/myFantasyMovieForm';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const meta = {
  title: 'My Fantasy Movies Page/MyFantasyMovieForm',
  component: MyFantasyMovieForm,
 decorators: [
    (Story: React.FC) => <MemoryRouter initialEntries={["/"]}><Story /></MemoryRouter>,
    (Story: React.FC) => (<QueryClientProvider client={queryClient}><Story /></QueryClientProvider>
    )
  ],
} satisfies Meta<typeof MyFantasyMovieForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

Default.storyName = 'Default';