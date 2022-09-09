import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./MainScreen";
import PostScreen from "./PostScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainScreen} options={{title: 'Главная'}} />
                <Stack.Screen name="Post" component={PostScreen} options={{title: 'Пост'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}