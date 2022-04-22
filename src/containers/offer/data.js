import weatherIcon from '../../assets/icons/service1.png';
import flightsIcon from '../../assets/icons/service2.png';
import eventsIcon from '../../assets/icons/service3.png';
import customIcon from '../../assets/icons/service4.png';

const offers = [
  {
    icon: weatherIcon,
    iconAlt: 'Weather icon',
    title: 'Calculated Weather',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    addDecor: false,
  },
  {
    icon: flightsIcon,
    iconAlt: 'Flights icon',
    title: 'Best Flights',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    addDecor: true,
  },
  {
    icon: eventsIcon,
    iconAlt: 'Events icon',
    title: 'Local Events',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    addDecor: false,
  },
  {
    icon: customIcon,
    iconAlt: 'Settings icon',
    title: 'Customization',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    addDecor: false,
  },
];

export default offers;
