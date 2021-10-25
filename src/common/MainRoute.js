import React from 'react';
import { View, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import InstitutesList from '../screens/InstitutesList';
import Register from '../screens/Register';
import Home from '../screens/HomeTabs/Home';
import JobFair from '../screens/HomeTabs/JobFair';
import Jobs from '../screens/HomeTabs/Jobs';
import Profile from '../screens/HomeTabs/Profile';
import More from '../screens/HomeTabs/More';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../assets/assets';
import ForgetPassword from '../screens/ForgetPassword';
import Notifications from '../screens/HomeTabs/MoreTab/Notifications';
import ChangePassword from '../screens/HomeTabs/MoreTab/ChangePassword';
import Feed from '../screens/HomeTabs/MoreTab/Feed';
import FavJobs from '../screens/HomeTabs/MoreTab/FavJobs';
import Resume from '../screens/HomeTabs/MoreTab/Resume';
import TermsConditions from '../screens/HomeTabs/MoreTab/TermsConditions';
import PrivacyPolicy from '../screens/HomeTabs/MoreTab/PrivacyPolicy';
import EducationDetails from '../screens/HomeTabs/ProfileTab/EducationDetails';
import CreateEducationDetails from '../screens/HomeTabs/ProfileTab/CreateEducationDetails';
import GuardianDetails from '../screens/HomeTabs/ProfileTab/GuardianDetails';
import CreateGuardianDetails from '../screens/HomeTabs/ProfileTab/CreateGuardianDetails';
import Projects from '../screens/HomeTabs/ProfileTab/Projects';
import CreateProjects from '../screens/HomeTabs/ProfileTab/CreateProjects';
import Experience from '../screens/HomeTabs/ProfileTab/Experience';
import CreateExperience from '../screens/HomeTabs/ProfileTab/CreateExperience';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack(props) {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="InstitutesList" component={InstitutesList} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen options={{headerShown:false}} name="HomeTab" component={HomeTab} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Feed" component={Feed} />
            <Stack.Screen name="FavJobs" component={FavJobs} />
            <Stack.Screen name="Resume" component={Resume} />
            <Stack.Screen name="TermsConditions" component={TermsConditions} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="EducationDetails" component={EducationDetails} />
            <Stack.Screen name="CreateEducationDetails" component={CreateEducationDetails} />
            <Stack.Screen name="GuardianDetails" component={GuardianDetails} />
            <Stack.Screen name="CreateGuardianDetails" component={CreateGuardianDetails} />
            <Stack.Screen name="Projects" component={Projects} />
            <Stack.Screen name="CreateProjects" component={CreateProjects} />
            <Stack.Screen name="Experience" component={Experience} />
            <Stack.Screen name="CreateExperience" component={CreateExperience} />
        </Stack.Navigator>
    )
}
function HomeTab(props) {
    return (
        <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'transparent' }} initialRouteName="Aido" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon = getIconForTab(route, focused);
                return <View>
                    <Ionicons name={icon} size={wp(5)} color={color} />
                </View>
            },
            tabBarActiveTintColor: Colors.headerColor,
            headerShown:false
        })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="JobFair" component={JobFair} />
            <Tab.Screen name="Jobs" component={Jobs} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
    )
}

function getIconForTab(route, focused) {
    let icon;
    if (route.name === 'Home') {
        icon = focused ? 'home' : 'home-outline';
    } else if (route.name === 'JobFair') {
        icon = focused ? 'business' : 'business-outline';
    } else if (route.name === 'Jobs') {
        icon = focused ? 'ios-school' : 'ios-school-outline';
    } else if (route.name === 'More') {
        icon = focused ? 'menu-sharp' : 'menu-outline';
    } else {
        icon = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
    }
    return icon;
}
const MainRoute = props => {

    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
};

export default MainRoute;