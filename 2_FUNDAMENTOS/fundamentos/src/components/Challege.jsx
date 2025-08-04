const Challege = () => {
    const a = 10
    const b = 20
    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <p>soma = {a+b}</p>
            <button onClick={() => console.log(a + b)}>
                Click Aqui para ver a soma no console
            </button>
        </div>
    )
};

export default Challege