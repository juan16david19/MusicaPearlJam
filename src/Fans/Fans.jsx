import "./Fans.css"
export function Fans() {

    return (
        <>
        <br />
            <h1>REGISTRATE</h1>
            <form>
                <div>
                    <label htmlFor="name">NOMBRE:</label>
                    <input type="text" id="name" name="name"  required />
                </div>
                <div>
                    <label htmlFor="email">CORREO:</label>
                    <input type="email" id="email" name="email"  required />
                </div>
                <div>
                    <label htmlFor="birthDate">FECHA DE NACIMIENTO:</label>
                    <input type="date" id="birthDate" name="birthDate"  required />
                </div>
                <div>
                    <label htmlFor="password">CONTRASEÑA:</label>
                    <input type="password" id="password" name="password"  required />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}