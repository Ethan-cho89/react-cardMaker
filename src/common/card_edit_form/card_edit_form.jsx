import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, onDelete, onChange }) => {
  const { id, name, work, job, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = (event) => {
    event.preventDefault();
    onDelete(event.target.id);
  };
  const handleChange = (e) => {
    onChange(e.target.id, e.target.name, e.target.value);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
      />
      <input className={styles.input} type="text" name="work" value={work} />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="job" value={job} />
      <input className={styles.input} type="text" name="email" value={email} />
      <textarea className={styles.textarea} name={message} value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" id={id} onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
