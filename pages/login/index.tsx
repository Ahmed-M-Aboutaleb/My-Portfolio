import { Field, Form, Formik } from 'formik';
import Main from '../../layouts/Main';
import Ball from '../../svg/ball';

import styles from './login.module.scss';

function Login() {
    return (
        <Main title='Login'>
            <div className={styles.login}>
                <div className={`${styles.ball} ${styles.ball1}`}>
                    <Ball />
                </div>
                <div className={`${styles.ball} ${styles.ball2}`}>
                    <Ball />
                </div>
                <div className={styles.card}>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        onSubmit={() => {}}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div className={styles.input}>
                                    <Field
                                        name='username'
                                        id='username'
                                        type='text'
                                        placeholder='username'
                                    />
                                    <label
                                        htmlFor='username'
                                        className={styles.label}
                                    >
                                        Username
                                    </label>
                                </div>
                                <div className={styles.input}>
                                    <Field
                                        name='password'
                                        type='password'
                                        placeholder='password'
                                        id='password'
                                    />
                                    <label
                                        htmlFor='password'
                                        className={styles.label}
                                    >
                                        Password
                                    </label>
                                </div>
                                {errors.username ? (
                                    <p className={styles.errorP}>
                                        ❌ {errors.username}
                                    </p>
                                ) : errors.password ? (
                                    <p className={styles.errorP}>
                                        ❌ {errors.password}
                                    </p>
                                ) : (
                                    ''
                                )}
                                <button type='submit'>Login</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Main>
    );
}

export default Login;
