import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import styles from './Search.module.css';
import { Formik } from 'formik';

const Search = () => {
  const { handleGetShows } = useAppContext();
  const [query, setQuery] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    handleGetShows(query);
  };

  return (
    <section>
      <h2>Search shows</h2>
      <div className={styles.form_container}>
        <Formik
          initialValues={{ show: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.show) {
              errors.show = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            handleGetShows(values.show);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Enter a show name"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div className={styles.error}>
                {errors.show && touched.show && errors.show}
              </div>
              <button type="submit">Search</button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Search;
