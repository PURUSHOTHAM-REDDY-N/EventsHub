import { Redirect } from "expo-router";

const authRoute = 1

export default function Index() {
    
    return authRoute?<Redirect href="screens/CreateEvent" />:<Redirect href="screens/auth" />;
}