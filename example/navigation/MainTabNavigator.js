import { createStackNavigator } from 'react-navigation';

import ButtonScreen from '../screens/ButtonScreen';
import ContainerScreen from '../screens/ContainerScreen';
import GridScreen from '../screens/GridScreen';
import IconScreen from '../screens/IconScreen';
import LinearGradientScreen from '../screens/LinearGradientScreen';
import MenuScreen from '../screens/MenuScreen';
import ModalScreen from '../screens/ModalScreen';
import RatingScreen from '../screens/RatingScreen';
import TextScreen from '../screens/TextScreen';
import TextLinkScreen from '../screens/TextLinkScreen';
import ToolbarScreen from '../screens/ToolbarScreen';

export default createStackNavigator({
    Menu: MenuScreen,
    // eslint-disable-next-line sort-keys
    Button: ButtonScreen,
    Container: ContainerScreen,
    Grid: GridScreen,
    Icon: IconScreen,
    LinearGradient: LinearGradientScreen,
    Modal: ModalScreen,
    Rating: RatingScreen,
    Text: TextScreen,
    TextLink: TextLinkScreen,
    Toolbar: ToolbarScreen,
});
