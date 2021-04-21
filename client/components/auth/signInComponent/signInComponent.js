import { useState, useEffect } from 'react';
import { signin, authenticate, isAuth } from '../../../actions/auth';
import Router from 'next/router';
import styles from './signInComponent.module.scss';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SigninComponent = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/signin`);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            console.log(data);
            if (!data) {
                setValues({ ...values, error: data, loading: false });
            } else {

                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 0) {
                        setValues({ ...values, showForm: false });

                        Router.push(`/about`);
                    }
                    else if (isAuth() && isAuth().role === 3) {
                        setValues({ ...values, showForm: false });

                        Router.push(`/cv`);
                    }
                    else {
                        Router.push(`/ signin`);
                    }
                });
            }
        });
    };



    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');





    const [InputClasses, setInputClass] = useState({

        emailClass: 'blur',
        passClass: 'blur',
        emailIcon: 'blur',
        passIcon: 'blur'
    });

    const handleOnClick = (event) => {
        event.preventDefault();
        if (event.target.type === 'email') {

            setInputClass({ ...InputClasses, emailClass: styles.focus, emailIcon: styles.colorTag })

        }
        else if (event.target.type === 'password') {

            setInputClass({ ...InputClasses, passClass: styles.focus, passIcon: styles.colorTag })

        }

        if (event.target.type === 'password' && email == '') {

            setInputClass({ emailClass: styles.blur, emailIcon: styles.blur, passClass: styles.focus, passIcon: styles.colorTag })

        }
        else if (event.target.type === 'email' && password == '') {

            setInputClass({ emailClass: styles.focus, emailIcon: styles.colorTag, passClass: styles.blur, passIcon: styles.blur })
        }

    }

    const handleOnMouseOut = (e) => {
        e.preventDefault();
        if (email === '' && password === '') {

            setInputClass({ emailClass: styles.blur, emailIcon: styles.blur, passClass: styles.blur, passIcon: styles.blur })


        }
        else if (email === '' && password !== '') {

            setInputClass({ emailClass: styles.blur, emailIcon: styles.blur, passClass: styles.focus, passIcon: styles.colorTag })

        }

        else if (password === '' && email !== '') {

            setInputClass({ emailClass: styles.focus, emailIcon: styles.colorTag, passClass: styles.blur, passIcon: styles.blur })

        } else if (password !== '' && email !== '') {

            setInputClass({ emailClass: styles.focus, emailIcon: styles.colorTag, passClass: styles.focus, passIcon: styles.colorTag })

        }

    }
    const handleOnMouseEnter = (e) => {
        e.preventDefault();
        var n = e.target.name
        if (n === 'email') {

            setInputClass({ ...InputClasses, emailClass: styles.focus, emailIcon: styles.colorTag })

        }
        else if (n === 'password') {

            setInputClass({ ...InputClasses, passClass: styles.focus, passIcon: styles.colorTag })

        }

        if (n === 'password' && email == '') {

            setInputClass({ emailClass: styles.blur, emailIcon: styles.blur, passClass: styles.focus, passIcon: styles.colorTag })

        }
        else if (n === 'email' && password == '') {

            setInputClass({ emailClass: styles.focus, emailIcon: styles.colorTag, passClass: styles.blur, passIcon: styles.blur })

        }
    }


    const handleInputChange = e => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value });
    };




    return (
        <React.Fragment >
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && (<div className={styles.bd}  >
                <img className={styles.wave} src="images/wave.png" />
                <div className={styles.container}>
                    <div className={styles.img}></div>
                    <div className={styles.loginContent}>
                        <form className={styles.form} onSubmit={handleSubmit} onMouseEnter={handleOnMouseEnter} >
                            <img src="/images/avatar.svg" />
                            <h2 className={styles.title}>Howdy!!</h2>
                            <div name='emaildiv' className={`${styles.inputDiv} ${styles.one} ${InputClasses.emailClass}`} onClick={handleOnClick} onMouseOut={handleOnMouseOut} >
                                <div className={styles.i}>
                                    <FontAwesomeIcon className={InputClasses.emailIcon} icon={faUser} />
                                </div>
                                <div className={styles.div}>
                                    <h5 >Email</h5>
                                    <label htmlFor="email"></label>
                                    <input name='email' type="email" autoComplete="email"
                                        className={styles.input} onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div name='passdiv' className={`${styles.inputDiv} ${styles.pass} ${InputClasses.passClass}`} onClick={handleOnClick} onMouseOut={handleOnMouseOut} >
                                <div className={styles.i}>
                                    <FontAwesomeIcon className={InputClasses.passIcon} icon={faLock} />
                                </div>
                                <div className={styles.div}>
                                    <h5 >Password</h5>
                                    <label htmlFor="password"></label>
                                    <input name='password' type="password" autoComplete="password" className={styles.input} onChange={handleInputChange} />
                                </div>
                            </div>
                            <a className={styles.a} href="#">Forgot Password?</a>
                            <input type="submit" className={styles.btn} value="Login" />
                        </form>
                    </div>
                </div>
            </div >
            )}
            <br />

        </React.Fragment>
    );
};

export default SigninComponent;