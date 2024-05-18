import { createFileRoute, useRouter, useNavigate } from "@tanstack/react-router";
import { isAuthenticated, signIn, signOut } from "../utils/auth";
import {createClient} from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export const Route = createFileRoute('/login')({
    component: Login,
});

function Login() {
    const router = useRouter();
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <h2>Login</h2>
            {isAuthenticated() ? (
                <>
                    <h3>Hello user!</h3>
                    <button
                        onClick={async () => {
                            signOut();
                            router.invalidate();
                        }}
                    >
                        Sign out
                    </button>
                </>
            ) : (
                <button
                    onClick={async () => {
                        signIn();
                        router.invalidate();
                        navigate({
                            to: '/',
                        });
                    }}
                >
                    Sign in
                </button>
            )}
        </div>
    );
}