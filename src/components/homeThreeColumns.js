const columnText = [
    {
        id: 1,
        number: 10,
        textPrimary: 'ODDANYCH WORKÓW',
        textAdditional: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
    },
    {
        id: 2,
        number: 5,
        textPrimary: 'WSPARTYCH ORGANIZACJI',
        textAdditional: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
    },
    {
        id: 3,
        number: 7,
        textPrimary: 'ZORGANIZOWANYCH ZBIÓREK',
        textAdditional: 'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
    }
]

export default function HomeThreeColumns(){
    return (
        <section className="homeThreeColumns">
            {columnText.map(function (item){
                return(
                <div key = {item.id} className='homeThreeColumns__box'>
                    <p className='homeThreeColumns__box--text-number'>{item.number}</p>
                    <p className='homeThreeColumns__box--text-primary'>{item.textPrimary}</p>
                    <p className='homeThreeColumns__box--text-additional'>{item.textAdditional}</p>
                </div>
                )
            })}

        </section>
    )
}