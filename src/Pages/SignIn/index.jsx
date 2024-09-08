import Layout from "../../Layout";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from '../../Context';

function SignIn() {
    const context = useContext(ShoppingCartContext);
    const [ view, setView ] = useState('user-info');

    //Account 
    const account = localStorage.getItem('account');
    const parsedAccount = JSON.parse(account);

    //Has an account?
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0: true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0: true;
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage;


    const handleSignIn = ()=>{
        const stringifiedSignOut = JSON.stringify(false);
        localStorage.setItem('sign-out',stringifiedSignOut);
        context.setSignOut(false);
        context.setSearchByCategory('');
        return <Navigate replace to={'/'}/>
    }

    const form = useRef(null);

    const createAccount = () => {
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        const stringifiedAccount = JSON.stringify(data);
        localStorage.setItem('account',stringifiedAccount);
        context.setAccount(data);
        handleSignIn();
    };

    const renderLogin = () => {
        return(
            <form ref={form} action="" className="flex flex-col gap-4 w-80">
                <div className="flex flex-col gap-1">
                    <label htmlFor="userEmail" className="font-light text-sm">User Email:</label>
                    <input
                        type="email"
                        id="userEmail"
                        name="userEmail"
                        defaultValue={parsedAccount?.email}
                        placeholder="Email"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="userPassword" className="font-light text-sm">Password:</label>
                    <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        defaultValue={parsedAccount?.password}
                        placeholder="*******" 
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"/>
                </div>
                <Link to="/">
                    <button className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                            disabled={!hasUserAnAccount}
                            onClick={() => handleSignIn() }
                    >
                        Log in
                    </button>
                </Link>
                <div className="text-center">
                    <a className="font-light text-xs underline underline-offset-4" href="/">Forgot my password</a>
                </div>
                <button
                    className="border border-black disabled:bg-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
                    disabled={hasUserAnAccount}
                    onClick={()=>setView('create-user-info')}
                    >
                        Sign Up

                </button>
            </form>
        );
    };

    const renderCreateUserInfo = () => {
        return(
            <form ref={form} action="" className="flex flex-col gap-4 w-80">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">Your name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={parsedAccount?.name}
                        placeholder="User's name"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-light text-sm">Your email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={parsedAccount?.email}
                        placeholder="Email" 
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-light text-sm">Your password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue={parsedAccount?.password}
                        placeholder="********"
                        className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"/>
                </div>
                <Link to="/">
                    <button className="bg-black text-white w-full rounded-lg py-3"
                    onClick={()=> createAccount()}>
                        Create account
                    </button>
                </Link>

            </form>
        );
    };

    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo():renderLogin();

    return (
        <Layout css='flex flex-col items-center mt-10'>
            <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
            {renderView()}
        </Layout>
    )
}

export default SignIn