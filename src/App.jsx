import Button from "./components/Button/Button";
import InputGroup from "./components/Input-Group/InputGroup";

function App() {
  return (
    <div style={{ width: '50%', padding: '2rem', backgroundColor: '#fff', margin: '2rem auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <h3 style={{ fontSize: '2rem' }}>Sign Up</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <form>
        <InputGroup label="What is your name?" type="text" htmlFor="name" id="name" />
        <InputGroup label="What is your email?" type="email" htmlFor="email" id="email" />
        <InputGroup label="What is your password?" type="password" htmlFor="pwd" id="pwd" />
        <div>
          <Button text="Reset" type="reset" variant="warning" size="small" />
          <Button text="Submit" type="submit" variant="primary" size="medium" />
          <Button text="Cancel" type="button" variant="error" size="large" />
        </div>
      </form>
    </div>
  );
}

export default App;
