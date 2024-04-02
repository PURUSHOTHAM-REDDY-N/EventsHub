import { Redirect } from "expo-router";

const authRoute = 0

export default function Index() {
    
    return authRoute?<Redirect href="screens/home" />:<Redirect href="screens/auth" />;
}