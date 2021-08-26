

export function ColorInput({onChangeColor}) {

    const colors = ['#FFAEBC', '#A0E7E5', '#B4F8C8', '#FBE7C6'];

    return (
        <section className="color-input flex" >
                {colors.map(color => (
                    <article key={color} onClick={(event)=>onChangeColor(event,color)}
                    style={{ backgroundColor: color }} className="color"></article>
                ))}

        </section>
    )
}