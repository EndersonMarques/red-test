export default function RED({ red }) {
  return (
    <div
      style={{
        width: "30%",
        padding: "5px",
        border: "4px solid #000",
        borderRadius: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        width="60%"
        src={`https://api.portalmec.c3sl.ufpr.br${red.thumbnail}`}
      />
      <hr />
      <span>
        Tags:
        {red.tags.map((tag, key) => {
          return <b> {tag.name} </b>;
        })}
      </span>
      <span>
        Categoria: <b>{red.object_type}</b>
      </span>
      {red.link !== null && (
        <span>
          Link:{" "}
          <a href={red.link} target="_blank">
            Acessar RED
          </a>
        </span>
      )}
      <hr />
      <p>Autor(es): {red.author}</p>
      <hr />
      <span>Descrição: {red.description}</span>
      <hr />
    </div>
  );
}
