const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };
    const RenderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Tambem posso renderizar isso!</h1>
        }
    };
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>Click aqui tambem!</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir =)")
                    }
                }}>Clica aqui, por favor!</button>
            </div>
            {RenderSomething(true)}
            {RenderSomething(false)}
        </div>
    );
};

export default Events;