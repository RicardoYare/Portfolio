import '../css/A2_HeaderDivs.css';

export function HeaderDiv({divTitulo}) {
    return (
        <div className='headerBody'>
            <div className='groupCircle'>
                <Circle/>
                <Circle/>
                <Circle/>
                <Circle/>
            </div>
            <DivTitle titulo={divTitulo}/>
            <div className='barGroup'>
                <Barra/>
                <Barra/>
                <Barra/>
                <Barra/>
            </div>
        </div>
    )
}

function Circle() {
    return (
        <div className='circle'></div>
    )
}

function DivTitle({titulo}){
    return(
        <div className='divTitle'>{titulo}</div>
    )
}

function Barra() {
    return(
        <div className='barra'></div>
    )    
}