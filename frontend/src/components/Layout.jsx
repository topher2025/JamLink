import { Link } from 'react-router-dom';

export default function Layout({children}) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">JamLink</Link>
                    <div>
                        <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                        <Link to="/signup" className="btn btn-outlin-light">Sign Up</Link>
                    </div>
                </div>
            </nav>

            <main className="container mt-4">
                {children}
            </main>

            <footer className="bg-light text-center py-3 mt-5">
                <small>&copy; 2025 JamLink. All rights reserved.</small>
            </footer>
        </div>
    )
}