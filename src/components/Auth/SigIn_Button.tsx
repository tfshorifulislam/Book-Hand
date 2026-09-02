import { Button } from "../ui/button";
import Link from "next/link";

const SignInButton = () => {
    return (
        <Link href="/auth/signin">
            <Button variant="outline" size="default"
            className="cursor-pointer">
                Sign In
            </Button>
            
        </Link>
    );
};

export default SignInButton;