import Layout from "../../Layout";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../Context";
import { CustomForm } from "../../Components/CustomForm";

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
                    <button
                        className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                        disabled={!hasUserAnAccount}
                        onClick={() => handleSignIn()}
                    >
                        Log in
                    </button>
                </Link>
                <div className="text-center">
                <a
                    className="font-light text-xs underline underline-offset-4"
                    href="/"
                >
                    Forgot my password
                </a>
                </div>
                <button
                className="border border-black disabled:bg-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
                disabled={hasUserAnAccount}
                onClick={() => setView("create-user")}
                >
                Sign Up
                </button>     
            </CustomForm>
        ) : (
            <CustomForm
            fields={fieldsFormCreateUser}
            styles="flex flex-col gap-4 w-80"
            ref={form}
            textButton={`Create account`}>
            <Link to="/">
                <button
                    className="bg-black text-white w-full rounded-lg py-3"
                    onClick={() => createAccount()}
                >
                    Create account
                </button>
            </Link>
            </CustomForm>
        );

    return (
        <Layout css="flex flex-col items-center mt-10">
            <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
            {renderView()}
        </Layout>
    );
}

export default SignIn;
