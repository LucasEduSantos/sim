export const ReceitaQuadro = ({receita}) => (
        <div className="receita-quadro">
           <div key={receita.id} className="receitas3">
            <h2> Nº: {receita.id} {receita.title}</h2>
            <h4>{receita.ingredientes}</h4>
            <br></br>
            <h6>{receita.modoPreparo}</h6>
          </div>
        </div>
        );
