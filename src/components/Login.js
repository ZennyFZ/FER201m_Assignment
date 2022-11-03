export default function Login(){
    return (
        <div>
            <h4 style={{color: 'white'}}>Login to AnimeZ</h4>
            <div className="login">
                <div className="login-form">
                    <div className="login-form-title">Login</div>
                    <div className="login-form-input">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="login-form-input">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="login-form-button">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}