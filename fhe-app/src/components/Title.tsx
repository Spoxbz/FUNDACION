export default function Title (){
    const user: string = "Bruno"

    if (user){
        return <h1>Hola {user}</h1>
    }
    return (
        <h1>Hola mundo</h1>
    )
}