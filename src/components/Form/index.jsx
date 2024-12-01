import styles from "./Form.module.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {

    const [ url, setUrl ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ videos, setVideos ] = useState([]);
    const [ errors, setErrors ] = useState('');

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

		if(!regex.test(url) || url.length < 43) {
            setErrors("Erro! URL Inválida")
            return false
        } else {
            return url.substring(32,43);
        }

    }
    

    function onSave(e) {
        e.preventDefault();
        
        if(!category || category==="-") {
            setErrors('Erro! Escolha uma categoria');
            return;
        } else {
            setErrors('')
        }

        const urlVideo = valideUrl(url);

        if(urlVideo && category) {
            const newVideo = { url, category };
            setVideos([...videos, newVideo]);
            localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));
            setUrl('');
            setCategory('');
        } else {
            setErrors('Erro! URL Inválida')
        }
                
        
    }


    return(
        <section className={styles.container}>
            <h2>Cadastro de Video</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do video</label>
                    <input 
                        className={styles.inputs}
                        type="text" 
                        placeholder="Digite a URL do video" 
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength={"43"} 
                        maxLength={"43"}
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select 
                    className={styles.inputs}
                    value={category}
                    onChange={e=> setCategory(e.target.value)}
                    
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(category => {
                            return <option value={category}>{category}</option>
                        }
                        ) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    { errors }
                </div>
            </form>
        </section>
    )
}

export default Form;