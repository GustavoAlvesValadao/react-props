import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Pedido from "./Pedido";
import Cartao from "./Cartao";

const App = () => {
  return (
    <div className="container border rounded mt-2">
      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="13/05/2024">
            <Pedido
              icone="fas fa-hdd fa-2x"
              titulo="SSD"
              descricao="SSD Kingston A400 - SATA"
            />
          </Cartao>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="20/04/2021">
            <Pedido
              icone="fas fa-book fa-2x"
              titulo="Livro"
              descricao="Concrete Mathematics - Donald Knuth"
            />
          </Cartao>
          <div className="card">
            <div className="card-header text-muted">20/04/2021</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fas fa-book fa-2x"></i>
              </div>
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center">Livro</h4>
                <p className="text-center">
                  Concrete Mathematics - Donald Knuth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="21/01/2021">
            <Pedido
              icone="fas fa-laptop fa-2x"
              titulo="Notebook"
              descricao="Notebook Dell - 8 GB - i5"
            />
          </Cartao>

          <div className="card">
            {/* cabeçalho do cartão */}
            <div className="card-header text-muted">21/01/2021</div>
            {/* corpo do cartão */}
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fas fa-laptop fa-2x"></i>
              </div>
              {/* flex-grow 1: tomar espaço remanescente */}
              <div className="flex-grow-1 ms-2 border">
                <h4 className="text-center">Notebook</h4>
                <p className="text-center">Notebook Dell - 8Gb - i5</p>
                Produção: agosto de 2021 Professor Rodrigo Bossini https:// w
                ww.rodrigobossini.com.br
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
