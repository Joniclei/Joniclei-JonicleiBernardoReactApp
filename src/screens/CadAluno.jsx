import "../css/style.css";

export default function CadAlunoScreen() {
  return (
    <div>
      <form action="">
        <fieldset>


        <legend>Cadastro Aluno</legend>
        <label for="idNome" className="espacoForms">
          {" "}
          Nome:{" "}
        </label>
        <input
          type="text"
          id="idNome"
          name="nmNome"
          value=""
          placeholder="Digite seu nome aqui"
          minlength="3"
          maxlength="140"
          autocomplete="on"
          required
        />


        <label for="idDatas">Data de Nascimento</label>

        <input type="date" min="2000-01-01" max="2017-12-31" id="idDatas" />

        <label
          for="idEndereco"
          className="
          espacoForms"
        >
          Enderedo:
        </label>
        <input
          type="text"
          id="idEndereco"
          name="nmEndereco"
          value=""
          placeholder="Digite seu endereco"
          required
        />
        
        <label
          for="idEmail"
          className="
          espacoForms"
        >
          Email:
        </label>
        <input
          type="email"
          id="idEmail"
          name="nmEmail"
          value=""
          inputmode="email"
          placeholder="Digite seu email"
          required
        />

        <label
          for="idTel"
          className="
          espacoForms"
        >
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

        <label for="idSexo">Sexo:</label>

        <div
          className="
          divSel"
        >
          <input
            type="radio"
            name="nmGenero"
            id="idFemenino"
            className="
              flagSel"
          />

          <label for="idFemenino">Femenino</label>
        </div>

        <div
          className="
          divSel"
        >
          <input
            type="radio"
            name="nmGenero"
            id="idMasculino"
            className="
              flagSel"
          />
          <label for="idMasculino">Masculino</label>
        </div>

        <label>Necessidade Especiais:</label>

        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idAuditiva">Deficiencia Auditiva</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idMotora">Deficiencia Motora</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idVisual">Deficiencia Visual</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idCerebral">Paralesia Cerebral</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idAutista">Pertubacao do Espectro Autista</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idPsicologico">Pertubacao do Foro Psicologico</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idAprendizagem">Pertubacao de Aprendizagem</label>
        </div>
        <div
          className="
          divSel"
        >
          <input
            type="checkbox"
            className="
            flagSel"
          />
          <label for="idHabilidade">Altas Habilidades</label>
        </div>

        <div
          id="idButtonCadastroAluno"
          className="
          divButtonForm"
        >
          <button
            type="button"
            value="salvaCadAluno"
            className="
            buttonForm"
          >
            Salvar
          </button>
          <button
            type="reset"
            value="resetCadAluno"
            className="
            buttonForm"
          >
            Limpar
          </button>
        </div>
        </fieldset>
      </form>
    </div>
  );
}
