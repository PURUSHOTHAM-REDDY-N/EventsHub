import { Redirect } from "expo-router";

const authRoute = 0

export default function Index() {
    
    return authRoute?<Redirect href="screens/profile" />:<Redirect href="screens/auth" />;
}