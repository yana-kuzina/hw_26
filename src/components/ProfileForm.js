import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First name:{" "}
        <input type="text" {...register("firstName", { required: true })} />
        {errors.firstName && <span>First name is a required field</span>}
      </label>
      <label>
        Last name:{" "}
        <input type="text" {...register("lastName", { required: true })} />
        {errors.lastName && <span>Last name is a required field</span>}
      </label>
      Country:{" "}
      <select {...register("country", { required: true })}>
        <option value=""></option>
        <option value="ukraine">Ukraine</option>
        <option value="usa">USA</option>
        <option value="mordor">Mordor</option>
      </select>
      {errors.country && <span>Country is a required field</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default ProfileForm;
