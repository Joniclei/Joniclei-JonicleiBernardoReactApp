import "../css/style.css";
export default function Login() {
  return (
    <form action="">
      <fieldset>
        <legend>Login</legend>
        <label for="idUser" class="espacoForms">
          Usuario:
        </label>

        <input
          type="text"
          id="idUser"
          name="nmUser"
          minlength="3"
          maxlength="140"
          required
        />
        <label for="idSenha">Senha:</label>
        <input type="password" name="nmSenha" id="idSenha" required />
        <button>Login</button>
      </fieldset>
    </form>
  );
}
