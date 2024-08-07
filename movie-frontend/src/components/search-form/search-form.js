'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function SearchForm() {
    const router = useRouter();

    const [title, setTitle] = useState("");

    const onChange = (value) => {
        setTitle(value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        router.push(`/?title=${title}`);
    }

    return (
        <div className='movie-form'>
            <form className='ml-3' onSubmit={(e) => onSubmit(e)}>
                <input 
                    id="movie-title-input" 
                    type='text' 
                    placeholder="Título do filme" 
                    value={title}
                    onChange={(e) => onChange(e.target.value)}
                />
                <button type="submit" className="btn bg-blue-500 hover:bg-blue-700">Pesquisar</button>
            </form>
        </div>
    )
}