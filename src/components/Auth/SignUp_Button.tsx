import { Button } from "../ui/button";

const SignUpButton = () => {
    return (
        <div>
           <Button variant="default" size="default"
           className="bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 cursor-pointer">
            Sign Up
           </Button> 
        </div>
    );
};

export default SignUpButton;