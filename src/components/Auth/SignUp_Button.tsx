import { Button } from "../ui/button";
import Link from "next/link";

const SignUpButton = () => {
    return (
        <Link href="/auth/signup">
           <Button variant="default" size="default"
           className="bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer">
            Sign Up
           </Button> 
        </Link>
    );
};

export default SignUpButton;