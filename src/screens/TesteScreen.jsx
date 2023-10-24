import "../css/style.css"

export default function TesteScreen() {
  return (
    <div>
      <form action="">
        <legend>Cadastro Aluno</legend>
        <label for="idNome" class="espacoForms">
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

        <label
          for="idSobreNome"
          class="
espacoForms"
        >
          Sobre Nome:
        </label>
        <input
          type="text"
          id="idSobreNome"
          name="nmSobreNome"
          value=""
          placeholder="Digite seu sobrenome aqui"
          minlength="3"
          maxlength="140"
          autocomplete="on"
          required
        />

        <label for="idDatas">Data de Nascimento</label>

        <input type="date" min="2000-01-01" max="2017-12-31" id="idDatas" />

        <label
          for="idEndereco"
          class="
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
          for="idNomeMae"
          class="
          espacoForms"
        >
          Nome da Mae:
        </label>
        <input
          type="text"
          id="idNomeMae"
          name="nmNomeMae"
          value=""
          placeholder=""
          minlength="3"
          maxlength="140"
          autocomplete="on"
          required
        />

        <label
          for="idNomePai"
          class="
          espacoForms"
        >
          Nome do Pai:
        </label>
        <input
          type="text"
          id="idNomePai"
          name="nmNomePai"
          value=""
          placeholder=""
          minlength="3"
          maxlength="140"
          autocomplete="on"
          required
        />

        <label
          for="idEmail"
          class="
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
          class="
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

        <label for="idSerie">Serie:</label>
        <input type="number" name="nmSerie" id="idSerie" min="1" max="9" />

        <label for="idSexo">Sexo:</label>

        <div
          class="
          divSel"
        >
          <input
            type="radio"
            name="nmGenero"
            id="idFemenino"
            class="
              flagSel"
          />

          <label for="idFemenino">Femenino</label>
        </div>

        <div
          class="
          divSel"
        >
          <input
            type="radio"
            name="nmGenero"
            id="idMasculino"
            class="
              flagSel"
          />
          <label for="idMasculino">Masculino</label>
        </div>

        <label>Necessidade Especiais:</label>

        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idAuditiva">Deficiencia Auditiva</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idMotora">Deficiencia Motora</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idVisual">Deficiencia Visual</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idCerebral">Paralesia Cerebral</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idAutista">Pertubacao do Espectro Autista</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idPsicologico">Pertubacao do Foro Psicologico</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idAprendizagem">Pertubacao de Aprendizagem</label>
        </div>
        <div
          class="
          divSel"
        >
          <input
            type="checkbox"
            class="
            flagSel"
          />
          <label for="idHabilidade">Altas Habilidades</label>
        </div>

        <div
          id="idButtonCadastroAluno"
          class="
          divButtonForm"
        >
          <button
            type="button"
            value="salvaCadAluno"
            class="
            buttonForm"
          >
            Salvar
          </button>
          <button
            type="reset"
            value="resetCadAluno"
            class="
            buttonForm"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}
