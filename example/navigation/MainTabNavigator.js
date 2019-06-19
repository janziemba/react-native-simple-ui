import { createStackNavigator } from 'react-navigation';

import AvatarScreen from '../screens/AvatarScreen';
import ButtonScreen from '../screens/ButtonScreen';
import CardScreen from '../screens/CardScreen';
import ContainerScreen from '../screens/ContainerScreen';
import GridScreen from '../screens/GridScreen';
import IconScreen from '../screens/IconScreen';
import LinearGradientScreen from '../screens/LinearGradientScreen';
import ListItemScreen from '../screens/ListItemScreen';
import MenuScreen from '../screens/MenuScreen';
import ModalScreen from '../screens/ModalScreen';
import RatingScreen from '../screens/RatingScreen';
import TextScreen from '../screens/TextScreen';
import TextLinkScreen from '../screens/TextLinkScreen';
import ToolbarScreen from '../screens/ToolbarScreen';

export default createStackNavigator({
    Menu: MenuScreen,
    // eslint-disable-next-line sort-keys
    Avatar: AvatarScreen,
    Button: ButtonScreen,
    Card: CardScreen,
    Container: ContainerScreen,
    Grid: GridScreen,
    Icon: IconScreen,
    LinearGradient: LinearGradientScreen,
    ListItem: ListItemScreen,
    Modal: ModalScreen,
    Rating: RatingScreen,
    Text: TextScreen,
    TextLink: TextLinkScreen,
    Toolbar: ToolbarScreen,
});
