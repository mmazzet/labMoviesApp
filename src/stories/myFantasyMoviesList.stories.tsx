
import type { Meta, StoryObj } from '@storybook/react';
import MyFantasyMoviesList from '../components/myFantasyMoviesList';
import SampleFantasyMovies from './sampleFantasyMovies';
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";



const meta: Meta<typeof MyFantasyMoviesList> = {
  title: 'My Fantasy Movies Page/MyFantasyMoviesList',
  component: MyFantasyMoviesList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}><Story /></MemoryRouter>,
    (Story) => <MoviesContextProvider><Story /></MoviesContextProvider>,
  ], } satisfies Meta<typeof MyFantasyMoviesList>;
  export default meta;



type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { movies: SampleFantasyMovies },
};
Basic.storyName = "Default";