import { ReactComponent as VaporeonSVG } from './assets/vaporeon.svg';
import { ReactComponent as CharizardSVG } from './assets/Charizard.svg';
import { ReactComponent as BulbasaurSVG } from './assets/Bulbasaur.svg';
import { ReactComponent as DiglettSVG } from './assets/Diglett.svg';
import { ReactComponent as PikachuSVG } from './assets/Pikachu.svg';
import { ReactComponent as DragoniteSVG } from './assets/dragonite.svg';
import { ReactComponent as GengarSVG } from './assets/gengar.svg';
import { ReactComponent as MewtwoSVG } from './assets/mewtwo.svg';
import { ReactComponent as WaterSignSVG } from './assets/Pokémon_Water_Type_Icon.svg';


export const categories = [
  {
    id: 1,
    title: "water",
    component: <WaterSignSVG className='background-image' />,
    route: "/water",
  },
  {
    id: 2,
    title: "fire",
    component: <CharizardSVG className='background-image' />,
    route: "/fire",
  },
  {
    id: 3,
    title: "grass",
    component: <BulbasaurSVG className='background-image' />,
    route: "/grass",
  },
  {
    id: 4,
    title: "ground",
    component: <DiglettSVG className='background-image' />,
    route: "/ground",
  },
  {
    id: 5,
    title: "electric",
    component: <PikachuSVG className='background-image' />,
    route: "/electric",
  },
  {
    id: 6,
    title: "dragon",
    component: <DragoniteSVG className='background-image' />,
    route: "/dragon",
  },
  {
    id: 7,
    title: "ghost",
    component: <GengarSVG className='background-image' />,
    route: "/ghost",
  },
  {
    id: 8,
    title: "psychic",
    component: <MewtwoSVG className='background-image' />,
    route: "/psychic",
  },

];
