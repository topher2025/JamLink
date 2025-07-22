import { Link } from 'react-router-dom';

export default function Layout({children}) {
    const token = localStorage.getItem("token");

    return(
        <div>
            <nav>
                <div>
                    <Link to="/">JamLink</Link>
                    {token ? (
                        <div>
                            <Link to="/logout">Logout</Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    )}

                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer>
                <small>&copy; 2025 JamLink. All rights reserved.</small>
            </footer>
        </div>
    )
}