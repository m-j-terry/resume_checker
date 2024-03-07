import About from '../pages/About';
import Results from '../pages/Results';
import Input from '../pages/Input';

const routes = [
	{
		Component: Results,
		key: 'Results',
		path: '/results'
	},
	{
		Component: Input,
		key: 'Input',
		path: '/'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	}
];

export default routes;
