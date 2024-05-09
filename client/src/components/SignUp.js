const SignUp = () => {
  return (
    <div>
      <h1>Registration</h1>
      <form>
        <label for="name">Name:</label>
        <input type="text" required />

        <label for="email">Email:</label>
        <input type="email" required />

        <label for="password">Password:</label>
        <input type="password" required />

        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
