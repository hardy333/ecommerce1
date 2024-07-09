import { useForm } from "react-hook-form";

type FormTypes = {
  name: string;
  number: number;
  email: string;
};

const Practise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>();

  const onSbmit = (data: FormTypes) => {
    console.log(data);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <form onSubmit={handleSubmit(onSbmit)}>
        <input {...register("name")} type="text" />

        <div>
          <input
            style={{ border: errors.number ? "1px solid red" : "" }}
            {...register("number", {
              required: {
                value: true,
                message: "Please enter number",
              },
            })}
            type="number"
          />
          <p>{errors.number?.message}</p>
        </div>

        <input {...register("email")} type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Practise;
