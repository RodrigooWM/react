import styles from './Frase.module.css'

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <h2><p>Frases bonitas!</p></h2>
            <p className={styles.fraseContent}>Na aula de hoje aprendemos a importar arquivos para dentro do App.js. Direcionando-os com os mesmos comandos usados em linux.</p>
        </div>
    )
}

export default Frase;