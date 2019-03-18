import React from 'react';
import {Formik} from 'formik';
// import './UserSearch.css';
import * as Yup from 'yup';
import {actions} from '../redux/actions';
import {connect} from 'react-redux';

class UserSearchComponent extends React.Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{name: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        this.props.loadUserData(values.name);
                        setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Required')
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                
                                <input
                                    id="name"
                                    placeholder="Enter your username"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name && touched.name ? 'error' : ''}
                                />
                                {errors.name && errors.touched && <div className="input-feedback">{errors.name}</div>}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Reset
                                </button>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        );
                    }}
                </Formik>
                <div className="output">
                    {JSON.stringify(this.props.user, null, 2)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserData: name => dispatch(actions.loadUserData(name))
    };
};

export const UserSearch = connect(mapStateToProps, mapDispatchToProps)(UserSearchComponent);
