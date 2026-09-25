import { getAuthProvider } from "@/actions/get-auth-provider";
import ChangePassword from "@/components/ChangePassword/ChangePassword";

const PasswordPage = async () => {
    const { isGoogleUser, hasCredentialAccount } =
        await getAuthProvider();

    return (
        <ChangePassword
            isGoogleUser={isGoogleUser && !hasCredentialAccount}
        />
    );
};

export default PasswordPage;