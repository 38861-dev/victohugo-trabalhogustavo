import './Listagem.css'

function Listagem() {
  return (
    <>
    <main>
             <h1>Usuarios</h1>
             <table>
             <tr>
                 <td>Nome</td>
                 <td>Email</td>
                 <td>Senha</td>
                 <td>Editar</td>
                 <td>Excluir</td>
             </tr>
             <tr>
                 <td>pedro</td>
                 <td>pedro@gmail.com</td>
                 <td>1234</td>
                 <td>📝</td>
                 <td>🗑️</td>
             </tr>
             <tr>
                 <td>tiago</td>
                 <td>tiago@gmail.com</td>
                 <td>6789</td>
                 <td>📝</td>
                 <td>🗑️</td>
             </tr>
             <tr>
                 <td>joão</td>
                 <td>joao@gmail.com</td>
                 <td>1011</td>
                 <td>📝</td>
                 <td>🗑️</td>
             </tr>
             </table>
            </main>
            </>
  )
}

export default Listagem
