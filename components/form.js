import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.css";

export default function Form({ setvideoVisible }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setvideoVisible(true);
    const doc = {
      name: data["الاسم بالخير"],
      sex: data["الجنس"],
      email: data["عنوان البريد الالكتروني"],
      authority: data["الجهة المختصة"],
      text: data["نص المناشدة"],
    };

    fetch("/api/nashid", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doc),
    });
  }

  errors && console.log(errors["الاسم بالخير"]);

  return (
    <form
      dir="rtl"
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div className={`${styles.inputContainer} ${styles.ic1}`}>
        <input
          className={`${styles.input} ${
            errors["الاسم بالخير"] ? styles.warn : ""
          }`}
          type="text"
          placeholder="الاسم بالخير"
          {...register("الاسم بالخير", { required: true, maxLength: 80 })}
        />
      </div>
      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input
          className={`${styles.input} ${
            errors["عنوان البريد الالكتروني"] ? styles.warn : ""
          }`}
          type="text"
          placeholder="عنوان البريد الالكتروني"
          {...register("عنوان البريد الالكتروني", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
      </div>
      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <select
          className={styles.input}
          {...register("الجنس", { required: true })}
        >
          <option value="ذكر">ذكر</option>
          <option value=" انثى"> انثى</option>
          <option value=" فرخ"> فرخ</option>
        </select>
      </div>

      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <select
          className={styles.input}
          {...register("الجهة المختصة", { required: true })}
        >
          <option value="الامانة العامة لرئاسة الوزراء">
            الامانة العامة لرئاسة الوزراء
          </option>
          <option value=" القسم البلدي في محلتي"> القسم البلدي في محلتي</option>
          <option value=" الشركة العامة لتجارة الحبوب">
            الشركة العامة لتجارة الحبوب
          </option>
        </select>
      </div>

      <textarea
        style={{ height: "150px" }}
        className={`${styles.input} ${
          errors["نص المناشدة"] ? styles.warn : ""
        }`}
        type="text"
        placeholder="نص المناشدة"
        {...register("نص المناشدة", { required: true, max: 500, min: 1 })}
      />
      <div className={`${styles.inputContainer} ${styles.ic2}`}>
        <input className={styles.submit} type="submit" />
      </div>
    </form>
  );
}
