import Layout from "../../Layout";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";
import { CustomForm } from "../../Components/CustomForm";
import { CustomButton } from "../../Components/CustomButton";
import { PAGE_NAME } from "../../Constants";

function SignIn() {
    const context = useContext(ShoppingCartContext);
    const [view, setView] = useState("login-user");

    //Account
    const account = localStorage.getItem("account");
    const parsedAccount = JSON.parse(account);

    //!For the moment Im not using this fragment of code but I might need it in the future
    //!----------------------------------------------------------------------------------------------------
    //Has an account?
    const noAccountInLocalStorage = parsedAccount
        ? Object.keys(parsedAccount).length === 0
        : true;
    const noAccountInLocalState = context.account
        ? Object.keys(context.account).length === 0
        : true;
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;
    console.log(hasUserAnAccount);
    //!----------------------------------------------------------------------------------------------------

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false);
        localStorage.setItem("sign-out", stringifiedSignOut);
        context.setSignOut(false);
        context.setSearchByCategory("");
        return <Navigate replace to={"/"} />;
    };

    const form = useRef(null);

    const createAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem("account", stringifiedAccount);
        context.setAccount(data);
        handleSignIn();
    };

    const goToCreateUserView = ()=>{
        setView("create-user")
    }

    const fieldsFormLogin = [
        { name: "email", type: "email", default: parsedAccount?.email, placeholder:"Email"},
        { name: "password", type: "password", default: parsedAccount?.password, placeholder:"Password"},
    ];
    const fieldsFormCreateUser = [
        { name: "name", type: "text", default: parsedAccount?.name, placeholder:"Name"},
        { name: "email", type: "email", default: parsedAccount?.email, placeholder:"Email"},
        { name: "password", type: "password", default: parsedAccount?.password,placeholder:"Password"},
    ];

    const renderView = () =>
        view === "login-user" ? (
            <CustomForm
            fields={fieldsFormLogin}
            styles="flex flex-col gap-4 w-80"
            ref={form}
            textButton={`Log In`}
            >
                <Link to="/">
                    <CustomButton buttonText={"Log In"} onClick={handleSignIn}/>
                </Link>
                <CustomButton buttonText={"Sign Up"} onClick={goToCreateUserView}/>
                <div className="text-center">
                    <a
                        className="font-light text-xs underline underline-offset-4"
                        href="/"
                    >
                        Forgot my password
                    </a>
                </div>   
            </CustomForm>
        ) : (
            <CustomForm
            fields={fieldsFormCreateUser}
            styles="flex flex-col gap-4 w-80"
            ref={form}
            textButton={`Create account`}>
            <Link to="/">
                <CustomButton buttonText={"Create User"} onClick={createAccount} />
            </Link>
            </CustomForm>
        );

    return (
        <Layout css="flex flex-col items-center mt-10">
            <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome to {PAGE_NAME}</h1>
            {renderView()}
        </Layout>
    );
}

export default SignIn;
