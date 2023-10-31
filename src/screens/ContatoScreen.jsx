import "../css/style.css"

export default function ContatoScreen() {
  return (
    <div>
      <form action="" method="POST">
        <fieldset>
          <legend>Contato</legend>
          <label for="idNome" class="espacoForms">
            Nome Completo:
          </label>

          <input
            type="text"
            id="idNome"
            name="nmNome"
            value="Joazinho"
            placeholder="Digite seu nome aqui"
            minlength="3"
            maxlength="140"
            autocomplete="on"
            required
          />
          <label for="idEmail" class="espacoForms">
            Email:
          </label>
          <input
            type="email"
            id="idEmail"
            name="nmEmail"
            value="seuemail@gmail.com"
            inputmode="email"
            placeholder="Digite seu email"
            required
          />

          <label for="idEmpresa" class="espacoForms">
            Empresa/Organizacao:
          </label>
          <input
            type="text"
            id="idEmpresa"
            name="nmEmpresa"
            value=""
            placeholder="Digite nome da sua empresa"
            autofocus
          />
          <br />

          <label for="idTel" class="espacoForms">
            Tel:
          </label>
          <input
            type="tel"
            id="idTel"
            name="nmTel"
            value=""
            placeholder="*****-****"
            minlength="8"
            maxlength="10"
            pattern="^\([1-9]{2}\)[0-9]{4}\-[0-9]{4}$"
            autocomplete="off"
          />

          <label for="idMotivo" class="espacoForms">
            Motivo do contato:
          </label>
          <input
            type="text"
            id="idMotivo"
            name="nmMotivo"
            value="Motivo do Contato"
            placeholder=""
            readonly
          />
         
          <label for="idMsg" class="espacoForms">
            Mensagem:
          </label>
          <textarea
            name="nmMsg"
            id="idMsg"
            cols="30"
            rows="10"
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}
