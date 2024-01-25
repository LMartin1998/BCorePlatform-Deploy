import styles from "@/app/styles/Login.module.css";

export default function Login() {
    return (<>
    <div className={styles.image_container}>
        <div className={styles.form_container}>
           <div className="login_container">
            <p>Log In</p>
            <p>Please input your credential</p>
           </div>
           <div className={styles.email_container}>
                <label className="block text-sm font-medium text-white" htmlFor="email_input">E-mail</label>
                <input type="text" id="email_input" placeholder="Enter email..."></input>
           </div>
        </div>
    </div>
    </>);
}